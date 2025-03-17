'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = `Hello, my name is ${name}. ${message}`;
        const whatsappURL = `https://wa.me/9122721472?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center text-gray-800 px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center py-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-600">Contact Us</h1>
                    <p className="mt-4 text-base sm:text-lg text-gray-600">We would love to hear from you!</p>
                </div>

                {/* Team Contact Info */}
                <div className="max-w-4xl w-full">
                    <h2 className="text-xl sm:text-2xl font-semibold text-green-700">Team Contacts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {[ 
                            { name: 'Hammad Ansari', phone: '+91 9876543210', image: '/hammad.png' },
                            { name: 'Dhiraj Kumar Singh', phone: '+91 8765432109', image: 'dhiraj.png' },
                            { name: 'Raja Bauri', phone: '+91 7654321098', image: "/raja.png" },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
                                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{member.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-lg w-full mt-12">
                    <h2 className="text-xl sm:text-2xl font-semibold text-green-700">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Your Name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea 
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Your Message" 
                                rows="4" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-all"
                        >
                            Send via WhatsApp
                        </button>
                    </form>
                </div>

                {/* SVG Decoration */}
                <div className="w-full flex justify-center mt-12 overflow-x-auto">
                    <svg width="600" height="200" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                        <text x="80" y="180" fontFamily="serif" fontSize="160" fill="black">NE</text>
                        <text x="340" y="180" fontFamily="serif" fontSize="200" fill="green">X</text>
                        <text x="500" y="180" fontFamily="serif" fontSize="160" fill="black">T</text>
                        <text x="80" y="250" fontFamily="Cursive, serif" fontSize="30" fill="black">E STORE</text>
                    </svg>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
