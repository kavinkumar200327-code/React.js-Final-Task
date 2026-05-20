import React from 'react'
import SocialMedia from './SocialMedia'
import {
    FaGraduationCap,
    FaBriefcaseMedical,
    FaHandHoldingHeart,
    FaFemale,
    FaHandsHelping,
    FaLeaf
} from "react-icons/fa";
export default function Services() {
    const services = [
        {
            icon: <FaGraduationCap className="service-icon" />,
            title: "Education Support",
            desc: "We provide free education support for underprivileged children through tuition centers, scholarships, school materials, and career guidance programs."
        },
        {
            icon: <FaBriefcaseMedical className="service-icon" />,
            title: "Healthcare Assistance",
            desc: "Our trust organizes free medical camps, blood donation drives, eye check-up camps, and supports low-income families with medicines and treatments."
        },
        {
            icon: <FaHandHoldingHeart className="service-icon" />,
            title: "Food Donation",
            desc: "We distribute free meals, groceries, and essential food supplies to homeless individuals, orphanages, old age homes, and needy families."
        },
        {
            icon: <FaFemale className="service-icon" />,
            title: "Women Empowerment",
            desc: "We conduct skill development training, self-employment programs, awareness workshops, and financial support initiatives for women."
        },
        {
            icon: <FaHandsHelping className="service-icon" />,
            title: "Disaster Relief",
            desc: "During floods, cyclones, and other emergencies, we provide immediate relief materials including food, clothing, shelter, and medical support."
        },
        {
            icon: <FaLeaf className="service-icon" />,
            title: "Environmental Programs",
            desc: "Our trust conducts tree plantation drives, plastic awareness campaigns, beach cleaning, and promotes eco-friendly practices."
        }
    ]
    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>

            <div className="services-grid">
                {services.map((services, index) => (
                    <div className='card' key={index}>
                        {services.icon}
                        <h2>{services.title}</h2>
                        <p>{services.desc}</p>
                    </div>
                ))}
            </div>
            <SocialMedia
            instagram="https://instagram.com"
            facebook="https://facebook.com"
            twitter="https://twitter.com"
            phone="+91 9159465889"/>
        </div>
    )
}
