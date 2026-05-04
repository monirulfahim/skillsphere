"use client";
import React from "react";
import { toast } from "react-hot-toast";

export default function UpdateProfile() {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    try {
      
      toast.success("Profile Updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Update Information
        </h2>
        
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              New Name
            </label>
            <input 
              name="name" 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" 
              placeholder="Enter your new name" 
              required 
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              New Photo URL
            </label>
            <input 
              name="photo" 
              type="url" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" 
              placeholder="https://example.com/photo.jpg" 
              required 
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 active:scale-95 transition-all shadow-md"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}