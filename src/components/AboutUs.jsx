import { motion } from 'framer-motion';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { Target, Users, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const AboutUs = () => {
  const [ref, isVisible] = useLazyLoad({ threshold: 0.2 });

  const features = [
    {
      icon: <Target size={40} />,
      title: 'Goal Oriented',
      description: 'We focus on achieving measurable results that drive your business forward.',
    },
    {
      icon: <Users size={40} />,
      title: 'Client Focused',
      description: 'Your success is our priority. We build lasting relationships with our clients.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Lightning Fast',
      description: 'Optimized for performance with cutting-edge technologies and best practices.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Us"
          description="We're passionate about creating exceptional digital experiences that help businesses grow and succeed in the modern world."
          titleClassName="inter"
          descriptionClassName="roboto-mono"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-2xl inter font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
