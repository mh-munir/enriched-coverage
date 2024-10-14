import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Medicare from "@/components/medicare/Medicare";
import { MediCareContents } from "@/demodata/DemoData";
import { GoArrowRight } from "react-icons/go";
import Service from "@/components/services/Service";
import { ServiceContents } from "@/demodata/DemoData";
import OurSlider from "@/components/slider/Slider";


const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const CssClasses = (index) => {
    let dynamicClass;
    switch (index) {
      case 0:
        return (dynamicClass = `flex items-center gap-6 border-b border-gray-200 pb-10`);
      default:
        return (dynamicClass = `flex items-center gap-6 border-b border-gray-200 py-10`);
    }
  };

  return (
    <main>
      <section
        className="min-h-screen bg-hero-img bg-cover bg-center relative 
                        z-10 before:absolute before:w-full before:backdrop-blur-sm before:bg-black before:h-full before:top-0 before:left-0 before:opacity-50 before:-z-10"
      >
        <div className="min-h-screen max-w-7xl mx-auto grid items-center px-5">
          <div className="flex flex-col gap-10 items-start">
            <h1
              className={`text-white text-7xl font-semibold max-w-xl leading-[1.2] ${playfair.className}`}
            >
              Your Medicare, your way
            </h1>
            <p className="text-white font-normal text-xl max-w-md">
              Confidently navigate the world of healthcare with us by your side,
              ensuring you make the best decisions for your needs.
            </p>
            <Link
              className="text-white text-xl font-medium rounded-full bg-orange-700 px-10 py-4 hover:bg-orange-800 duration-100 flex items-center gap-2 hover:gap-4"
              href="/contact"
            >
              Contact US <GoArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white z-10 bg-cover bg-center py-24 relative before:absolute before:bg-medicare-img before:-z-10 before:w-full before:h-full before:top-0 before:left-0 before:bg-cover before:bg-center before:opacity-50">
        <div className="max-w-7xl mx-auto grid grid-cols-medicareGird gap-x-20 gap-y-5 px-5">
          <div>
            <h2
              className={`text-6xl max-w-xl font-semibold text-gray-700 mb-5 leading-[1.2] ${playfair.className}`}
            >
              Your Medicare partner for life
            </h2>
            <p className="text-xl max-w-xl font-medium text-gray-900">
              We pride ourselves on being your first call for help or guidance
              whenever needed, personally committed to your health journey.
            </p>
          </div>
          <div>
            {MediCareContents.map((MediCareContent, index) => {
              return (
                <Medicare
                  key={index}
                  MedicarClass={CssClasses(index)}
                  MedicareTitle={MediCareContent.title}
                  MedicarIcon={MediCareContent.icon}
                  MedicareDes={MediCareContent.des}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2
              className={`text-6xl max-w-4xl mx-auto text-center font-normal text-gray-700 mb-10 leading-[1.2] ${playfair.className}`}
            >
              Discover our solutions to easy, personalized Medicare
            </h2>
            <Link
              className="text-white text-xl font-medium rounded-full bg-orange-700 px-10 py-4 hover:bg-orange-800 duration-100 w-80 mx-auto flex gap-3 items-center justify-center"
              href="/service"
            >
              View Our Services{" "}
              <span>
                <GoArrowRight />
              </span>{" "}
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-x-5 gap-y-10">
            {ServiceContents.map((ServiceContent, index) => {
              return (
                <Service
                  key={index}
                  ServiceImg={ServiceContent.img}
                  ServiceAlt={ServiceContent.alt}
                  ServiceTitle={ServiceContent.title}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-200 py-24">
        <div className="max-w-full mx-auto">
          <div className="text-center">
            <h2
              className={`text-3xl max-w-4xl mx-auto text-center font-normal text-gray-900 mb-10 leading-[1.2] ${playfair.className}`}
            >
              Offering a wide range of carriers
            </h2>
           <div>
           <OurSlider/>
           </div>
          </div>
        </div>
      </section>
    </main>
  );
}
