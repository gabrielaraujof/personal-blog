import styled from 'styled-components'

export const SocialWrapper = styled.nav`
  max-width: 100rem;

  @media only screen and (min-width: 320px) {
    max-width: 20rem;
  }
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SocialItem = styled.li`
  display: inline-flex;
  margin: 0;
`

export const SocialLink = styled.a`
  margin: 0;
  padding: 0.8rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.48);
  transition: color 0.4s;

  :hover {
    color: #7dffb3;
  }
`

export const IconWrapper = styled.div`
  svg {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
  }
`
