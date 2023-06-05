import React from 'react'
import {motion} from "framer-motion";
import  Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/me.png";
import CountUp from 'react-countup';

const Home = () => {

  const animations = {
    h3:{
      initial:{
        x: "-100%",
        opacity:0
      },
      whileInView:{
        x:0,
        opacity:1,
      }
    },
    button:{
      initial:{
        y: "-100%",
        opacity:0
      },
      whileInView:{
        y:0,
        opacity:1,
      }
    },
  };
  return (
    <div id='home'>
      <section>
      <div>
        <motion.h3 {...animations.h3}>
          Hi, I Am <br /> MD Dilkash Reza
        </motion.h3>

        <Typewriter 
        options={{
          strings:["A Developer", "A Designer", "A Student"],
          autoStart: true,
          loop:true,
          cursor: "",
          wrapperClassName:"typewritterclass"
        }}
        />
        <div>
        <a href="mailto:dilkashreza420@gmail.com">
          Hire Me
        </a>
        <a href="#work">
          Projects <BsArrowUpRight/>
        </a>
        </div>

        <article>
          <p>
            <CountUp
            start={0}
            end={100}
            duration={10}
            delay={2}
            />
          </p>
          <span>Clients Worldwide</span>
        </article>
        <aside>
        <article>
          <p>
          <CountUp
            start={0}
            end={15}
            duration={20}
            delay={1}
            />
          </p>
          <span>Project Done</span>
        </article>
        <article data-special>
          <p>
            Contact
          </p>
          <span>dilkashreza420@gmail.com</span>
        </article>
        </aside>
      </div>
      </section>
      <section>
        <img src={me} alt='Dilkash'/>
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home;