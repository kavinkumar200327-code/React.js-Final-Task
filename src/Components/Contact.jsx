import React from 'react'
import { FormProvider } from './FormContext'
import FormComponent from './FormComponent'
import SocialMedia from './SocialMedia'

export default function Contact() {
    return (
        <div>
            <h1 className='contact-topic'>Contact</h1>
            <FormProvider>
                <div>
                    <FormComponent />
                </div>
            </FormProvider>

            <div className='map-container'>
                <h2 className='map-title'>Our Location</h2>
                <iframe
                    title="Google Map"
                    className='google-map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.294387458873!2d77.96033037482971!3d11.530727288667647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe19a711e05bd%3A0xae71090f98844f4f!2sTHAAI%20MADI%20TRUST!5e0!3m2!1sen!2sin!4v1779268814835!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <SocialMedia
            instagram="https://instagram.com"
            facebook="https://facebook.com"
            twitter="https://twitter.com"
            phone="+91 9159465889"/>
        </div>
        
    )
}


