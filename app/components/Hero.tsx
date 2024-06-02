import Image from "next/image";

// components/Hero.tsx
const Hero = () => {
    return (
      <div className="relative bg-cover bg-center h-screen flex" style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundColor: "#353342" }} >
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-center gap-[80px] px-5">
            <div className="flex flex-col gap-10">
                <h1 className="md:text-[64px] text-[32px] text-[#FEF6E4] font-bold">Partner for <br/> every <span className="text-[#FFD803] italic font-light">marketing </span><br/> activities</h1>
                <div className="flex items-start gap-4"> 
                    <Image
                        alt="line"
                        src="/images/line.png"
                        className="w-[50px] md:w-[135px]"
                        width="135"
                        height="20"

                    />
                    <p className="text-white text-[15px] md:text-xl">
                        We can support you with content marketing, <br className='hidden md:block'/> employer branding, web development, <br className='hidden md:block'/> performance marketing or social media marketing
                    </p>
                </div>
            </div>
            <div className="hidden md:block">
            <Image
                alt="hero-img"
                className="cursor-pointer block "
                height="500"
                width="500"
                src="/images/hero-img.png"
        />
            </div>
        </div>
        <div className="absolute bottom-0  left-0 w-full overflow-hidden leading-none">
          <Image
            src="/images/wave.svg"
            alt="wave"
            layout="responsive"
            width="1440"
            height="320"
            
        />
      </div>
      </div>
    );
  }
  
  export default Hero;

/*   import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen md:px-20" style={{ backgroundImage: "url('/images/hero-bg.png')" }}>
      <div className="absolute inset-0 flex flex-col md:grid md:grid-cols-2 items-start justify-center gap-[80px] px-5">
        <div className="flex flex-col justify-center items-center ">
          <div className="gap-10 flex flex-col">
            <h1 className="text-[32px] md:text-[64px] text-[#FEF6E4] font-bold">
              Partner for <br /> every <span className="text-[#FFD803] italic font-light">marketing </span><br /> activities
            </h1>
            <div className="flex items-start gap-4"> 
              <Image
                alt="line"
                src="/images/line.png"
                width="135"
                height="20"
              />
              <p className="text-white">
                We can support you with content marketing, <br /> employer branding, web development, <br /> performance marketing or social media marketing
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            alt="hero-img"
            className="cursor-pointer block mt-10"
            height="500"
            width="500"
            src="/images/hero-img.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

   */