import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";

export default function SocialMedia(props) {
    return (
        <div className='social-container'>
            <a href={props.instagram} target='_blank'> <FaInstagram /> </a>
            <a href={props.facebook} target='_blank'> <FaFacebook/> </a>
            <a href={props.twitter} target='_blank'> <FaTwitter/> </a>
            <a href={`tel:${props.phone}`} className='phone-box'> <FaPhoneAlt className="phone-icon"/> <span className='phone-number'>{props.phone}</span></a>
        </div>
        
    )
}
