import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Medicare from "@/components/medicare/Medicare";
import { MediCareContents } from "@/demodata/DemoData";
import Service from "@/components/services/Service";
import { ServiceContents } from "@/demodata/DemoData";
import OurSlider from "@/components/slider/Slider";
import Image from "next/image";
import ReviewImg from "@/img/image-testimonial.jpg.webp"
import Medicar101 from "@/img/maxresdefault.jpg";
import Reviewslider from "@/components/reviewslider/Reviewslider";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import Helpcard from "@/components/helpcard/Helpcard";
import Medicar101icon from "@/img/medicare101.svg";
import FaqIcon from "@/img/faqicon.svg";
import CallIcon from "@/img/callicon.svg";


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
              className={`text-3xl max-w-4xl mx-auto text-center font-normal text-gray-900 mb-24 leading-[1.2] ${playfair.className}`}
            >
              Offering a wide range of carriers
            </h2>
           <div>
           <OurSlider/>
           </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
      <div className="max-w-[1600px] ml-auto">
            <div className="grid grid-cols-2">
              <div className="md:pr-24">
                <h4 className={`text-3xl text-gray-700 font-medium mb-10 ${playfair.className}`}>Why our customers trust us</h4>
                <Reviewslider/>
              </div>
              <div>
              <Link
                className="text-white text-xl font-medium rounded-full bg-orange-700 py-4 hover:bg-orange-800 duration-100 flex items-center justify-center w-48 mx-auto mb-10"
                href="/service">
                See All
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
                  <Image className="w-full h-auto" src={ReviewImg} alt="Our Customer Feedback"/>
              </div>
            </div>
      </div>
      </section>
      <section className="bg-zinc-200 py-24">
        <div className="max-w-7xl mx-auto px-5">
            <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className={`text-4xl font-semibold text-gray-900 mb-2 leading-[1.2] ${playfair.className}`}>Medicare 101</h2>
                  <p className="text-lg font-medium max-w-lg text-gray-900">Make well-informed choices for your health with resources and knowledge handpicked by our team.</p>
                </div>
                <div>
                  <Link
                    className="text-white text-xl font-medium rounded-full bg-orange-700 py-4 hover:bg-orange-800 duration-100 flex items-center justify-center w-48"
                    href="/service">
                    See All
                    <span>
                      <GoArrowRight />
                    </span>
                  </Link>
                </div>
            </div>
            <div className="mb-10">
                <Link className="block relative" href="/">
                    <Image className="w-full max-h-96 object-cover object-center" src={Medicar101} alt="Make well-informed choices for your health with resources and knowledge handpicked by our team."/>
                    <span className="absolute top-1/2 left-1/2"><FaPlay size={50} className="text-white"/></span>
                </Link>
            </div>
            <div>
                <ul className="flex gap-5 items-center mb-5">
                  <li><Link className="inline-block text-lg bg-gray-700 text-white px-5 rounded-xl py-1" href="">Medicare101</Link></li>
                  <li><Link className="inline-block text-lg text-gray-700 font-medium" href="">Video</Link></li>
                </ul>
                <p className="text-lg font-medium text-gray-900">In this video, Laurel dives into the fundamentals of Medicare, providing clear explanations and insights to help you navigate Medicare with confidence. Discover the different parts of Medicare - A, B, C, and D - and learn what each offers in terms of coverage. From hospital care to preventive services and prescription drugs, we'll equip you with the knowledge to understand your options fully. We'll also explore enrollment periods and highlight key considerations for selecting the right Medicare plan for your needs. By the end of this video, you'll have the tools and underst</p>
            </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5">
            <div className="mb-10">
               <h2 className={`text-6xl font-semibold text-gray-700 mb-2 leading-[1.2] ${playfair.className}`}>We’re always happy to help</h2>
               <p className="text-lg font-medium text-gray-900">Easily navigate benefits and services with our team. We’ve got your back.</p>
            </div>

            <div>
              <div className="mb-10">
                <h3 className="text-2xl text-gray-700 font-semibold mb-5">Learn</h3>
                <div className="grid grid-cols-3 gap-4">
                    <Helpcard 
                       HelpLink= "/"
                      HelpImg={Medicar101icon}
                      HelpAlt={`Medicar 101`}
                      HelpTitle={`Medicar 101`}
                      HelpDes={`Expand your knowledge of healthcare to inform your decision-making`}
                    
                    />
                    <Helpcard 
                      HelpLink= "/"
                      HelpImg={FaqIcon}
                      HelpAlt={`FAQs`}
                      HelpTitle={`FAQs`}
                      HelpDes={`Get quick answers to your questions`}
                    
                    />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-gray-700 font-semibold mb-5">Connect</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Helpcard 
                    HelpLink= "/service"
                    HelpImg={CallIcon} 
                    HelpAlt={`Call a Live Agent`}
                    HelpTitle={`Call a Live Agent`}
                    HelpDes={`Speak one-on-one with a member of our friendly team`}
                  />
                  <Helpcard 
                       HelpLink= "/"
                      HelpImg={Medicar101icon}
                      HelpAlt={`Medicar 101`}
                      HelpTitle={`Medicar 101`}
                      HelpDes={`Expand your knowledge of healthcare to inform your decision-making`}
                    
                    />
                    <Helpcard 
                      HelpLink= "/"
                      HelpImg={FaqIcon}
                      HelpAlt={`FAQs`}
                      HelpTitle={`FAQs`}
                      HelpDes={`Get quick answers to your questions`}
                    
                    />
                </div>
              </div>
            </div>
        </div>
      </section>

    </main>
  );
}
