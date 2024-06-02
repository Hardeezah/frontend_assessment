'use client'

import Image from "next/image";
import ImageCarousel from "../components/ImageCarousel";

const About = () => {
    return (  
        <div className="font-title bg-cover bg-center h-screen flex" style={{ backgroundImage: "url('/images/about-bg.jpg')", backgroundColor: "#353342" }} >
            <div className=" inset-0 flex flex-col items-center justify-center md:justify-center gap-[60px] px-5 md:px-10 max-w-6xl m-auto ">    
                <h1 className="md:text-3xl text-xl font-medium mt-10 md">About StylePlus</h1>
                <div className=" ">
                    <div className="w-[151px] h-[185px] bg-[#FFD803] absolute m-[-12px] ml-[230px] md:ml-[320px] md:mt-[-40px] hidden md:block"></div>
                    <div className=" z-10 relative">
                        <ImageCarousel />
                    </div>
                </div>
                
                <div className="flex flex-col gap-10 items-center justify-center ">
                    <div className="md:text-3xl text-xl font-semibold flex gap-2 items-start">
                        <Image
                        src="/images/quote.png"
                        alt='quote'
                        width={20}
                        height={20}

                        />
                        Spark innovation, feul growth</div>
                    <p className="text-[15px] md:text-[18px] mb-10">
                        At Styleplus, were passionate about harnessing the power of technology to drive innovation and growth. As a leading tech service 
                        company, we specialize in providing cutting-edge solutions that 
                        help businesses thrive in an ever-evolving digital landscape. With a 
                        keen eye for emerging trends and a deep understanding of our 
                        clients&#39; needs, we craft tailored solutions that empower companies 
                        to stay ahead of the curve, drive efficiency, and achieve their goals.
                        By combining our technical expertise with a commitment to exceptional customer service, we help businesses unlock their full potential and succeed in today's fast-paced digital world.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default About;