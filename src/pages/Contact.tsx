
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Globe, Users } from 'lucide-react';

const ContactPage = () => {
  const teamMembers = [
    {
      name: "Emily Johnson",
      role: "Education Director",
      email: "emily.johnson@eduhub.com",
      phone: "(555) 123-4567",
      photo: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      role: "Technology Lead",
      email: "michael.chen@eduhub.com",
      phone: "(555) 234-5678",
      photo: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Sophia Rodriguez",
      role: "Curriculum Designer",
      email: "sophia.rodriguez@eduhub.com",
      phone: "(555) 345-6789",
      photo: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "David Williams",
      role: "AR/VR Specialist",
      email: "david.williams@eduhub.com",
      phone: "(555) 456-7890",
      photo: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      name: "Aisha Patel",
      role: "Customer Support Manager",
      email: "aisha.patel@eduhub.com",
      phone: "(555) 567-8901",
      photo: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold hero-text-gradient mb-6">Contact Our Team</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about EduHUB? Reach out to our team for assistance with any inquiries.
            </p>
          </div>

          {/* Contact information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-charcoal-light p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <Mail size={24} className="text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@eduhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <Phone size={24} className="text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">(555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <MapPin size={24} className="text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Education Lane<br />
                      Tech City, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <Globe size={24} className="text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className="bg-gray-200 dark:bg-charcoal p-2 rounded-full hover:bg-purple hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                      </a>
                      <a href="#" className="bg-gray-200 dark:bg-charcoal p-2 rounded-full hover:bg-purple hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      </a>
                      <a href="#" className="bg-gray-200 dark:bg-charcoal p-2 rounded-full hover:bg-purple hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-charcoal-light p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple dark:bg-charcoal dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple dark:bg-charcoal dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple dark:bg-charcoal dark:text-white"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple dark:bg-charcoal dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-purple hover:bg-purple-dark text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </button>
              </form>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-16 bg-purple rounded-full"></div>
                <Users size={24} className="text-purple" />
                <div className="h-1 w-16 bg-purple rounded-full"></div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Connect with our education and technology specialists who are here to help you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white dark:bg-charcoal-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple mb-3">{member.role}</p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p className="flex items-center gap-2">
                        <Mail size={16} />
                        {member.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone size={16} />
                        {member.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
