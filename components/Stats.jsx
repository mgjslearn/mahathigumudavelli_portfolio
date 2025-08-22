"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 4, 
    text: "Years of Experience"
  },
  {
    num: 28, 
    text:"Technologies Mastered"
  },
  {
    num: 15,
    text: "Projects"
  },
{
  num: 750, 
  text: "Code Contributions"
},

]
const Stats = () => {
  return (
    <section className="pt-10 pb-8 xl:pt-12 xl:pb-12">
      <div className="flex flex-wrap gap-10 max-w-4xl mx-auto justify-center items-center">
        {stats.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center flex-1 min-w-[150px]"
            key={index}
          >
            <CountUp
              end={item.num}
              duration={3}
              delay={1}
              className="text-5xl xl:text-7xl font-extrabold text-center"
            />
            <p
              className={`mt-2 text-center text-lg xl:text-xl text-white/80 ${item.text.length < 15 ? "max-w-[120px]" : "max-w-[180px]"}`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
  
}

export default Stats;