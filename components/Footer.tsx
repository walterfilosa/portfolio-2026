import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-10 mt-12 border-t border-gray-200/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-sm text-gray-500 font-medium">
                    © {new Date().getFullYear()} Walter Filosa. Tutti i diritti riservati.
                </div>

                <div className="flex gap-8 text-sm text-gray-400 font-medium">
                    <a
                        href="https://www.iubenda.com/privacy-policy/64469731"
                        className="iubenda-embed iubenda-noiframe hover:text-[#002060] transition-colors cursor-pointer"
                        title="Privacy Policy"
                        >Privacy Policy
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;