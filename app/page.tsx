"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="w-full max-w-4xl flex flex-col items-center py-8 text-center relative">
        <h1 className="text-5xl font-extrabold">Buse Dikici</h1>
        <p className="text-xl text-gray-400 mt-2">Big Data & AI Enthusiast | Software Engineer</p>
        <p className="mt-4 max-w-2xl text-gray-300">
          Passionate about Data Engineering, AI, and Backend Development. Experienced in Python, SQL, Spark, and Cloud Technologies.
        </p>
        {/* Butonları yatay hizalama */}
         <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          <button 
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
            onClick={handleScrollToContact}
          >
            CONTACT ME
          </button>
          
          <a href="https://www.linkedin.com/in/buse-dikici-637938220/" target="_blank">
            <Image src="/images/linkedin2.png" alt="LinkedIn" width={50} height={50} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/Busedkc" target="_blank">
            <Image src="/images/github3.png" alt="GitHub" width={50} height={50} className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </header>
      
      <section className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-200">Tech Stack</h2>
        <h3 className="text-2xl font-semibold text-gray-300 mt-6">Programming Languages</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <Image src="/images/python.png" alt="Python" width={70} height={70} />
          <Image src="/images/java2.png" alt="Java" width={70} height={70} />
        </div>

        <h3 className="text-2xl font-semibold text-gray-300 mt-6">Data Science & Machine Learning Tools</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
        <Image src="/images/pandas.png" alt="Pandas" width={70} height={70} />
          <Image src="/images/numpy.png" alt="NumPy" width={70} height={70} />
          <Image src="/images/matplotlib.png" alt="Matplotlib" width={70} height={70} />
          <Image src="/images/seaborn.png" alt="Seaborn" width={70} height={70} />
          <Image src="/images/scikitlearn.png" alt="Scikit-learn" width={70} height={70} />
          <Image src="/images/opencv.png" alt="OpenCV" width={70} height={70} />
        </div>

        <h3 className="text-2xl font-semibold text-gray-300 mt-6">Web Technologies</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <Image src="/images/css.png" alt="CSS3" width={70} height={70} />
          <Image src="/images/javascript1.png" alt="JavaScript" width={70} height={70} />
          <Image src="/images/flask.png" alt="Flask" width={70} height={70} />
        </div>

        <h3 className="text-2xl font-semibold text-gray-300 mt-6">Database Management Systems</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <Image src="/images/oracle.png" alt="Oracle SQL" width={70} height={70} />
          <Image src="/images/mysql.png" alt="MySQL" width={70} height={70} />
        </div>
      </section>

      <section className="w-full max-w-4xl mt-12 text-center">
  <h2 className="text-3xl font-bold text-gray-200">Projects</h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Aspect-Based Sentiment Analysis</h3>
      <p className="text-gray-400 mt-2">A NLP project analyzing sentiment at an aspect level.</p>
      <a href="https://github.com/Busedkc/Aspect-Based-Sentiment-Analysis" className="text-blue-400 mt-4 inline-block">GitHub Repo</a>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Wine Quality Prediction Model</h3>
      <p className="text-gray-400 mt-2">A machine learning model to predict wine quality based on physicochemical properties.</p>
      <a href="https://github.com/Busedkc/WineQualityPredictionModel" className="text-blue-400 mt-4 inline-block">GitHub Repo</a>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Favorite Actors Data Visualization</h3>
      <p className="text-gray-400 mt-2">A visualization project using Python and Flask.</p>
      <a href="https://github.com/Busedkc/favActors" className="text-blue-400 mt-4 inline-block">GitHub Repo</a>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Hospital Management Database</h3>
      <p className="text-gray-400 mt-2">A SQL-based hospital management system.</p>
      <a href="https://github.com/Busedkc/hospitalManagementDatabase" className="text-blue-400 mt-4 inline-block">GitHub Repo</a>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Titanic Survivor Prediction</h3>
      <p className="text-gray-400 mt-2">A machine learning project predicting Titanic survivors.</p>
      <a href="https://github.com/Busedkc/TitanicSurvivorPrediction" className="text-blue-400 mt-4 inline-block">GitHub Repo</a>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Racing Simulation</h3>
      <p className="text-gray-400 mt-2">A Unity-based racing game simulation in C#.</p>
      <a href="https://github.com/Busedkc/RacingSimulation" className="text-blue-400 mt-4 inline-block">GitHub Repo</a>
    </div>
  </div>
</section>


      <section className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-200">Experience</h2>
        <div className="mt-6 flex flex-col gap-6 border-l-4 border-blue-500 pl-6">
          <div>
            <h3 className="text-xl font-semibold">MEF Perspective - Organization Team Member</h3>
            <p className="text-gray-400">Actively contribute to the planning and execution of club events and activities with a focus on promoting inclusivity and embracing diversity.</p>
            <span className="text-sm text-gray-500">February 2024 – Present</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">PepsiCo - Data Engineer Intern</h3>
            <p className="text-gray-400">Developed ML models for supply chain optimization</p>
            <span className="text-sm text-gray-500">August 2024</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">FIRST Robotic Competition - Mentor</h3>
            <p className="text-gray-400">
              Offered guidance on programming languages, algorithm development, and robotic systems.
            </p>
            <p className="text-gray-400">
              Achievements: Our team won the 2024 Rookie All-Star Award and the 2024 Rookie Inspiration Award.
            </p>
            <span className="text-sm text-gray-500">November 2023 – March 2024 | Istanbul, Turkey</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Huawei Student Developers MEF - Team Leader</h3>
            <p className="text-gray-400">Managed content and technical team collaboration</p>
            <span className="text-sm text-gray-500">April 2023 – September 2023</span>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full max-w-4xl mt-12 text-center py-12 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-200">Contact Me</h2>
        <p className="text-gray-400 mt-4">Let&apos;s connect!</p>
        <div className="mt-6 flex flex-col gap-4">
          <p className="text-lg">📧 Email: <a href="mailto:dikicib@mef.edu.tr" className="text-blue-400">dikicib@mef.edu.tr</a></p>
          <p className="text-lg">🔗 LinkedIn: <a href="https://www.linkedin.com/in/buse-dikici-637938220/" className="text-blue-400">Buse Dikici</a></p>
          <p className="text-lg">📝 Blog: <a href="https://www.instagram.com/busetechista/" className="text-pink-400">@busetechista</a></p>
        </div>
      </section>
    </div>
  );
}