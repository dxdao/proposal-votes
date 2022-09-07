import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #fff;
  height: 50px;
  margin-bottom: 20px;
  flex-basis: 100%;
`

const StyledHeaderInner = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  justify-items: center;
  align-items: center;
`

const StyledHeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`

export function Header() {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledHeaderTitle>DXdao Proposal Votes</StyledHeaderTitle>
      </StyledHeaderInner>
    </StyledHeader>
  )
}
