//src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../src/lib/animation";
import { FloatingPopcorn } from "../../src/components/PopCornKernel";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Add your form submission logic here
            console.log('Form submitted:', formData);

            // Show success modal
            setIsModalOpen(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };




    return (
        <div className="min-h-screen bg-[#201713]">
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        className="bg-[#201713] p-8 rounded-lg max-w-md w-full border border-[#F7E07D]/30"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-[#c6bb9a] mb-6">
                                Thank you for reaching out. I'll get back to you soon!
                            </p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2.5 bg-gradient-to-r from-[#F7E07D] to-[#F5C859] text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
            <FloatingPopcorn />
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            className="text-center mb-16"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                                Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7E07D] to-[#F5C859]">Touch</span>
                            </h2>
                            <p className="text-[#c6bb9a] max-w-2xl mx-auto">
                                Have a project in mind or want to collaborate? Drop me a message and let's create something amazing together.
                            </p>
                        </motion.div>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-[#F7E07D]" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-10 pr-4 py-3 bg-[#140e0b] border border-[#F7E07D]/30 rounded-lg text-white placeholder-[#c6bb9a] focus:outline-none focus:ring-2 focus:ring-[#F7E07D]/50 focus:border-transparent"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-[#F7E07D]" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-10 pr-4 py-3 bg-[#140e0b] border border-[#F7E07D]/30 rounded-lg text-white placeholder-[#c6bb9a] focus:outline-none focus:ring-2 focus:ring-[#F7E07D]/50 focus:border-transparent"
                                    required
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-[#F7E07D]" />
                                </div>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full pl-10 pr-4 py-3 bg-[#140e0b] border border-[#F7E07D]/30 rounded-lg text-white placeholder-[#c6bb9a] focus:outline-none focus:ring-2 focus:ring-[#F7E07D]/50 focus:border-transparent"
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="relative">
                                <div className="absolute top-3 left-3">
                                    <MessageSquare className="h-5 w-5 text-[#F7E07D]" />
                                </div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full pl-10 pr-4 py-3 bg-[#140e0b] border border-[#F7E07D]/30 rounded-lg text-white placeholder-[#c6bb9a] focus:outline-none focus:ring-2 focus:ring-[#F7E07D]/50 focus:border-transparent"
                                    required
                                ></textarea>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="pt-4"
                            >
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3.5 bg-gradient-to-r from-[#F7E07D] to-[#F5C859] text-black font-medium rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7E07D]/50"
                                >
                                    Send Message
                                </button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}