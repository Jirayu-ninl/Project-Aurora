import { UI } from '@global/store'
import { contacts as contactsRaw } from '@global/config'
import SocialLinkIcon from './socialLinkIcon'

const CreditBlock = () => {
  const _setCursor = UI((state) => state.setCursor)

  const contacts = [
    contactsRaw.facebook,
    contactsRaw.instagram,
    contactsRaw.youtube,
    contactsRaw.mail,
    contactsRaw.discord,
  ]
  return (
    <div
      className='flex items-center space-x-4 md:space-x-7'
      onMouseEnter={() => {
        _setCursor('logo')
      }}
      onMouseLeave={() => {
        _setCursor(false)
      }}
      onClick={() => {
        _setCursor(false)
      }}
    >
      {contacts.map((v, i) => (
        <SocialLinkIcon
          name={v.name}
          icon={v.icon}
          link={v.link}
          index={i}
          key={i}
        />
      ))}
    </div>
  )
}

export default CreditBlock
