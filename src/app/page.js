
import coursesData from '../data/courses.json';
import Link from 'next/link';
 import Image from "next/image";

export default function Home() {
  const topCourses = coursesData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-195 flex items-center justify-center text-center text-white max-[576px]:h-100 max-[576px]:w-full"
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
      <section className='mt-20 mr-50 mb-30 ml-50 max-[576px]:mt-20 max-[576px]:mr-5 max-[576px]:mb-20 max-[576px]:ml-5 max-[768px]:mr-30 max-[768px]:ml-30 max-[768px]:mt-10 max-[768px]:mb-15'>
        <h2 className="text-6xl font-semibold text-green-900 text-center mb-12 max-[576px]:text-3xl">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCourses.map(course => (

            <div key={course.id} className='bg-[#F9FAFC] text-[#FFFFFF] p-6 rounded-2xl shadow-[0_10px_50px_rgba(70,50,240,0.4)] relative max-[576px]:shadow-[0_10px_50px_rgba(70,50,240,0.3)]'>
              <div><button className='bg-[#FEF3C6] text-[#873b05] rounded-[100px] px-2 py-1 absolute -top-3 left-1/2 -translate-x-1/2'>Most Popular</button></div>
              <div className="relative w-full h-50 mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover rounded"
                 
  />
              </div>
              <h3 className="font-bold text-2xl text-gray-700 mb-2">{course.title}</h3>
              <p className="text-gray-700 text-xl">By {course.instructor}</p>
              <p className="text-yellow-600 font-bold my-2 text-2xl mb-4">⭐ {course.rating}</p>
              <Link href={`/courses/${course.id}`} className="block text-center bg-blue-500 text-white py-2 rounded mt-2">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Tips Section */}
      <section
        className="relative h-195 flex items-center justify-center text-center text-white max-[576px]:h-100 max-[576px]:w-full"
        style={{
          backgroundImage: "url('/images/Learning.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FFFFFF] animate-float">Learning Tips</h1>
          <p className="text-xl md:text-3xl mb-12 opacity-90 text-[#FFFFFF] animate-float">Manage your time effectively <br></br> and practice daily!</p>
        </div>
      </section>

      {/* Trending Courses Section (Extra Section Requirement) */}
      <section className="py-20 bg-white px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Trending Courses</h2>
              <p className="text-gray-500 mt-2 text-lg">Most joined courses this week</p>
            </div>
            <Link href="/courses" className="text-blue-600 font-semibold hover:underline">View All</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursesData.slice(2, 6).map(course => (
              <div key={course.id} className="group border rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="relative h-40 w-full">
                  <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-gray-800 line-clamp-1">{course.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-500 text-sm">⭐ {course.rating}</span>
                    <span className="text-gray-400 text-sm">({course.duration})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors Section */}
      <section className="py-20 bg-slate-50 px-4 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Top Instructors</h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">Learn from industry professionals with years of experience in their respective fields.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Instructor Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img src="https://i.pravatar.cc/150?u=1" alt="Instructor" className="rounded-full object-cover w-full h-full border-2 border-blue-500 p-1" />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 text-sm font-medium mb-3">Web Architect</p>
              <p className="text-gray-500 text-sm line-clamp-2">Ex-Google Engineer with 10+ years of experience in React and Node.js.</p>
            </div>

            {/* Instructor Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img src="https://i.pravatar.cc/150?u=2" alt="Instructor" className="rounded-full object-cover w-full h-full border-2 border-emerald-500 p-1" />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Mark Thompson</h3>
              <p className="text-emerald-600 text-sm font-medium mb-3">UI/UX Lead</p>
              <p className="text-gray-500 text-sm line-clamp-2">Award-winning designer focusing on user-centric digital products.</p>
            </div>

            {/* Instructor Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img src="https://i.pravatar.cc/150?u=3" alt="Instructor" className="rounded-full object-cover w-full h-full border-2 border-purple-500 p-1" />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Alina Grace</h3>
              <p className="text-purple-600 text-sm font-medium mb-3">Digital Marketer</p>
              <p className="text-gray-500 text-sm line-clamp-2">Helped 50+ startups grow their revenue through strategic marketing.</p>
            </div>

            {/* Instructor Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img src="https://i.pravatar.cc/150?u=4" alt="Instructor" className="rounded-full object-cover w-full h-full border-2 border-orange-500 p-1" />
              </div>
              <h3 className="font-bold text-xl text-gray-800">David Miller</h3>
              <p className="text-orange-600 text-sm font-medium mb-3">Data Scientist</p>
              <p className="text-gray-500 text-sm line-clamp-2">Python expert and contributor to various open-source AI projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}