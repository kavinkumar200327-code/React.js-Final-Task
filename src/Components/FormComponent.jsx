import React, { useContext } from 'react'
import { FormContext } from "./FormContext";
export default function FormComponent() {
    const {formData, handleChange, theme, toggleTheme} = useContext(FormContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        alert("Form Submitted Successfully!")
    }
    return (
        <div className={`container ${theme}`}>
            <div className="form-card">
                <h2>Registration Form</h2>
                <button onClick={toggleTheme} className='theme-btn'>
                    Switch to {theme === "light" ? "dark" : "light"} Mode
                </button>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                    <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                    <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
                
                <button type="submit" className="submit-btn">Submit</button>

                </form>
            </div>
        </div>
    );
}
