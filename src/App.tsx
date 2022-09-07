import React, { useState } from 'react'
import { ProposalVotes } from './votes/ProposalVotes'
import { Container } from './ui/Container/Container'
import { Header } from './ui/Header'
import { Card, CardBody } from './ui/Card/Card'
import styled from 'styled-components'

const defaultProposalId =
  '0xfd770ec7ad96d6a17a697d467f8fb95a47e0cbf68b6121e37444d52ff79bf221'

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export function App() {
  const [proposalId, setProposalId] = useState(defaultProposalId)

  return (
    <>
      <Header />
      <Container>
        <Card>
          <CardBody>
            <FormGroup>
              <label>Proposal ID:</label>
              <input
                type='text'
                placeholder='Enter a propsaol ID'
                value={proposalId}
                onChange={(e) => setProposalId(e.target.value)}
              />
            </FormGroup>
            <ProposalVotes proposalId={proposalId} />
          </CardBody>
        </Card>
      </Container>
    </>
  )
}
