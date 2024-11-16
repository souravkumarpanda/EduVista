import React from 'react'
import "./footer.css";
import { AiFillFacebook,AiFillInstagram,AiFillTwitterSquare  } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Your virtual Learning Platfrom .All rights reserved.<br/>
                Made with ❤️ <a href="">GROUP-4</a>
            </p>
            <p>
                <div className="social-links">
                    <a href=''><AiFillFacebook/></a>
                    <a href=""><AiFillInstagram/></a>
                    <a href=""><AiFillTwitterSquare/></a>
                </div>
            </p>
        </div>
    </footer>
  )
}

export default Footer