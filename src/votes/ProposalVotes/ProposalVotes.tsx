import dayjs from 'dayjs'
import dayjsUTC from 'dayjs/plugin/utc'
import { GraphQLClient } from 'graphql-request'
import { useEffect, useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom'
import { DXDAO_DAOSTACK_GRAPHQL_URL } from '../../constants/constants'
import {
  GetProposalVotesSearchFromProposalQuery,
  getSdk,
} from '../../graphql/generated/queries'
import { VotesChart } from '../VotesChart/VotesChart'

// add UTC plugin
dayjs.extend(dayjsUTC)

interface ProposalVotesProps {
  proposalId: string
}

export function ProposalVotes({ proposalId }: ProposalVotesProps) {
  const [loading, setLoading] = useState(true)
  const [proposal, setProposal] =
    useState<GetProposalVotesSearchFromProposalQuery['proposal']>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)

  useEffect(() => {
    // reset state
    unstable_batchedUpdates(() => {
      setLoading(true)
      setProposal(null)
      setFetchError(null)
    })

    const sdk = getSdk(new GraphQLClient(DXDAO_DAOSTACK_GRAPHQL_URL))

    sdk
      .getProposalVotesSearchFromProposal({ proposalId })
      .then((res) => {
        if (res.proposal) {
          setProposal(res.proposal)
        }
      })
      .catch((err) => {
        console.error(err)
        if (err.response && err.response.errors) {
          setFetchError(err.response.errors[0].message)
        } else if (err.message) {
          setFetchError(err.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [proposalId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (fetchError) {
    return <div>{fetchError}</div>
  }

  return (
    <>
      <h2>Proposal Votes: {proposal?.title}</h2>
      <VotesChart proposal={proposal} />
    </>
  )
}
