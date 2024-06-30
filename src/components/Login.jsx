import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// const templateId = 'template_vtbimmv';
// const serviceId = 'service_03yjmoi';
// const pubKey = 'wnIK3cPpZXjvrkIDO';
// const secretKey = 'nSQHX38MzwQyqRcod01_y';

const Login = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Login.</h3>

        <form
          ref={formRef}
          onSuubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Password</span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="Your password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Login, "login");
