import { formatEther } from '@ethersproject/units'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import dayjs from 'dayjs'
import { Bar } from 'react-chartjs-2'
import { getAddressLabel } from '../../dxdao'
import { GetProposalVotesSearchFromProposalQuery } from '../../graphql/generated/queries'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export interface VotesChartProps {
  proposal: GetProposalVotesSearchFromProposalQuery['proposal']
}

const votePassBackgroundColor = '#38b000'
const voteFailBackgroundColor = '#e5383b'

/**
 * Chart component for displaying votes
 */
export function VotesChart({ proposal }: VotesChartProps) {
  const votes = proposal?.votes || []

  // Use datetime as x-axis label
  const labels = votes.map(({ createdAt }) =>
    dayjs(parseInt(createdAt) * 1000).format('YYYY-MM-DD HH:mm:ss')
  )

  // Compute the vote pass and fail data
  // Make fail votes negative so they are displayed on bottom of chart
  const voteDataList = votes.map(({ outcome, reputation }) => {
    const repNumber = parseInt(formatEther(reputation))

    if (outcome === 'Fail') {
      return -repNumber
    }

    return repNumber
  })

  // compute bar color, pass votes are green, fail votes are red
  const voteBackgroundColorList = voteDataList.map((rep) =>
    rep < 0 ? voteFailBackgroundColor : votePassBackgroundColor
  )

  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            data: voteDataList,
            backgroundColor: voteBackgroundColorList,
          },
        ],
      }}
      options={{
        responsive: true,
        // interaction: {
        //   mode: 'point' as const,
        //   intersect: false,
        // },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            align: 'start',
            color: '#000',
            display: true,
            font: {
              family: 'Open Sans',
            },
            text: proposal?.title || 'Votes',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const { dataIndex } = context
                // from the index, return the label
                const { voter } = votes[dataIndex]

                const voteAddressLabel = getAddressLabel(voter)

                return `${
                  voteAddressLabel ? voteAddressLabel : 'Unknown voter'
                } (${voter})`
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
    />
  )
}
