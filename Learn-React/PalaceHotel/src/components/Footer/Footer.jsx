import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-[#1E2939] text-gray-300 pt-14">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-bold text-[#FF6900]">
                        Hotel Palace
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                        Experience luxury, comfort, and unforgettable
                        hospitality. Enjoy world-class accommodation,
                        delicious cuisine, and exceptional service.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                        Quick Links
                    </h3>

                    <ul className="space-y-3">
                        <li>
                            <Link
                                to='/'
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/menu"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Menu
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/gallery"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Gallery
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Restaurant
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                        Contact
                    </h3>

                    <div className="space-y-3 text-sm text-gray-400">
                        <p>
                            <span className="text-[#FF6900] font-medium">
                                Email:
                            </span>{" "}
                            info@hotelpalace.com
                        </p>

                        <p>
                            <span className="text-[#FF6900] font-medium">
                                Phone:
                            </span>{" "}
                            +91 9876543210
                        </p>

                        <p>
                            <span className="text-[#FF6900] font-medium">
                                Address:
                            </span>{" "}
                            Mumbai, Maharashtra
                        </p>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                        Follow Us
                    </h3>

                    <ul className="space-y-3">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Facebook
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Instagram
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                Twitter
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="hover:text-[#FF6900] transition-colors duration-300"
                            >
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-12">

                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

                    <p>
                        © 2026{" "}
                        <span className="text-[#FF6900] font-semibold">
                            Hotel Palace
                        </span>
                        . All Rights Reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link
                            to="#"
                            className="hover:text-[#FF6900] transition-colors"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="#"
                            className="hover:text-[#FF6900] transition-colors"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;