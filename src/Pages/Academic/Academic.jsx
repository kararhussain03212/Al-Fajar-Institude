import React from 'react'
import { useNavigate } from "react-router-dom";
import programs from "../../Data";

const Academic = () => {
  const navigate = useNavigate();

  return (
    <section className='max-w-[1400px] mx-auto px-10 py-8'>
      {/* Academic Programs Section */}
      
        {/* Section Header */}
        <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-2xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Academic Programs
        </h1>
      </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => navigate(program.path)}
              className={`${program.color} rounded-lg p-8 flex flex-col items-center justify-center h-[250px]  gap-4 text-white cursor-pointer hover:opacity-90  transition-all shadow-md`}
            >
              <span className="text-5xl">
                {program.icon && <program.icon />}
              </span>
              <h3 className="text-center font-bold text-sm">{program.title}</h3>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Academic
