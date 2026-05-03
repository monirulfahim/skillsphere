import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <Link 
        href="/" 
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Back To Home
      </Link>
    </div>
  )
}