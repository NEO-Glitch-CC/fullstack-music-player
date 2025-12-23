'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

const SoundWave = ({ barCount = 100, barWidth = 12, color = '#ffffff' }) => {
  const bars = useMemo(() => Array(barCount).fill(0), [barCount]);

  const animationProps = useMemo(() => {
    return bars.map((_, i) => {
      const slowWave = Math.sin(i * 0.1) * 50 + 50;
      const fastWave = Math.sin(i * 0.5) * 20 + 20;
      const baseHeight = slowWave + fastWave + 10;

      const nextHeight = Math.sin((i + barCount / 2) * 0.1) * 50 + 50 + Math.sin((i + barCount / 2) * 0.5) * 20 + 20 + 10;

      return {
        heights: [`${baseHeight}px`, `${nextHeight}px`, `${baseHeight}px`],
        duration: 2 + Math.random() * 2,
      };
    });
  }, [barCount, bars]);

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
            height: animationProps[i].heights,
          }}
          transition={{
            duration: animationProps[i].duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
