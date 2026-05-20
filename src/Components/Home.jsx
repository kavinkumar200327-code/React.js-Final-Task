import React from 'react'
import SocialMedia from './SocialMedia'
export default function Home() {
    return (
        <div>
            <header><h1 className='hometopic'> ThaaiMadi — A home for orphaned old age people, women and children.</h1></header>
            
            <div className='home-main-container'>
            <div className='home-card'>
                <div className='homeimage1'></div>
                    <div className='homecontent'>
                        <p>A home for destitute, deserted & homeless old aged people. We provide shelter, food, medication and moral support as a family away from their home.</p>
                    </div>
                </div>

                <div className='home-card'>
                    <div className='homeimage2'></div>
                    <div className='homecontent'>
                        <p>A safe place for widows, deserted women and orphaned children. We provide moral support, place to stay and food and education.</p>
                    </div>
                </div>

                <div className='home-card'>
                    <div className='homeimage3'></div>
                    <div>
                        <p className='homecontent'>A place for unemployed youth who stay with us and help and support to our occupants. We provide shelter, food and guidance to their career.</p>
                    </div>
                </div>
            </div>

            <div className="long-content-section">
            <p>இன்றைய சமூக சூழலில், சொந்த,பந்தங்களுடன் வாழும் நம்மைப் போன்றவர்களே, தங்களின் அடிப்படைத் தேவைகளுக்குப் போராடிக்கொண்டிருக்கும் நிலையில், தம் உறவுகளால் கைவிடப்பட்ட மற்றும் ஆதரவற்ற மாற்றுத் திறனாளிகளின் வேதனை நிலையை நம்மால் நினைத்துக்கூட பார்க்க முடியவில்லை. அப்படிப்பட்ட முதியோர்களை அடையாளம் கண்டு, அவர்களுக்குத் தேவையான உணவு, மருத்துவம்,தங்குமிடம், ஆகியவற்றை தன்னால் இயன்ற  அளவு வழங்கும் தன்னலமற்ற பணியினை தாய் மடி அறக்கட்டளை செய்து வருகிறது. தங்களைப் போன்ற கருணை உள்ளம் கொண்ட மனித நேயர்களின் உதவியால் இதுவரை சிறப்பாக பணிவிடை செய்து வருகிறோம். அதன் தொடர்ச்சியாக தற்பொழுது வயதான இந்த முதியோர்களின் அடிப்படைத் தேவையான உறைவிடத்திற்கான கட்டிடப் பணியை ஆரம்பித்து உள்ளோம்.</p>
            <br />
            <p>அன்பு கொண்ட எம் உறவுகள் உங்களால் முடிந்த தொகையை உங்களின் உதவியாய் அளித்து, சிறு செடியாய் துளிர்விட்டிருக்கும் இந்த தாய் மடியை உங்கள் கருணையால் பெரும் மரமாக்கி, பல ஆதரவற்ற முதியோர்களின் அடைக்கலமாய், புகலிடமாய் மாற்றிட ஈர நெஞ்சம் கொண்ட உறவுகளை இரு கரம் கூப்பி வேண்டிக் கொள்கிறோம்.</p>
            <br />
            <p>நன்றி.</p>
            <p>In today’s rapidly changing society, a large number of senior citizens are often deserted by their own kith and kin. Our charitable trust identifies such abandoned, destitute and  physically challenged Elders. We have been working on our best terms, selflessly  on providing them Food, shelter and medical facilities. So far, by God’s grace and with the help of compassionate philanthropist like you, we have been able to take care of the needy. In continuation to this, we have begun the task of constructing a new spacious home to accommodate more Elders, who are still left alone on the streets.</p>
            <br />
            <p>Dear patrons and donors, we request you to lend us a helping hand in this virtuous mission and contribute your share. Please support our cause to bring back hope, peace and happiness in the lives of these noble souls. Your affection, co-operation and service to humanity will be definitely rewarded.</p>
            <br />
            <p>Thank you!</p>
            <br />
            <hr />
            <SocialMedia
            instagram="https://instagram.com"
            facebook="https://facebook.com"
            twitter="https://twitter.com"
            phone="+91 9159465889"/>
            </div>
        </div>
    )
}
