import { motion } from "framer-motion";
import imageFile from "./5.png";

const ImageSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gray-500">We are growing</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <img 
            src={imageFile} 
            alt="" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection;
