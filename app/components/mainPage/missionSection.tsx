'use client';
import {motion} from 'framer-motion'

const MissionSection: React.FC = () => {

  const cardVariants = {
    initial: { scale: 0.7, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1, stiffness: 100, delay: 0.4 } },
    hover: { scale: 1.1, transition: { duration: 1, stiffness: 100 }, boxShadow: '0px 3px 15px rgba(183, 180, 251, 0.989)' },
  };

  return (
    <div className="w-full bg-gradient-to-bl from-indigo-950 via-indigo-800 to-indigo-950 py-16 px-4 lg:px-16">
      <h2 className="text-4xl lg:text-6xl font-bold text-center text-indigo-50 mb-8">Our Mission</h2>
      <p className="text-xl lg:text-3xl text-white text-center mb-12 max-w-5xl mx-auto">
        At WeightTrack, our mission is crystal clear: we&#39;re here to empower individuals like you to take control of your health and wellness journey. We&#39;re not just another weight loss app - we&#39;re your dedicated partner in achieving lasting, meaningful change.
      </p>
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center lg:items-stretch">
        {["Empowerment", "Inclusivity", "Science-Based Approach", "Personalization"].map((title, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-full hover:rounded-2xl transition-all ease-in-out shadow-lg flex items-center justify-center lg:w-[12rem] w-48 h-48 lg:h-[12rem] hover:w-[15rem] hover:h-[15rem] overflow-hidden cursor-pointer"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={cardVariants}
          >
            <motion.div
              className="bg-white group  shadow-lg p-8 flex flex-col items-center justify-center h-full w-full transition-all duration-500 ease-in-out"
              style={{ height: '100%', width: '100%' }}
              transition={{stiffness: 100, type: 'spring' }}
            >
              <motion.h3
                className="text-2xl font-bold group-hover:hidden text-center text-indigo-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ stiffness: 30, type: 'spring' }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-lg hidden group-hover:block text-center text-indigo-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {getDescription(title)}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function getDescription(title: string) {
  switch (title) {
    case "Empowerment":
      return "We believe in empowering individuals with the knowledge, tools, and support they need to make informed decisions about their health and wellness.";
    case "Inclusivity":
      return "We're committed to creating an inclusive and welcoming environment where everyone feels valued, respected, and supported on their journey.";
    case "Science-Based Approach":
      return "Our approach is grounded in science, using evidence-based strategies to guide our recommendations and ensure the best possible outcomes.";
    case "Personalization":
      return "We understand that every individual is unique, which is why we offer personalized support tailored to your specific needs, preferences, and goals.";
    default:
      return "";
  }
}

export default MissionSection;
