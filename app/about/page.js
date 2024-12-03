// import Navbar from "@/components/Navbar";

// import React from "react";

// const educationDetails = [
//   {
//     institution:
//       "Southern Alberta Institute of Technology (SAIT), Calgary, Canada",
//     degree: "Diploma in Software Development",
//     year: "2024-2025",
//     description:
//       "Focused on software development, algorithms, and data structures. Graduated with honors.",
//   },
//   {
//     institution: "DAV",
//     degree: "Bachelor's in Computer Applications",
//     year: "2022 - 2023",
//     description:
//       "Specialized in software architecture and design patterns. Completed a thesis on scalable web applications.",
//   },
// ];

// const About = () => {
//   return (
//     <main>
//       <Navbar />

//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <p className="text-gray-800 leading-relaxed">
//               Hello! I'm Jasjot Singh, a passionate software developer with a
//               keen interest in creating innovative solutions. With over 3 years
//               of experience in the industry, I specialize in MERN. I am
//               committed to continuous learning and improvement, always striving
//               to enhance my skills and knowledge.
//             </p>
//           </div>
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold mb-4">My Mission</h2>
//             <p className="text-gray-800 mb-8 leading-relaxed p-2">
//               My mission is to leverage technology to solve real-world problems
//               and make a positive impact. I aim to deliver high-quality software
//               solutions that exceed expectations and contribute to the success
//               of my clients and community.
//             </p>
//             <h2 className="text-3xl font-bold mb-4">Skills</h2>
//             <ul className="list-disc list-inside text-gray-800 mb-8 p-2">
//               <li>JavaScript</li>
//               <li>NextApp</li>
//               <li>React</li>
//               <li>Node & Express</li>
//               <li>Python</li>
//               <li>MongoDb</li>
//               <li>Firebase</li>
//               <li>CSS & HTML</li>
//             </ul>
//             <h2 className="text-3xl font-bold mb-4">Experience</h2>
//             <ul className="list-disc list-inside text-gray-800 mb-8">
//               <li className="p-2">
//                 <span className="text-2xl">Inventory Data Analytics:</span>
//                 <p className="p-2 px-5">
//                   Designed and optimized a scalable MongoDB database to store
//                   and manage inventory data, supplier records, and sales
//                   history. Implemented complex aggregation pipelines to generate
//                   detailed reports on inventory trends, product performance, and
//                   profitability. Streamlined data organization to ensure
//                   efficient query performance and scalability for large
//                   datasets.
//                 </p>
//               </li>
//               <li className="p-2">
//                 <span className="text-2xl">
//                   Backend for Inventory Management System:
//                 </span>
//                 <p className="p-2 px-5">
//                   Developed a secure REST API using Node.js and Express.js to
//                   support core inventory management functionalities, including
//                   stock tracking, supplier management, and sales recording.
//                   Implemented role-based access controls to differentiate
//                   permissions for admins, managers, and staff. Automated email
//                   notifications for low-stock alerts using NodeMailer, ensuring
//                   proactive inventory management.
//                 </p>
//               </li>
//               <li className="p-2">
//                 <span className="text-2xl">Modern Inventory UI Design:</span>
//                 <p className="p-2 px-5">
//                   Created a responsive and user-friendly interface using
//                   React.js for seamless navigation across devices. Enhanced user
//                   experience with dynamic dashboards and interactive data
//                   visualization using Chart.js. Designed intuitive forms and
//                   components for managing inventory, supplier details, and
//                   real-time sales tracking.
//                 </p>
//               </li>
//             </ul>
//             <h2 className="text-3xl font-bold mb-4">Education</h2>
//             <div className="container mx-auto px-4">
//               <div className="max-w-4xl mx-auto">
//                 {educationDetails.map((education, index) => (
//                   <div key={index} className="mb-8">
//                     <h3 className="text-2xl font-medium">
//                       {education.institution}
//                     </h3>
//                     <p className="text-gray-700 text-lg px-2 font-medium">
//                       {education.degree} ({education.year})
//                     </p>
//                     <p className="text-gray-600 mt-2 px-2">
//                       {education.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

// src/About.js
import React from "react";
import Navbar from "@/components/Navbar"; // Ensure this path is correct based on your project structure

const educationDetails = [
  {
    institution:
      "Southern Alberta Institute of Technology (SAIT), Calgary, Canada",
    degree: "Diploma in Software Development",
    year: "2024-2025",
    description:
      "Focused on software development, algorithms, and data structures. Graduated with honors.",
  },
  {
    institution: "DAV",
    degree: "Bachelor's in Computer Applications",
    year: "2022 - 2023",
    description:
      "Specialized in software architecture and design patterns. Completed a thesis on scalable web applications.",
  },
];

const About = () => {
  return (
    <main>
      <Navbar />

      <section className="flex p-12">
        <div className="mx-auto rounded-xl p-12 bg-gray-100 dark:text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-8 dark:text-gray-800 ">
            About Me
          </h1>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-800 leading-relaxed">
              Hello! I&apos;m Jasjot Singh, a passionate software developer with
              a keen interest in creating innovative solutions. With over 3
              years of experience in the industry, I specialize in MERN. I am
              committed to continuous learning and improvement, always striving
              to enhance my skills and knowledge.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">My Mission</h2>
            <p className="text-gray-800 mb-8 leading-relaxed p-2">
              My mission is to leverage technology to solve real-world problems
              and make a positive impact. I aim to deliver high-quality software
              solutions that exceed expectations and contribute to the success
              of my clients and community.
            </p>
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-800  mb-8 p-2">
              <li>JavaScript</li>
              <li>NextApp</li>
              <li>React</li>
              <li>Node & Express</li>
              <li>Python</li>
              <li>MongoDb</li>
              <li>Firebase</li>
              <li>CSS & HTML</li>
            </ul>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <ul className="list-disc list-inside text-gray-800  mb-8">
              <li className="p-2">
                <span className="text-2xl">Inventory Data Analytics:</span>
                <p className="p-2 px-5">
                  Designed and optimized a scalable MongoDB database to store
                  and manage inventory data, supplier records, and sales
                  history. Implemented complex aggregation pipelines to generate
                  detailed reports on inventory trends, product performance, and
                  profitability. Streamlined data organization to ensure
                  efficient query performance and scalability for large
                  datasets.
                </p>
              </li>
              <li className="p-2">
                <span className="text-2xl">
                  Backend for Inventory Management System:
                </span>
                <p className="p-2 px-5">
                  Developed a secure REST API using Node.js and Express.js to
                  support core inventory management functionalities, including
                  stock tracking, supplier management, and sales recording.
                  Implemented role-based access controls to differentiate
                  permissions for admins, managers, and staff. Automated email
                  notifications for low-stock alerts using NodeMailer, ensuring
                  proactive inventory management.
                </p>
              </li>
              <li className="p-2">
                <span className="text-2xl">Modern Inventory UI Design:</span>
                <p className="p-2 px-5">
                  Created a responsive and user-friendly interface using
                  React.js for seamless navigation across devices. Enhanced user
                  experience with dynamic dashboards and interactive data
                  visualization using Chart.js. Designed intuitive forms and
                  components for managing inventory, supplier details, and
                  real-time sales tracking.
                </p>
              </li>
            </ul>
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {educationDetails.map((education, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-2xl font-medium">
                      {education.institution}
                    </h3>
                    <p className="text-gray-700 text-lg px-2 font-medium">
                      {education.degree} ({education.year})
                    </p>
                    <p className="text-gray-600 mt-2 px-2">
                      {education.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
