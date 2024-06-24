import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus beatae provident, ea deserunt adipisci
        a rerum voluptatibus dolor nulla sequi quae nesciunt pariatur illo error sint nisi amet dicta?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam omnis quam labore deserunt nisi
        accusantium, nam porro ipsum, at non. Voluptatum ex eum in, dolores hic odio atque ea.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
