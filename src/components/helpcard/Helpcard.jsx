import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Helpcard = ({HelpLink,HelpImg, HelpTitle, HelpDes, HelpAlt}) => {
  return (
    <Link className='flex gap-4 p-5 bg-zinc-200' href={`${HelpLink}`}>
        <Image src={HelpImg} alt={HelpAlt}/>
        <div>
            <h4 className='text-xl font-bold text-gray-900'>{HelpTitle}</h4>
            <p className='text-lg'>{HelpDes}</p>
        </div>
    </Link>
  )
}

export default Helpcard