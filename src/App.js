import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Progress data for the skills chart
const skillsData = [
  { name: 'Technical Skills', value: 85 },
  { name: 'Problem Solving', value: 90 },
  { name: 'Communication', value: 80 },
  { name: 'Time Management', value: 88 },
  { name: 'Leadership', value: 75 },
];

const NavBar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">MJ</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Home</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
              <a href="#experience" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Experience</a>
              <a href="#skills" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Skills</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700">
    <div className="text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Mohammad Jabakhnji</h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">Student • Technology Enthusiast • Future Innovator</p>
      <div className="flex justify-center gap-4">
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
          Get in Touch
        </a>
        <a href="#about" className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:-translate-y-1">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <p className="text-lg leading-relaxed mb-6">
          I am a motivated high school student at Queen Elizabeth School Edmonton, passionate about technology and innovation. Expected to graduate in June 2025, I am actively seeking opportunities to expand my knowledge and skills in the tech industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Education</h3>
            <p>Queen Elizabeth School</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Languages</h3>
            <p>English & Arabic</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Interests</h3>
            <p>Cybersecurity & Tech</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-4">PC Technician Assistant</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ChevronDown className="mr-2 text-blue-600" size={16} />
              Hardware troubleshooting and repairs
            </li>
            <li className="flex items-center">
              <ChevronDown className="mr-2 text-blue-600" size={16} />
              Software optimization and maintenance
            </li>
            <li className="flex items-center">
              <ChevronDown className="mr-2 text-blue-600" size={16} />
              System diagnostics and upgrades
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-4">Classroom Helper</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ChevronDown className="mr-2 text-blue-600" size={16} />
              Mathematics and science tutoring
            </li>
            <li className="flex items-center">
              <ChevronDown className="mr-2 text-blue-600" size={16} />
              Peer mentoring and support
            </li>
            <li className="flex items-center">
              <ChevronDown className="mr-2 text-blue-600" size={16} />
              Study group coordination
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {skillsData.map((skill) => (
            <div key={skill.name} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold mb-2">{skill.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{skill.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-white">
        <NavBar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;