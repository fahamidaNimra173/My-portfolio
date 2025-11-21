
import  React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

function GradientText({
  text,
  className,
  gradient = 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 25%, #f472b6 50%, #c084fc 75%, #3b82f6 100%)',
  neon = false,
  transition = { duration: 3, repeat: Infinity, ease: 'linear' },
  ...props
}) {
  const baseStyle = {
    backgroundImage: gradient,
  };
 
  return (
    <span
      data-slot="gradient-text"
      className={cn('relative inline-block', className)}
      {...props}>
      <motion.span
        className="m-0 text-transparent bg-clip-text bg-[length:200%_100%]"
        style={baseStyle}
        animate={{ backgroundPositionX: ['0%', '100%'] }}
        transition={transition}>
        {text}
      </motion.span>
      {neon && (
        <motion.span
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[4px] mix-blend-plus-lighter bg-[length:200%_100%]"
          style={baseStyle}
          animate={{ backgroundPositionX: ['0%', '100%'] }}
          transition={transition}>
          {text}
        </motion.span>
      )}
    </span>
  );
}

export { GradientText };