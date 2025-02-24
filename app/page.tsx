"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from './ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 
    text-gray-900 dark:text-white flex flex-col items-center p-6">
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-xl bg-gray-200 dark:bg-gray-800/50 
        border border-gray-300 dark:border-gray-700/50 backdrop-blur-sm
        hover:border-blue-500/50 transition-all duration-300
        transform hover:scale-105 group"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <header className="w-full max-w-4xl flex flex-col items-center py-12 text-center relative">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
          Buse Dikici
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mt-4">Building the Future, One Line of Code at a Time</p>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">AI Enthusiast | Software Engineer</p>
        <p className="mt-6 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          A passionate Computer Engineering student with a drive for innovation in AI and technology. 
          I transform ideas into reality through code, focusing on machine learning, data engineering, 
          and creating impactful solutions.
        </p>
        
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
          <button 
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg 
            hover:opacity-90 transition-all transform hover:scale-105"
            onClick={handleScrollToContact}
          >
            Let's Connect
          </button>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/buse-dikici-637938220/" 
              target="_blank"
              className="social-button"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Busedkc" 
              target="_blank"
              className="social-button"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>
      
      <section className="w-full max-w-4xl mt-16 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Technical Expertise
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="skill-category">
            <h3 className="skill-header">Programming</h3>
            <div className="skill-grid">
              <div className="skill-item group">
                <div className="skill-name">Python</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">TypeScript</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">Java</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-header">Frontend</h3>
            <div className="skill-grid">
              <div className="skill-item group">
                <div className="skill-name">Next.js</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">React</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">Tailwind CSS</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-header">Data Science</h3>
            <div className="skill-grid">
              <div className="skill-item group">
                <div className="skill-name">Pandas</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">NumPy</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">Scikit-learn</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">TensorFlow</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-header">Tools & Others</h3>
            <div className="skill-grid">
              <div className="skill-item group">
                <div className="skill-name">Git</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">SQL</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item group">
                <div className="skill-name">Flask</div>
                <div className="skill-level">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mt-16 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm 
          border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Aspect-Based Sentiment Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">A NLP project analyzing sentiment at an aspect level.</p>
            <a href="https://github.com/Busedkc/Aspect-Based-Sentiment-Analysis" 
              className="mt-6 inline-block px-6 py-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg 
              text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/30 transition-all"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm 
          border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Wine Quality Prediction Model</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">A machine learning model to predict wine quality based on physicochemical properties.</p>
            <a href="https://github.com/Busedkc/WineQualityPredictionModel" 
              className="mt-6 inline-block px-6 py-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg 
              text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/30 transition-all"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm 
          border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Favorite Actors Data Visualization</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">A visualization project using Python and Flask.</p>
            <a href="https://github.com/Busedkc/favActors" 
              className="mt-6 inline-block px-6 py-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg 
              text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/30 transition-all"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm 
          border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Hospital Management Database</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">A SQL-based hospital management system.</p>
            <a href="https://github.com/Busedkc/hospitalManagementDatabase" 
              className="mt-6 inline-block px-6 py-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg 
              text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/30 transition-all"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm 
          border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Titanic Survivor Prediction</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">A machine learning project predicting Titanic survivors.</p>
            <a href="https://github.com/Busedkc/TitanicSurvivorPrediction" 
              className="mt-6 inline-block px-6 py-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg 
              text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/30 transition-all"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm 
          border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Racing Simulation</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">A Unity-based racing game simulation in C#.</p>
            <a href="https://github.com/Busedkc/RacingSimulation" 
              className="mt-6 inline-block px-6 py-2 bg-blue-50 dark:bg-blue-500/20 rounded-lg 
              text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/30 transition-all"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mt-16 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Experience
        </h2>
        <div className="mt-8 flex flex-col gap-6 border-l-4 border-blue-500 pl-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Horizon AI Hackathon - 2nd Place Winner</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Developed Verb.AI, an innovative project that secured 2nd place at the University of Miami's Horizon AI Hackathon.
            </p>
            <a 
              href="https://devpost.com/software/verb-ai?ref_content=my-projects-tab&ref_feature=my_projects"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-block mt-2"
              target="_blank"
            >
              View Project on Devpost →
            </a>
            <span className="text-sm text-gray-500 dark:text-gray-500 block mt-2">February 22-23, 2024 | University of Miami</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">MEF Perspective - Organization Team Member</h3>
            <p className="text-gray-600 dark:text-gray-400">Actively contribute to the planning and execution of club events and activities with a focus on promoting inclusivity and embracing diversity.</p>
            <span className="text-sm text-gray-500 dark:text-gray-500">February 2024 – Present</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">PepsiCo - Intern</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Designed and developed a website to introduce machine lines and facilitate maintenance processes.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Helped first-time visitors understand workflows by providing detailed guides for machine operations.
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-500 mt-2">August 2024</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">FIRST Robotic Competition - Mentor</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Offered guidance on programming languages, algorithm development, and robotic systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Achievements: Our team won the 2024 Rookie All-Star Award and the 2024 Rookie Inspiration Award.
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-500">November 2023 – March 2024 | Istanbul, Turkey</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Huawei Student Developers MEF - Team Leader</h3>
            <p className="text-gray-600 dark:text-gray-400">Managed content and technical team collaboration</p>
            <span className="text-sm text-gray-500 dark:text-gray-500">April 2023 – September 2023</span>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full max-w-4xl mt-16 mb-12 text-center py-12 
      bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Let's Create Something Amazing
        </h2>
        <p className="text-gray-300 mt-6 text-lg">Ready to collaborate or just want to say hi?</p>
        <div className="mt-8 flex flex-col gap-6">
          <a href="mailto:dikicib@mef.edu.tr" 
            className="text-lg flex items-center justify-center gap-3 text-gray-300 hover:text-blue-400 transition-all">
            <span className="text-2xl">📧</span> dikicib@mef.edu.tr
          </a>
          <a href="https://www.linkedin.com/in/buse-dikici-637938220/" 
            className="text-lg flex items-center justify-center gap-3 text-gray-300 hover:text-blue-400 transition-all">
            <span className="text-2xl">🔗</span> Buse Dikici
          </a>
          <a href="https://www.instagram.com/busetechista/" 
            className="text-lg flex items-center justify-center gap-3 text-gray-300 hover:text-pink-400 transition-all">
            <span className="text-2xl">📝</span> @busetechista
          </a>
        </div>
      </section>
    </div>
  );
}