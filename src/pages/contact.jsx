import { motion } from "motion/react"

export default function Signup() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Contact Comming Soon!
      </motion.p>
    </>
  );
}