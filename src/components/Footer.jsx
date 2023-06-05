import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai';
import ls from '../assets/vvv.jpg'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={ls} alt="" />
            <h2>MD DILKASH REZA</h2>
            <p>Motivation is temporary, but discipline is last forever</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://github.com/mddilkashreza" target='blank'><AiFillGithub/></a>
                <a href="https://vercel.com/dashboard" target='blank'><AiFillInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=100008397910124" target='blank'><AiFillFacebook/></a>
            </article>
        </aside>
            <a href="#home"><AiOutlineArrowUp/></a>
       
    </footer>
  )
}

export default Footer;