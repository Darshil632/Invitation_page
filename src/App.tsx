import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronDown, Heart, Sparkles } from 'lucide-react';
import { EventSection } from './components/EventSection';
import { useState } from 'react';
import haldiImage from 'figma:asset/e369cb31fd628701d648d55e6462221174e81d72.png';
import mainFunctionImage from 'figma:asset/110d29ec01e3380e345330b4d2d476ad67e9b804.png';
import ganeshIcon from './assets/pngtree-elegant-hindu-wedding-card-design-with-ganesha-aum-symbol-diwali-theme-png-image_21107600.png';

export default function App() {
  const [rsvpHaldi, setRsvpHaldi] = useState<string | null>(null);
  const [rsvpMain, setRsvpMain] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleAddToCalendar = (eventName: string, date: string, time: string) => {
    const eventDetails = {
      text: eventName,
      dates: date,
      details: `Join us for our 25th Wedding Anniversary - ${eventName}`,
    };

    // Create a simple calendar reminder
    alert(`Adding "${eventName}" to calendar for ${date} at ${time}`);
  };

  const handleRSVP = (event: string, response: string) => {
    if (event === 'haldi') {
      setRsvpHaldi(response);
    } else {
      setRsvpMain(response);
    }
    alert(`Thank you! Your response for ${event === 'haldi' ? 'Haldi Ceremony' : 'Main Function'} has been recorded: ${response}`);
  };

  const handleDownload = () => {
    alert('Downloading invitation card...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100">
      {/* Romantic Background Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity, scale }}
        >
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80"
            alt="Wedding flowers"
            className="w-full h-full object-cover opacity-10"
          />
        </motion.div>

        {/* Romantic Floating Hearts */}
        <motion.div
          className="absolute top-20 left-10 text-rose-400"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-pink-400"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Heart size={50} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-40 text-rose-300"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          <Heart size={30} fill="currentColor" />
        </motion.div>

        {/* Additional romantic elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-pink-300"
          animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        >
          <Sparkles size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-10 text-purple-300"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
        >
          <Heart size={25} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-rose-200"
          animate={{ y: [0, -18, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
        >
          <Sparkles size={28} />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="mb-8 flex justify-center"
            >
              <img src={ganeshIcon} alt="Lord Ganesha" className="h-10 w-auto object-contain opacity-90 drop-shadow-sm" />
            </motion.div>
            <motion.div
              className="text-amber-600 mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={60} fill="currentColor" className="mx-auto" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl mb-6 text-amber-900 font-satisfy">
              Yogesh & Veera
            </h1>

            <motion.div
              className="text-2xl md:text-3xl mb-4 text-amber-800 font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Celebrating their 25th Wedding Anniversary
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-amber-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 1, duration: 1 }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-12 font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              You are cordially invited to celebrate
              <br />
              <span className="text-amber-700 font-cursive text-4xl md:text-5xl mt-2 block">our Silver Jubilee</span>
            </motion.p>

            <motion.div
              className="flex justify-center mt-12 text-amber-800/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 2, duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={40} />
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-2 bg-amber-600 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-32 flex items-center justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent max-w-md"
        />
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bg-white p-4 rounded-full border-2 border-rose-400"
        >
          <Heart size={32} className="text-rose-500" fill="currentColor" />
        </motion.div>
      </div>

      {/* Event Sections */}
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-32 relative">
        {/* Decorative floating elements */}
        <motion.div
          className="absolute -left-10 top-1/4 text-yellow-300 opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Sparkles size={60} />
        </motion.div>
        <motion.div
          className="absolute -right-10 top-2/3 text-purple-300 opacity-30"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Sparkles size={80} />
        </motion.div>


        <EventSection
          title="Haldi Ceremony"
          subtitle="An afternoon of yellow hues and joyous traditions"
          date="Saturday, February 14, 2026"
          time="15:00 PM onwards"
          venue="Khalihan A Luxury Stay"
          address="Khalihan Luxury Farm Stay cafe & Restaurant"
          color="yellow"
          icon="sun"
          onRSVP={(response) => handleRSVP('haldi', response)}
          onAddToCalendar={() => handleAddToCalendar('Haldi Ceremony', '20260214', '11:00 AM')}
          rsvpStatus={rsvpHaldi}
          delay={0}
          imageUrl={haldiImage}
        />

        <EventSection
          title="Grand Anniversary Celebration"
          subtitle="Join us for an elegant evening of dinner and dance"
          date="Saturday, February 14, 2026"
          time="7:00 PM onwards"
          venue="Khalihan A Luxury Stay"
          address="Khalihan Luxury Farm Stay cafe & Restaurant"
          color="purple"
          icon="moon"
          onRSVP={(response) => handleRSVP('main', response)}
          onAddToCalendar={() => handleAddToCalendar('Grand Anniversary Celebration', '20260214', '7:00 PM')}
          rsvpStatus={rsvpMain}
          delay={0.3}
          imageUrl={mainFunctionImage}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 text-white py-12 relative overflow-hidden">
        {/* Romantic footer background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-10"
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10"
            animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Heart size={40} fill="currentColor" className="mx-auto mb-4" />
            <p className="text-lg md:text-xl mb-2 text-pink-50 max-w-2xl mx-auto font-serif italic">
              "With the blessings of elders and love of family, we invite you to celebrate 25 years of togetherness."
            </p>
            <p className="text-lg md:text-xl text-pink-100 mb-6 max-w-2xl mx-auto font-serif">
              Your presence will make this celebration of love and memories truly complete.
            </p>

            <motion.div
              className="text-sm text-pink-200/80 mt-8 italic border-t border-pink-300/30 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              "Where there is love, there is life." <br />
              <span className="not-italic font-medium mt-2 block text-pink-100">
                — Best Compliments from Darshil
              </span>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
