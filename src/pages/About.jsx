import { skillMenu } from "../constant/constant"


export const About = () => {
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">

        Deep Design Web is a dynamic agency founded by experts in logo design and website development. We specialize in creating engaging websites and captivating logos that align with your brand's identity and goals, using the latest web technologies. Let us bring your digital vision to life and make a lasting impact online.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2+ Exp</div>
        <p className="text-white text-2xl md:ml-5">

          "Your ideas matter; let us transform them into a lasting online impact."
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skillMenu.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} className="w-full h-full"/>
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

  
    
    </div>
  )
}
