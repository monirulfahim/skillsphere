"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { authClient } from "@/lib/auth-client"; 
import coursesData from "../../../data/courses.json"; 

export default function CourseDetails() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id;

    const [session, setSession] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
            
                const { data } = await authClient.getSession();
                if (!data) {
                    router.push("/login");
                } else {
                    setSession(data);
                }
            } catch (error) {
                router.push("/login");
            } finally {
                setLoadingAuth(false);
            }
        };
        checkAuth();
    }, [router]);

    const course = coursesData.find((c) => c.id.toString() === id);

    // Static Curriculum Data
    const curriculum = [
        "Introduction to the Course",
        "Setting up the Development Environment",
        "Core Fundamentals and Concepts",
        "Hands-on Project 1: Building the UI",
        "Advanced Techniques & Best Practices",
        "Hands-on Project 2: Adding Functionality",
        "Deployment and Hosting",
        "Final Review and Certification"
    ];

    if (loadingAuth) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[70vh]">
                {/* DaisyUI/Tailwind Spinner */}
                <span className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></span>
                <p className="text-lg font-semibold text-gray-600">Checking Authentication...</p>
            </div>
        );
    }

    
    if (!session) return null;

    
    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh]">
                <h2 className="text-4xl font-bold text-red-500 mb-4">Course Not Found!</h2>
                <button onClick={() => router.push('/courses')} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                    Back to Courses
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative w-full h-80 md:h-[450px]">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                
                <div className="p-8 md:p-12">
                    {/* Badge and Rating */}
                    <div className="flex justify-between items-center mb-6">
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                            {course.category || "Development"}
                        </span>
                        <span className="text-yellow-500 font-bold text-2xl">⭐ {course.rating}</span>
                    </div>

                    {/* Basic Info */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">{course.title}</h1>
                    <p className="text-xl text-gray-600 mb-8">Instructor: <span className="font-semibold text-gray-800">{course.instructor}</span></p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-10 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 text-lg">
                            ⏱️ <strong>Duration:</strong> {course.duration}
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            📊 <strong>Level:</strong> {course.level}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Description</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{course.description}</p>
                    </div>

                    {/* Static Curriculum Section */}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
                        <ul className="space-y-4">
                            {curriculum.map((topic, index) => (
                                <li key={index} className="flex items-center gap-4 text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.01]">
                                    <div className="bg-blue-600 text-white min-w-[40px] h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
                                        {index + 1}
                                    </div>
                                    <span className="font-medium text-lg">{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}