import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-900 text-gray-300 mt-12">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">SkillSphere</h3>
                        <p className="text-sm text-gray-400">Empowering learners with quality education and skill development.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                            <li><Link href="/courses" className="hover:text-white transition-colors duration-300">Courses</Link></li>
                            <li><Link href="/profile" className="hover:text-white transition-colors duration-300">User Profile</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">Browse All</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 mb-6">
                            <li><a href="mailto:info@skillsphere.com" className="hover:text-white transition-colors duration-300">info@skillsphere.com</a></li>
                            <li className="text-sm">24/7 Support Available</li>
                        </ul>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-6" />

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} SkillSphere. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;