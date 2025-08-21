import { motion } from 'framer-motion'

type MotionWrapperProps = {
  children: React.ReactNode
}

export default function MotionWrapper({ children }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80, y: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0 }}
    >
      {children}
    </motion.div>
  )
}
