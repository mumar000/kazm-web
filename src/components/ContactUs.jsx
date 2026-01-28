import React, { useState } from 'react';
import {
  MessageCircle,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Dribbble,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    services: {
      eventProduction: false,
      musicCuration: false,
      motionDesign: false,
      storytelling: false,
      brandStrategy: false,
      other: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-7xl w-full p-8 border-4 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Chat to us */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Chat to us</h3>
                  <p className="text-gray-600 text-sm">Our creative team is ready to connect.</p>
                  <p className="text-sm mt-1">hello@kazm.studio</p>
                </div>
              </div>
            </div>

            {/* Visit us */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Visit us</h3>
                  <p className="text-gray-600 text-sm">Drop by our creative space.</p>
                  <p className="text-sm mt-1">Your Address Here</p>
                  <p className="text-sm">City, Country</p>
                </div>
              </div>
            </div>

            {/* Call us */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Call us</h3>
                  <p className="text-gray-600 text-sm">Available for creative conversations.</p>
                  <p className="text-sm mt-1">+1 (XXX) XXX-XXXX</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <Dribbble className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#1B1b1b] text-white rounded-2xl p-10 space-y-8">
            <SectionHeading
              title="Let's create something meaningful together."
              description="Share your vision and let's bring it to life through culture and creativity."
              className=""
              titleClassName="text-4xl inter font-bold text-left mb-2"
              descriptionClassName="text-gray-300 text-base text-left roboto-mono"
            />

            {/* Form Fields */}
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white placeholder-gray-500"
              />

              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white placeholder-gray-500"
              />

              <textarea
                name="project"
                placeholder="Tell us about your project or idea..."
                value={formData.project}
                onChange={handleInputChange}
                rows="3"
                className="w-full bg-transparent border-b border-gray-600 py-2 px-0 focus:outline-none focus:border-white placeholder-gray-500 resize-none"
              />
            </div>

            {/* Services Checkboxes */}
            <div className="space-y-3">
              <p className="text-sm font-medium">How can we help?</p>

              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.eventProduction}
                    onChange={() => handleCheckboxChange('eventProduction')}
                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                  />
                  <span className="text-sm">Event Production</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.musicCuration}
                    onChange={() => handleCheckboxChange('musicCuration')}
                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                  />
                  <span className="text-sm">Music Curation</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.motionDesign}
                    onChange={() => handleCheckboxChange('motionDesign')}
                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                  />
                  <span className="text-sm">Motion Design</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.storytelling}
                    onChange={() => handleCheckboxChange('storytelling')}
                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                  />
                  <span className="text-sm">Storytelling</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.brandStrategy}
                    onChange={() => handleCheckboxChange('brandStrategy')}
                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                  />
                  <span className="text-sm">Brand Strategy</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.other}
                    onChange={() => handleCheckboxChange('other')}
                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                  />
                  <span className="text-sm">Other</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white hover:bg-gray-200 text-[#1B1B1B] font-medium py-3 px-6 rounded-full transition-colors"
            >
              Start the conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
