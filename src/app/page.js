import Image from "next/image";

import coursesData from '../data/courses.json';
import Link from 'next/link';

export default function Home() {
  const topCourses = coursesData.slice(0, 3); // Top 3 highest-rated courses

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-195 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-50 animate-float">Upgrade Your Skills Today</h1>
          <p className="text-xl md:text-3xl mb-12 opacity-90 text-[#FFFFFF] animate-float">Learn from Industry Experts</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold text-lg cursor-pointer animate-float">
            Get Started
          </button>
        </div>
      </section>


      {/* Popular Courses */}
      {/* <section className='mt-30 mr-50 mb-30 ml-50 max-[576px]: max-[576px]:mt-20 max-[576px]:mr-5 max-[576px]:mb-20 max-[576px]:ml-5'>
        <h2 className="text-5xl font-semibold text-green-900 text-center mb-10">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCourses.map(course => (
          
            <div key={course.id} className='bg-[#F9FAFC] text-[#FFFFFF] p-6 rounded-2xl shadow-[0_10px_50px_rgba(70,50,240,0.4)] relative max-[576px]:shadow-[0_10px_50px_rgba(70,50,240,0.3)]'>
              <div><button className='bg-[#FEF3C6] text-[#873b05] rounded-[100px] px-2 py-1 absolute -top-3 left-1/2 -translate-x-1/2'>Most Popular</button></div>
              <img src={course.image} className="w-full h-49 object-cover mb-4 rounded" />
              <h3 className="font-bold text-2xl text-gray-700 mb-2">{course.title}</h3>
              <p className="text-gray-700 text-xl">By {course.instructor}</p>
              <p className="text-yellow-400 font-bold my-2 text-2xl mb-4">⭐ {course.rating}</p>
              <Link href={`/courses/${course.id}`} className="block text-center bg-blue-500 text-white py-2 rounded mt-2">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      {/* Learning Tips Section */}
      {/* <section className="bg-gray-100 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Learning Tips</h2>
        <p>Manage your time effectively and practice daily!</p>
      </section> */}
    </div>
  );
}