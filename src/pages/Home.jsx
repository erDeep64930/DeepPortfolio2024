
import hero from "../images/About.jpg";
export const Home = () => {
  return (
    <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
      <div>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
          {/* image & content */}
          {/* text */}
          <div className='text-white'>
            <h6 className='text-3xl mt-12'>Hey there...</h6>

            <p className='md:w-96 my-4'>
              Deepak is a versatile freelance professional skilled in UI design, Full-stack development, Logo design, and Data mining. </p>
            <div className='mt-5'>
              <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>About me</button>
              <button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white '>Projects</button>
            </div>
          </div>
          {/* img */}
          <div className='order-first md:order-last relative'>
            <img src={hero} alt="" className="w-96 h-96 rounded-full" />
          </div>
        </div>
      </div>
      <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
      </div>
    </div>
  )
}
