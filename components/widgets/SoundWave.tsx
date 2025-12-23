'use client';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const SoundWave = ({ barCount = 50, barWidth = 4, color = '#ffffff' }) => {
  const bars = useMemo(() => Array(barCount).fill(0), [barCount]);

  // Generate a smoothly varying random height
  const getRandomHeight = (i: number) => {
    // Use a combination of sine waves to create a more organic feel
    const slowWave = Math.sin(i * 0.1) * 50 + 50;
    const fastWave = Math.sin(i * 0.5) * 20 + 20;
    return slowWave + fastWave + 10; // base height
  };

  return (
    <div className="flex items-end justify-center w-full h-full gap-[2px]">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-full"
          style={{ 
            width: `${barWidth}px`,
            backgroundColor: color,
          }}
          initial={{ height: '5px' }}
          animate={{
            height: [
              `${getRandomHeight(i)}px`,
              `${getRandomHeight(i + barCount / 2)}px`,
              `${getRandomHeight(i)}px`,
            ],
          }}
          transition={{
            duration: 4 + Math.random() * 2, // Vary duration for each bar
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.02, // Stagger the animation start
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
