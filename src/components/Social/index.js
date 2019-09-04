import React from 'react'

import Icons from './Icons'
import socialLinks from './content'

import * as S from './styled'

function Social({ social }) {
  const profileURL = s => `${socialLinks[s]}/${social[s]}`

  return (
    <S.SocialWrapper>
      <S.SocialList>
        {Object.keys(social)
          .filter(s => social[s])
          .map(s => {
            const Icon = Icons[s]
            return (
              <S.SocialItem key={s}>
                <S.SocialLink
                  aria-label={`${s} profile`}
                  href={profileURL(s)}
                  title={s
                    .charAt(0)
                    .toUpperCase()
                    .concat(s.slice(1))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
      </S.SocialList>
    </S.SocialWrapper>
  )
}

export default Social
