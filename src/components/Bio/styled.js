import styled from 'styled-components'

export const BioWrapper = styled.header`
  display: flex;
  margin: 10em 0 4.375rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    margin-top: 2em;
  }
`

export const BioInfo = styled.section`
  margin-right: 1.5rem;

  @media (max-width: 1024px) {
    order: 1;
    flex: 0 0 100%;
    margin-right: 0;
  }
`

export const BioTitle = styled.h1`
  margin: 0 0 0.875rem;

  @media (max-width: 1024px) {
    margin-top: 2.5rem;
  }
`
