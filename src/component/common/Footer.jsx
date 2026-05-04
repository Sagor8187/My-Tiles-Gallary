import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
               <a className="text-xl font-bold"><span className="text-2xl text-purple-700 "> Tiles</span> Gallery</a>
            </h2>
            <p className="mt-3 text-sm leading-6">
              Premium quality tiles for your dream home. Stylish and modern designs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/tiles" className="hover:text-white">Tiles</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>

            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-orange-400" />
                Dhaka, Bangladesh
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-400" />
                +880 1234-567890
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                info@tilesgallery.com
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a className="bg-gray-800 p-2 rounded-full hover:bg-blue-600">
                <FaFacebookF />
              </a>
              <a className="bg-gray-800 p-2 rounded-full hover:bg-pink-500">
                <FaInstagram />
              </a>
              <a className="bg-gray-800 p-2 rounded-full hover:bg-sky-500">
                <FaTwitter />
              </a>
              <a className="bg-gray-800 p-2 rounded-full hover:bg-green-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm">
        © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
}