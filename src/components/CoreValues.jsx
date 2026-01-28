import { motion } from 'framer-motion';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { Heart, Shield, Lightbulb, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

const CoreValues = () => {
  const [ref, isVisible] = useLazyLoad({ threshold: 0.2 });

  const values = [
    {
      icon: <Heart size={48} />,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <Shield size={48} />,
      title: 'Integrity',
      description: 'Honesty and transparency guide all our business relationships.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Award size={48} />,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our work.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Core Values"
          description="The principles that drive us to deliver exceptional results for our clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
