import React, { useState } from 'react'
import vgg from '../assets/vgg.png'
import toast from 'react-hot-toast';
import {motion} from 'framer-motion';
import {addDoc,collection} from 'firebase/firestore';
import {db} from "../firebase";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disableBtn, setDisableBtn] =useState(false);

    const sumbitHandler = async(e) =>{
        e.preventDefault();
        setDisableBtn(true);

        try {
            await addDoc(collection(db,"contacts"),{name, email, message});
       

        toast.success('Successfully created!');
            
        } catch (error) {
            
        toast.error('Error!');
        setDisableBtn(false);
        }


        
    };

    const animations = {
        form:{
            initial:{
                x: "-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },
        },
        button:{
            initial:{
                y: "-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            },
            transition:{
                delay:0.5,
            }
        },
    }
  return (
    <div id='contact'>
        <section>
            <motion.form onSubmit={sumbitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder='Your Name' required/>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="Email" placeholder='Your Email' required/>
                <input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text" placeholder='Your Message' required/>
                <motion.button 
                className={disableBtn?"disablebtn":""}
                disabled={disableBtn} {...animations.button} type="submit">Send Me</motion.button>
            </motion.form>
            
        </section>
        <aside>
            <img src={vgg} alt="" />
        </aside>
    </div>
  )
}

export default Contact