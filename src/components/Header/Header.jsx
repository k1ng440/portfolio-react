import FeatherIcon from 'feather-icons-react';
import React from "react";
import Contact from "../../Models/Contact";
import Type from "../Home/Type";


const Header = () => {
    const lists = [];
    for (const c of Contact) {
        console.log(c.href === "")
        lists.push(
            <li className='text-xs' key={c.text}>
                {
                    c.href ? <>
                    <a href={c.href}><FeatherIcon className="inline" size="13" icon={c.featherIcon} /> {c.text}</a> 
                    </> : 
                    <><FeatherIcon className="inline" size="13" icon={c.featherIcon} /> {c.text}</>
                }
            </li>
        )
    }

    return (
        <div className="flex">
            <div className="flex-1">
                <h1 className="text-3xl">Asaduzzaman Pavel</h1>
                <Type />
            </div>
            <div className="flex-2 border-l border-dotted pl-3">
                <ul className="list-none">
                    {lists}
                </ul>

            </div>
        </div>
    )
};

export default Header;