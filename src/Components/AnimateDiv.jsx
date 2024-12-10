import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start from the bottom and invisible
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when out of view
        y: inView ? 0 : 100, // Move element up to its original position
      }}
      exit={{
        opacity: 0, // Fade out when leaving the view
        y: 0, // Move back down when it leaves
      }}
      transition={{
        duration: 0.6, // Smooth animation duration
        ease: "easeInOut", // Add easing for smoother transitions
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
