import { motion } from "framer-motion";
import birthdayData from "../../data/birthdayData";
import birthdayBalloons from "../../assets/birthday-balloons.png";
import Confetti from "../FinalSection/Confetti";
import Butterflies from "../FinalSection/Butterflies";

import {
  fade,
  fadeUp,
  floatingTitle,
  buttonAnimation,

} from "../../utils/animationVariants";

function Welcome({ nextStep }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-6">

      {/* Celebration animation from the final page */}
      <Confetti />
      <Butterflies />

      {/* Main Content */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >

        {/* Animated balloons replace the heart */}
        <motion.img
          src={birthdayBalloons}
          alt="Colorful birthday balloons"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 },
            y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="block w-20 h-32 sm:w-24 sm:h-36 object-contain mb-4 will-change-transform"
        />

        {/* Happy Birthday */}
        <motion.h1
          variants={floatingTitle}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-pink-600 mb-5"
        >
          Happy Birthday
        </motion.h1>

        {/* Name */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.2,
          }}
          className="font-babyday text-3xl text-[#4B1426] mb-4"
        >
          {birthdayData.name}
        </motion.h2>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2,
          }}
          className="text-lg text-gray-500 mb-4"
        >
          Today is your special day.
        </motion.p>

        {/* Message */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2.8,
          }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3,
              duration: 0.6,
            }}
            className="text-lg text-gray-500"
          >
            I spent some time creating
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3.5,
              duration: 0.6,
            }}
            className="text-lg text-gray-500"
          >
            this little surprise just for you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 4,
              duration: 0.6,
            }}
            className="text-lg text-gray-500"
          >
            I hope it brings a smile to your face.
          </motion.p>
        </motion.div>

        {/* Button */}
        <motion.button
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.2,
            },
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={nextStep}
          className="
            bg-pink-500
            text-white
            px-6
            py-2
            rounded-full
            shadow-lg
            text-lg
          "
          style={{
            animation: "glow 2s ease-in-out infinite",
          }}
        >
          Open Your Birthday Surprise
        </motion.button>

      </motion.div>

      <style>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 0px rgba(236,72,153,.25);
          }

          50% {
            box-shadow: 0 0 20px rgba(236,72,153,.7);
          }

          100% {
            box-shadow: 0 0 0px rgba(236,72,153,.25);
          }
        }
      `}</style>

    </div>
  );
}

export default Welcome;
