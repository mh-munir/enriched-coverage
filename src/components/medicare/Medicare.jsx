import {Playfair_Display} from 'next/font/google';
import Image from 'next/image';
const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
  })

const Medicare = ({MedicarClass, MedicareTitle, MedicareDes, MedicarIcon}) => {
  return (
    <div className={MedicarClass}>
        <Image src={MedicarIcon} alt='Your Medicar life' />
        <div>
            <h3 className={`text-2xl font-medium text-gray-700 mb-3 ${playfair.className}`}>{MedicareTitle}</h3>
            <p className="text-lg font-normal text-gray-900">{MedicareDes}</p>
        </div>
    </div>
  )
}

export default Medicare