import Link from "next/link";

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
const socials = [
    {
        icon: <FaGithub />, path: 'https://github.com/mgjslearn'
    },
    {
        icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/mahathi-gumudavelli/'
    }
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social