import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert("Thank you. A Ritzy consultant will contact you shortly.");
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Image Section - Like Portfolio */}
      <div className="relative h-[50vh] min-h-[350px] md:min-h-[400px] overflow-hidden">
        <img
          src="/assets/images/img_f765768aa902.jpg"
          alt="Get in Touch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-md">Get in Touch</h1>
            <p className="text-lg md:text-xl font-light tracking-wide opacity-90 drop-shadow-sm">Let's discuss your vision and build something extraordinary.</p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-smart-accent mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Visit Us</h4>
              <p className="text-gray-500 text-sm">35A, 1st Cross Rd,<br />Chiranjeevi Layout, Hebbal Kempapura,<br />Bengaluru, Karnataka 560024</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <Phone size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Call Us</h4>
              <p className="text-gray-500 text-sm">+91 78995 83046</p>
              <p className="text-gray-400 text-xs mt-1">Mon-Sat, 9am - 7pm</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <Mail size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Email Us</h4>
              <p className="text-gray-500 text-sm">Contact@ritzylifestyle.in</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-smart-text mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-smart-text focus:border-smart-accent focus:ring-1 focus:ring-smart-accent focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone</label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-smart-text focus:border-smart-accent focus:ring-1 focus:ring-smart-accent focus:outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block">Phone is required</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-smart-text focus:border-smart-accent focus:ring-1 focus:ring-smart-accent focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">Email is required</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Interested In</label>
                <select
                  {...register("type")}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-smart-text focus:border-smart-accent focus:ring-1 focus:ring-smart-accent focus:outline-none transition-all appearance-none"
                >
                  <option value="home-automation">Full Home Automation</option>
                  <option value="theater">Home Theater</option>
                  <option value="commercial">Commercial Solutions</option>
                  <option value="security">Security</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Project Details</label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-smart-text focus:border-smart-accent focus:ring-1 focus:ring-smart-accent focus:outline-none transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full py-4">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};