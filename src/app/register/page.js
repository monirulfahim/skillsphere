"use client";
import React from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Register() {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.photo.value;

        await authClient.signUp.email(
            {
                email,
                password,
                name,
                image,
            },
            {
                onRequest: () => {
                    
                },
                onSuccess: () => {
                    toast.success("Registration Successful!");
                    router.push("/login");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
            }
        );
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input name="name" type="text" placeholder="Full Name" className="w-full p-2 border rounded focus:outline-blue-500" required />
                    <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded focus:outline-blue-500" required />
                    <input name="photo" type="text" placeholder="Photo URL" className="w-full p-2 border rounded focus:outline-blue-500" required />
                    <input name="password" type="password" placeholder="Password" className="w-full p-2 border rounded focus:outline-blue-500" required />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">Register</button>
                </form>

                <div className="my-4 text-center text-gray-400">OR</div>

                <button type="button" className="w-full flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-50 transition">
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        className="w-5 h-5"
                        alt="Google Logo"
                    />
                    Register with Google
                </button>

                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>



    );
}