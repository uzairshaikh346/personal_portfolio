import { FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-blue-50 px-8 py-12 h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        
        {/* Email */}
        <div className="flex items-center justify-center mb-4">
          <FaEnvelope className="text-blue-700 mr-2" />
          <a href="mailto:your-email@example.com" className="text-blue-700 font-medium">
            uzairshaikh346@gmail.com
          </a>
        </div>
        
        {/* Phone */}
        <div className="flex items-center justify-center mb-4">
          <FaPhone className="text-blue-700 mr-2" />
          <a href="tel:+1234567890" className="text-blue-700 font-medium">
            0315-8445869
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/muhammad-uzair-2526732a6/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-800">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/qureshi.bro.9" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-800">
            <FaFacebook />
          </a>
        </div>
        
      </div>
    </section>
  );
}
