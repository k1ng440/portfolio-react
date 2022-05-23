import FeatherIcon from 'feather-icons-react';
import React from "react";
import Contact from "../../Models/Contact";
import Type from "../Home/Type";


const ContactItem = ({ contact }) => {
    if (contact.href) {
        return (
            <li>
                <a href={contact.href}>
                    <FeatherIcon className="inline" size="13" icon={contact.featherIcon} /> {contact.text}
                </a>
            </li>
        )
    }

    return (
        <li>
            <FeatherIcon className="inline" size="13" icon={contact.featherIcon} /> {contact.text}
        </li>
    )
}


const Header = () => {
    return (
        <div className="flex">
            <div className="flex-1">
                <h1 className="text-3xl">Asaduzzaman Pavel</h1>
                <Type />
            </div>
            <div className="flex-2 border-l border-dotted pl-3">
                <ul className="list-none">
                    {Contact.map((c) => <ContactItem contact={c} />)}
                </ul>
            </div>
        </div>
    )
};

export default Header;