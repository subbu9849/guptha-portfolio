"use client";

import { useState } from "react";
import Image from "next/image";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaArrowRight,
  FaBars,
  FaCode,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCloud,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiOpenai,
  SiJavascript,
} from "react-icons/si";

const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const skills = [

    { icon: <FaReact />, title: "React.js" },
    { icon: <SiNextdotjs />, title: "Next.js" },
    { icon: <FaPython />, title: "Python" },
    { icon: <FaNodeJs />, title: "Node.js" },
    { icon: <SiMongodb />, title: "MongoDB" },
    { icon: <SiPostgresql />, title: "PostgreSQL" },
    { icon: <SiTensorflow />, title: "TensorFlow" },
    { icon: <FaDatabase />, title: "Data Analysis" },
    { icon: <FaCode />, title: "Full Stack Development" },
    { icon: <FaBrain />, title: "Machine Learning" },
    { icon: <FaRobot />, title: "Artificial Intelligence" },
    { icon: <FaChartLine />, title: "Data Visualization" },
    { icon: <FaCloud />, title: "Cloud Computing" },
    { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    { icon: <SiFirebase />, title: "Firebase" },
    { icon: <SiOpenai />, title: "OpenAI API" },
    { icon: <FaFigma />, title: "UI/UX Design" },
    { icon: <SiJavascript />, title: "JavaScript" },

  ];

  return (

    <main className="bg-[#f8fbff] text-[#111827] overflow-hidden relative scroll-smooth">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15),transparent_35%)]"></div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Glow */}
      <div className="fixed top-[-200px] left-[-200px] w-[450px] h-[450px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="fixed bottom-[-200px] right-[-200px] w-[450px] h-[450px] bg-sky-200 rounded-full blur-3xl opacity-30"></div>

      {/* NAVBAR */}
      <nav className="w-full max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-6 flex items-center justify-between sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-blue-100">

        <h1 className="text-2xl font-bold text-blue-500">
          Jaswanth
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">

          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>

          <a href="#skills" className="hover:text-blue-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-white shadow-md rounded-2xl w-12 h-12 flex items-center justify-center text-blue-500 text-lg"
        >
          <FaBars />
        </button>

        {menuOpen && (

          <div className="absolute top-24 right-7 bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-5 text-gray-600 md:hidden">

            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

        )}

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="w-full max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-32"
      >

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-5 py-2 rounded-full text-xs font-medium">

              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

              AI Developer

            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-7">

              Jaswanth{" "}

              <span className="text-blue-500">
                Guptha
              </span>

            </h1>

            <p className="text-lg md:text-xl text-gray-500 mt-6 font-medium">
              AI Developer • Full Stack Developer • ML Enthusiast
            </p>

            <p className="text-gray-500 leading-8 text-base mt-7 max-w-xl">

              Passionate about developing intelligent systems,
              AI-powered applications and modern responsive
              web experiences using advanced technologies.

            </p>

            <div className="flex flex-wrap gap-5 mt-9">

              <a
                href="https://github.com/jaswanthguptha"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95 text-white px-7 py-4 rounded-2xl text-sm font-semibold flex items-center gap-3 shadow-lg transition duration-300"
              >

                Let&apos;s Connect

                <FaArrowRight />

              </a>

              <a
                href="#projects"
                className="bg-white border border-blue-100 px-7 py-4 rounded-2xl text-sm font-semibold text-gray-700 hover:scale-105 transition"
              >
                View Projects
              </a>

            </div>

            <div className="flex gap-5 mt-9">

              <a
                href="https://github.com/jaswanthguptha"
                target="_blank"
                className="bg-white shadow-md rounded-2xl w-12 h-12 flex items-center justify-center text-lg hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/t-jaswanth-guptha-5056aa328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="bg-white shadow-md rounded-2xl w-12 h-12 flex items-center justify-center text-blue-600 text-lg hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/jashu_guptha_46"
                target="_blank"
                className="bg-white shadow-md rounded-2xl w-12 h-12 flex items-center justify-center text-pink-500 text-lg hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={floating}
            animate="animate"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-30 rounded-full"></div>

              <div className="relative bg-white/70 backdrop-blur-xl p-5 rounded-full shadow-[0_20px_80px_rgba(59,130,246,0.25)] border border-blue-100">

                <Image
                  src="/profile2.jpeg"
                  alt="T Jaswanth Guptha"
                  width={400}
                  height={400}
                  priority
                  className="rounded-full object-cover w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="w-full max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28 text-center"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >

          Skills & <span className="text-blue-500">Technologies</span>

        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
            >

              <div className="flex flex-col items-center justify-center">

                <div className="text-3xl text-blue-500">
                  {skill.icon}
                </div>

                <h3 className="mt-5 text-base font-semibold">
                  {skill.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="w-full max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28 text-center"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >

          Featured <span className="text-blue-500">Projects</span>

        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {[
            {
              title: "AI Sign Language Communication System",
              desc: "An intelligent communication platform that converts sign language into text and speech using Artificial Intelligence and Computer Vision.",
            },
            {
              title: "AI Chatbot Assistant",
              desc: "Conversational AI chatbot powered by NLP.",
            },
            {
              title: "Data Analytics Dashboard",
              desc: "Interactive dashboard with business analytics charts.",
            },
            {
              title: "Smart Attendance System",
              desc: "Face recognition based attendance platform.",
            },
            {
              title: "AI Resume Analyzer",
              desc: "Resume screening system using machine learning.",
            },
          ].map((project, index) => (

            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500 text-left"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-500 leading-8 mt-5 text-sm">
                {project.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="w-full max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-28"
      >

        <div className="bg-gradient-to-r from-blue-500 to-sky-400 rounded-[40px] p-12 md:p-16 text-center text-white shadow-2xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >

            Let&apos;s Build Something Amazing Together

          </motion.h2>

          <p className="mt-6 text-white/90 max-w-2xl mx-auto leading-8 text-sm md:text-base">

            Passionate about AI innovation, machine learning,
            and modern web technologies. Open to collaborations,
            internships and exciting opportunities.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="mailto:jaswanthguptha083@gmail.com"
              className="bg-white text-blue-500 px-8 py-4 rounded-2xl text-sm font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/jaswanthguptha"
              target="_blank"
              className="border border-white/40 px-8 py-4 rounded-2xl text-sm font-semibold hover:bg-white hover:text-blue-500 transition duration-300"
            >
              GitHub Profile
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-white mt-10">

        <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-16 py-16">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h2 className="text-3xl font-bold">

                Guptha{" "}

                <span className="text-blue-500">
                  Reddy
                </span>

              </h2>

              <p className="text-gray-400 mt-5 leading-8 text-sm">

                AI Developer • Full Stack Developer • ML Enthusiast

              </p>

              <p className="text-gray-500 mt-4 text-sm leading-7">

                Passionate about building intelligent systems,
                AI-powered applications and modern digital experiences.

              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 mt-5 text-gray-400 text-sm">

                <a href="#home" className="hover:text-blue-500 transition">
                  Home
                </a>

                <a href="#skills" className="hover:text-blue-500 transition">
                  Skills
                </a>

                <a href="#projects" className="hover:text-blue-500 transition">
                  Projects
                </a>

                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>

              </div>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                Social Links
              </h3>

              <div className="flex gap-4 mt-5">

                <a
                  href="https://github.com/jaswanthguptha"
                  target="_blank"
                  className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-500 transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/t-jaswanth-guptha-5056aa328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-500 transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://instagram.com/jashu_guptha_46"
                  target="_blank"
                  className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-500 transition duration-300"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">

          © 2026 Guptha Reddy. All rights reserved.

        </div>

      </footer>

    </main>
  );
}