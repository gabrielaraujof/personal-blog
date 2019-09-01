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

export const BioSocialLinks = styled.ul`
  margin-bottom: 0.875rem;
  padding: 0;
  list-style-type: none;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  svg path {
    fill: rgba(0, 0, 0, 0.48);
  }

  svg:hover path {
    fill: #7dffb3;
  }

  @media only screen and (max-width: 480px) {
    margin-left: 0;
  }

  @media only screen and (max-width: 320px) {
    display: block;
    font-size: 0.8rem;
  }
`

export const SocialLink = styled.li`
  display: inline-block;
  margin-right: 1.5rem;
  margin-bottom: 0;

  :last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 320px) {
    margin-right: 0.8rem;
  }
`
