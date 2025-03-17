'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { FaUsers, FaProjectDiagram } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-green-50 min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 w-full">
                {/* Project Section */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl text-center border-l-8 ">
                    <h1 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2">
                        <FaProjectDiagram className="text-green-600" /> About the Project
                    </h1>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Our project aims to revolutionize the e-commerce experience by creating a seamless, 
                        user-friendly, and efficient platform. We focus on delivering high-quality electronic 
                        products with affordability and speed, ensuring customer satisfaction at every step.
                    </p>
                </div>

                
                
                {/* Team Section */}
                <div className="mt-6 bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl border-l-8 ">
                    <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center gap-2">
                        <FaUsers className="text-green-600" /> Meet the Team
                    </h2>
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        {/* Team Member Cards */}
                        {[ 
                            { name: 'Hammad Ansari', role: 'Full Stack Developer', image: '/hammad.png' },
                            { name: 'Dhiraj Kumar Singh', role: 'UI/UX Designer', image: '/dhiraj.png' },
                            { name: 'Raja Bauri', role: 'Backend Developer', image: '/raja.png' }
                        ].map((member, index) => (
                            <div key={index} className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    width={80} 
                                    height={80} 
                                    className="w-20 h-20 mx-auto rounded-full object-cover"
                                />
                                <h3 className="mt-4 text-lg font-semibold text-green-700">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Group Image */}
                <div className="mt-6 w-full flex justify-center">
                    <Image 
                        src="/group.jpg" 
                        alt="Team Group" 
                        width={800} 
                        height={500} 
                        className="rounded-lg shadow-md w-full max-w-3xl object-cover"
                    />
                </div>


            </div>
            <Footer />
        </>
    );
};

export default AboutUs;