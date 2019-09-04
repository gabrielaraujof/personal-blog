import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import Social from '../Social'

import * as S from './styled'

function Bio() {
  const { site, avatar } = useStaticQuery(
    graphql`
      query MainBioQuery {
        avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
            bio
            social {
              twitter
              github
              facebook
              medium
              linkedin
              instagram
            }
          }
        }
      }
    `
  )

  const { author, social, bio } = site.siteMetadata

  return (
    <S.BioWrapper>
      <S.BioInfo>
        <S.BioTitle>{author}</S.BioTitle>
        <Social social={social} />
        <p>{bio}</p>
      </S.BioInfo>
      <Avatar fixed={avatar.childImageSharp.fixed} alt={author} />
    </S.BioWrapper>
  )
}

export default Bio
