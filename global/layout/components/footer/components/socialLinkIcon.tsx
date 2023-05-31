import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { aFooterSocialIcon } from '@global/config/defineAnimationConfig'

export default function SocialLinkIcon({
  name,
  icon,
  link,
  index,
}: {
  name: string
  icon: string
  link: string
  index: number
}) {
  return (
    <motion.a
      initial={aFooterSocialIcon.initial}
      animate={aFooterSocialIcon.animate}
      transition={aFooterSocialIcon.transition(index === 0 ? 0 : index / 10)}
      href={link}
    >
      {SocialIconGenerator(name)}
    </motion.a>
  )
}

const SocialIconGenerator = (name: string) => {
  if (name === 'Facebook') {
    return (
      <FontAwesomeIcon
        // icon={brands('facebook-f')}
        icon={faFacebook}
        size='xs'
        className='Anim AnimScale AnimOpacity-40 h-4'
      />
    )
  } else if (name === 'Instagram') {
    return (
      <FontAwesomeIcon
        // icon={brands('instagram')}
        icon={faInstagram}
        size='xs'
        className='Anim AnimScale AnimOpacity-40 h-4'
      />
    )
  } else if (name === 'Youtube') {
    return (
      <FontAwesomeIcon
        // icon={brands('youtube')}
        icon={faYoutube}
        size='xs'
        className='Anim AnimScale AnimOpacity-40 h-4'
      />
    )
  } else if (name === 'Mail') {
    return (
      <FontAwesomeIcon
        // icon={solid('envelope')}
        icon={faEnvelope}
        size='xs'
        className='Anim AnimScale AnimOpacity-40 h-4'
      />
    )
  } else {
    return (
      <FontAwesomeIcon
        // icon={brands('discord')}
        icon={faDiscord}
        size='xs'
        className='Anim AnimScale AnimOpacity-40 h-4'
      />
    )
  }
}
