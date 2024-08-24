import React from 'react'
import { SOCIAL_MEDIAS } from '../../constants/Icons'

const SocialLinks = () => {
  return (
    <div className='flex gap-2 text-xl items-center'>
      <span className='text-sm'>Follow us on :</span>  {SOCIAL_MEDIAS.map((item) => item.icon)}
    </div>
  )
}

export default SocialLinks
