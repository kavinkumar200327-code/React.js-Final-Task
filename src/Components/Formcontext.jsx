import React, {createContext, useState} from 'react'

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const toggleTheme = ()=>{
        setTheme(theme === "light"? "dark" : "light");
    };
    return (
        <FormContext.Provider
        value={{
        formData,
        handleChange,
        theme,
        toggleTheme,
        }}
        >
        {children}
        </FormContext.Provider>
    )
}
