'use client'

import Image from 'next/image';
import ImageCarousel from './ImageCarousel';
import { Button } from '@/components/ui/button';
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const About = () => {

  const router = useRouter();

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 mt-10 ">
      <div className="flex flex-col md:flex-row items-center gap-32 justify-between md:max-w-full">
        <div className="flex flex-between ">
          <div className="md:hidden w-[120px] h-[135px] bg-[#FFD803] absolute mt-[-35px] ml-[200px] "></div>
          <div className="w-[151px] h-[185px] bg-[#FFD803] absolute m-[-12px] ml-[230px] md:ml-[320px] md:mt-[-40px] hidden md:block"></div>
            <div className="z-10 relative">
            <ImageCarousel />
            </div>
        </div>
        
        <div className="flex flex-col justify-center text-left gap-8 px-3">
          <h2 className="md:text-xl text-[15px] font-thin mb-4 ">
            A<a href="/about" className='border-b-2 border-[#FFD803] pb-2 '>BOUT US </a>
          </h2>
          <div className="md:text-3xl text-xl font-semibold flex gap-2 items-start">
            <Image
              src="/images/quote.png"
              alt='quote'
              width={20}
              height={20}

            />
             Spark innovation, feul growth</div>
          <p className="md:text-lg text-sm">
            At Styleplus, were passionate about harnessing the power of < br className='hidden md:block'/> 
            technology to drive innovation and growth. As a leading tech service <br className='hidden md:block'/>
            company, we specialize in providing cutting-edge solutions that <br className='hidden md:block'/> 
            help businesses thrive in an ever-evolving digital landscape. With a <br className='hidden md:block'/>
            keen eye for emerging trends and a deep understanding of our <br className='hidden md:block'/>
            clients&#39; needs, we craft tailored solutions that empower companies<br className='hidden md:block'/> 
            to stay ahead of the curve, drive efficiency, and achieve their goals.
          </p>
          <Button 
            onClick={() => router.push('/about')}
            className="
              bg-[#353342] 
              text-[#FEF6E4] 
              w-[140px]
              md:w-[175px] 
              hover:w-[220px] 
              transition-all 
              duration-300 
              flex 
              items-center 
              justify-center 
              gap-2 
              group
              ">
          <span>Read more</span>
          <IoArrowForward className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-[#FFD803]" />
        </Button>
        </div>
      </div>
    </div>
  );
};

export default About;

