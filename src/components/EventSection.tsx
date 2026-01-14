import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Check, X, Sun, Moon } from 'lucide-react';

interface EventSectionProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  color: 'yellow' | 'purple';
  icon: 'sun' | 'moon';
  onRSVP: (response: string) => void;
  onAddToCalendar: () => void;
  rsvpStatus: string | null;
  delay?: number;
  imageUrl?: string;
}

export function EventSection({
  title,
  subtitle,
  date,
  time,
  venue,
  address,
  color,
  icon,
  onRSVP,
  onAddToCalendar,
  rsvpStatus,
  delay = 0,
  imageUrl,
}: EventSectionProps) {
  const colorScheme = {
    yellow: {
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'bg-yellow-50',
      border: 'border-yellow-300',
      text: 'text-yellow-700',
      button: 'bg-yellow-500 hover:bg-yellow-600',
      buttonOutline: 'border-yellow-500 text-yellow-700 hover:bg-yellow-50',
      icon: 'text-yellow-600',
    },
    purple: {
      gradient: 'from-purple-500 to-indigo-600',
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      text: 'text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700',
      buttonOutline: 'border-purple-600 text-purple-700 hover:bg-purple-50',
      icon: 'text-purple-600',
    },
  };

  const scheme = colorScheme[color];
  const Icon = icon === 'sun' ? Sun : Moon;

  // Dancing animation variants
  const danceAnimation = {
    y: [0, -15, 0, -10, 0],
    rotate: [0, -5, 5, -3, 0],
    scale: [1, 1.05, 0.98, 1.03, 1],
  };

  const enjoyAnimation = {
    rotate: [0, 8, -8, 5, 0],
    scale: [1, 1.1, 1, 1.05, 1],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${scheme.gradient} opacity-10 blur-3xl`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className={`${scheme.bg} rounded-3xl p-8 md:p-12 border-2 ${scheme.border} shadow-xl`}>
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            className={`${scheme.icon} inline-block mb-4`}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Icon size={60} />
          </motion.div>

          <h2 className={`text-4xl md:text-5xl mb-3 ${scheme.text} font-serif`}>
            {title}
          </h2>

          <p className="text-gray-600 text-lg md:text-xl">
            {subtitle}
          </p>
        </div>

        {/* Animated Cartoonish Image */}
        {imageUrl && (
          <div className="flex justify-center mb-10">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${scheme.gradient} opacity-10 blur-2xl`} />

              <motion.img
                src={imageUrl}
                alt={title}
                className={`relative z-10 w-full h-full object-cover ${color === 'yellow' ? 'rounded-3xl' : 'rounded-full'} border-4 border-white shadow-2xl`}
                className="relative z-10 w-full h-full object-cover rounded-3xl border-4 border-white shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Subtle sparkles - only for purple/night event */}
              {color === 'purple' && (
                <>
                  <motion.div
                    className="absolute -top-4 -right-4 text-purple-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-4xl">✨</div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 text-indigo-400"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="text-3xl">🎉</div>
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 -right-6 text-purple-500"
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -10, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <div className="text-2xl">💜</div>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        )}

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Calendar className={`${scheme.icon} mb-3`} size={32} />
            <div className="text-sm text-gray-500 mb-1">Date</div>
            <div className="text-gray-800">{date}</div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className={`${scheme.icon} mb-3`} size={32} />
            <div className="text-sm text-gray-500 mb-1">Time</div>
            <div className="text-gray-800">{time}</div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className={`${scheme.icon} mb-3`} size={32} />
            <div className="text-sm text-gray-500 mb-1">Venue</div>
            <div className="text-gray-800">{venue}</div>
          </motion.div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-8 text-center">
          <p className="text-gray-700">{address}</p>
          <motion.button
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')}
            className={`mt-4 px-6 py-2 border-2 ${scheme.buttonOutline} rounded-full transition-colors inline-flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={18} />
            Get Directions
          </motion.button>
        </div>

        {/* RSVP Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className={`text-2xl mb-4 text-center ${scheme.text}`}>
            RSVP
          </h3>

          {rsvpStatus ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center py-4"
            >
              <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                <Check size={24} />
                <span className="text-lg">Thank you for your response!</span>
              </div>
              <p className="text-gray-600">You responded: <strong>{rsvpStatus}</strong></p>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onRSVP('Attending')}
                className={`${scheme.button} text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Check size={20} />
                I'll be there
              </motion.button>

              <motion.button
                onClick={() => onRSVP('Unable to Attend')}
                className={`border-2 ${scheme.buttonOutline} px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
                Can't make it
              </motion.button>
            </div>
          )}

          {/* Add to Calendar */}
          <div className="mt-6 text-center">
            <motion.button
              onClick={onAddToCalendar}
              className={`border-2 ${scheme.buttonOutline} px-6 py-2 rounded-full inline-flex items-center gap-2 transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} />
              Add to Calendar
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}