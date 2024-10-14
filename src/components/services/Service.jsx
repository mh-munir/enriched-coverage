import {Playfair_Display} from 'next/font/google';
import Image from 'next/image';
const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
  })

const Service = ({ServiceAlt, ServiceImg, ServiceTitle}) => {
  return (
    <div>
        <Image className="w-full h-auto mb-4" src={ServiceImg} alt={ServiceAlt}/>
        <h3 className={`text-3xl font-semibold text-gray-900 ${playfair.className}`}>{ServiceTitle}</h3>
    </div>
  )
}

export default Service