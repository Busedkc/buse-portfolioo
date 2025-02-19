import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="w-full max-w-3xl flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Buse Dikici</h1>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/experience" className="hover:text-blue-400">Experience</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex flex-col items-center mt-10 text-center">
        <p className="text-lg">Computer Engineering Student | Data Science & AI Enthusiast</p>
        <p className="mt-2">Focused on Python, SQL, Machine Learning & Web Development</p>

        <div className="mt-6 flex gap-4">
          <a href="https://www.linkedin.com/in/buse-dikici-637938220/" target="_blank" className="bg-blue-500 px-4 py-2 rounded">LinkedIn</a>
          <a href="https://github.com/Busedkc" target="_blank" className="bg-gray-700 px-4 py-2 rounded">GitHub</a>
          <a href="https://www.instagram.com/busetechista/" target="_blank" className="bg-pink-500 px-4 py-2 rounded">Blog</a>
        </div>
      </main>
    </div>
  );
}
