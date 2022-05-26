import FeatherIcon from 'feather-icons-react';
import React from "react";
import Contact from "../../data/contact";
import Type from "../Home/Type";


const ContactItem = ({ contact }) => {
    const text = <>
        <FeatherIcon className="inline" size="13" icon={contact.featherIcon} /> 
        <span className='text-xs'> {contact.text} </span>
    </>

    if (contact.href) {
        return <li><a href={contact.href}>{text}</a></li>
    }

    return <li>{text}</li>
}


const Header = () => {
    return (
        <header className="flex">
            <div className="flex-1">
                <h1 className="text-3xl" style={{fontFamily: "Roboto"}}>Asaduzzaman Pavel</h1>
                <Type />
            </div>
            <div className="flex-2 border-l border-dotted pl-3">
                <ul className="list-none">
                    {Contact.map((c) => <ContactItem key={c.text} contact={c} />)}
                </ul>
            </div>
        </header>
    )
};

export default Header;