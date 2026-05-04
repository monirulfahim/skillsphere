"use client";
import { useState } from 'react';
import coursesData from '../../data/courses.json';
import Link from 'next/link';
import Image from "next/image";

export default function AllCourses() {
    const [search, setSearch] = useState("");

    const filteredCourses = coursesData.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-5xl font-bold mb-6 text-cyan-950">All Courses</h1>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search courses by title..."
                className="w-full p-3 border rounded mb-8"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {filteredCourses.map(course => (
                    <div key={course.id} className="bg-[#F9FAFC] text-gray-700 p-6 rounded-2xl drop-shadow-2xl">
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
                        <Link href={`/courses/${course.id}`} className="block text-center bg-blue-500 text-white py-2 rounded mt-4">
                            Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}