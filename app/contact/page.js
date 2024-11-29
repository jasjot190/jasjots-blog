// src/About.js
import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-800 leading-relaxed">
            Hello! I'm [Your Name], a passionate software developer with a keen
            interest in creating innovative solutions. With over [X] years of
            experience in the industry, I specialize in [Your Specialization]. I
            am committed to continuous learning and improvement, always striving
            to enhance my skills and knowledge.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">My Mission</h2>
          <p className="text-gray-800 mb-8 leading-relaxed">
            My mission is to leverage technology to solve real-world problems
            and make a positive impact. I aim to deliver high-quality software
            solutions that exceed expectations and contribute to the success of
            my clients and community.
          </p>
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <ul className="list-disc list-inside text-gray-800 mb-8">
            <li>Experience 1: Description of your experience or project.</li>
            <li>Experience 2: Description of your experience or project.</li>
            <li>Experience 3: Description of your experience or project.</li>
            {/* Add more experiences as needed */}
          </ul>
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-800 mb-8 leading-relaxed">
            [Your Education Background]
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
