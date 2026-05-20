import React from 'react'
import ApiCrud from './ApiCrud'
import SocialMedia from './SocialMedia'

export default function Projects() {
    return (
        <div className='gallery-container'>
            <h1 className='client-title'>Our Client List</h1>
            <ApiCrud />
            <SocialMedia
            instagram="https://instagram.com"
            facebook="https://facebook.com"
            twitter="https://twitter.com"
            phone="+91 9159465889"/>
        </div>
    )
}
