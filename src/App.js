import React from 'react';
import { Clock, Mail, Github, Linkedin } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Logo and Company Name */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            Tarab<span className="text-blue-400">Tech</span>
          </h1>
          <p className="text-xl text-gray-300">
            Innovation Through Expertise
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Clock className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-semibold">Coming Soon</h2>
          </div>
          
          <p className="text-lg text-gray-300">
            Our team of experts is working hard to bring you something amazing.
            Stay tuned for our launch!
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5 text-blue-400" />
            <a href="mailto:admin@tarabtech.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              admin@tarabtech.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-400">
          © {new Date().getFullYear()} TarabTech. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
