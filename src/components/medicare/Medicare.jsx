import {Playfair_Display} from 'next/font/google';
const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
  })

const Medicare = ({MedicarClass, MedicareTitle, MedicareDes, MedicarIcon}) => {
  return (
    <div className={MedicarClass}>
        <span>
           {MedicarIcon}
        </span>
        <div>
            <h3 className={`text-2xl font-semibold text-gray-900 mb-3 ${playfair.className}`}>{MedicareTitle}</h3>
            <p className="text-lg font-normal text-gray-900">{MedicareDes}</p>
        </div>
    </div>
  )
}

export default Medicare