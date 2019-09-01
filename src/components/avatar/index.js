import Image from 'gatsby-image'
import styled from 'styled-components'

const Avatar = styled(Image)`
  margin: 0;
  border: ${({ small }) => (small ? 'none' : '0.8rem solid lavender')};
  border-radius: 100%;
  min-width: ${({ small }) => (small ? 5 : 15)}rem;
`
export default Avatar
