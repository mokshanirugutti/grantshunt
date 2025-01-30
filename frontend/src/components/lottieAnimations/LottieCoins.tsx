import React, { useEffect, useState } from 'react';
import grantCoins from '../../assets/lottie/grantCoins.json';
import { useLottie } from 'lottie-react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const styles = {
  height: 500,
};

const options = {
  animationData: grantCoins,
  loop: true, // Ensure the animation loops once loaded
  autoplay: false, // Initially set to false
};

const LottieCoins: React.FC = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const { View, play } = useLottie(options, styles);

  useEffect(() => {
    if (isInView) {
      setShouldPlay(true);
      play();
    }
  }, [isInView, play]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldPlay ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {View}
    </motion.div>
  );
};

export default LottieCoins;