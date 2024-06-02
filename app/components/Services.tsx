import Image from 'next/image';
import { IoArrowForward, IoArrowDown } from "react-icons/io5";

const services = [
  {
    image: '/images/branding.png',
    title: "Corporate Branding",
    moreInfo: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris ",
    bgColor: "bg-[#F3E6A0]"
  },
  {
    image: '/images/graphic-design.png',
    title: "Graphic Design",
    moreInfo: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris ",
    bgColor: "bg-[#CCC6F2]"
  },
  {
    image: '/images/webdev.png',
    title: "Web Design & Development",
    moreInfo: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris ",
    bgColor: "bg-[#CBDAFF]"
  },
  {
    image: '/images/mobile.png',
    title: "Mobile Design & Development",
    moreInfo: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris ",
    bgColor: "bg-[#EAB8FC]"
  },
  
];

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-10 md:px-10  px-4 py-20">
      <div className="flex flex-col items-center justify-start text-center">
        <h2 className="md:text-xl text-[15px] font-thin mb-4">
          S<a href="/about" className='border-b-2 border-[#FFD803] pb-2'>ERVICES </a>
        </h2>
      </div>
      <h1 className="text-3xl text-center">Where Tech Meets Success</h1>
      <p className="text-center text-[14px] md:text-[16px]">
        Transform your business with our expert tech solutions! From strategic planning to seamless implementation, we'll 
        <br className='hidden md:block'/>
        help you harness the power of technology to drive growth, boost efficiency, and stay ahead of the competition
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4">
        {services.map((service, index) => (
          <div key={index} className={`relative p-6 rounded-lg shadow-lg overflow-hidden group ${service.bgColor}`}>
            <div className="w-full md:h-96 h-64 mb-4 relative z-10">
              <Image
                src={service.image}
                alt={service.title}
                height={20}
                width={20}
                objectFit="contain"
              />
            </div>
            <div className="flex items-center justify-between">
                <h3 className="md:text-xl text-[16px] font-semibold mb-2">{service.title}</h3>
                <div className="border border-black rounded-full p-2">
                    <IoArrowForward />
                </div>
            </div>
            
            <div className={`absolute inset-0 p-6 flex flex-col justify-center gap-7 ${service.bgColor} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex items-center justify-between">
                    <h3 className="md:text-xl text-[16px] font-semibold mb-2">{service.title}</h3>
                    <div className="border border-black rounded-full p-2">
                        <IoArrowDown />
                    </div>
                </div>
                <hr className=''/>              
                <p className="text-gray-700 text-[15px]">{service.moreInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
