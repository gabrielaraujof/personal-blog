import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from './Avatar'

function Signature() {
  const { site, avatar } = useStaticQuery(
    graphql`
      query BioQuery {
        avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50, quality: 80) {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
        site {
          siteMetadata {
            author
            shortBio
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const { author, social, shortBio } = site.siteMetadata

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '4.375rem',
      }}
    >
      <Avatar fixed={avatar.childImageSharp.fixed} alt={author} small />
      <p style={{ margin: 0 }}>
        Written by <strong>{author}</strong>
        {shortBio ? ` ${shortBio}` : ''}.{` `}
        {social.twitter ? (
          <a href={`https://twitter.com/${social.twitter}`}>
            You should follow them on Twitter.
          </a>
        ) : null}
      </p>
    </div>
  )
}

export default Signature
