import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
 
];

export default function ResultsMetrics() {
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((current) =>
        current.map((count, index) => {
          const target = metrics[index].value;
          if (count >= target) return target;
          return Math.min(target, count + Math.ceil(target / 15));
        }),
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="mt-16 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      
    </motion.section>
  );
}
