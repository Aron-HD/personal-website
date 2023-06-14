"use client";

import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Twitter from "./icons/twitter"
import Slack from "./icons/slack";

type Props = { className: string }

const Social = ({ className }: Props) => {
    return (
        <ul className={className += " list-none bg-transparent"}>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Slack className='flex secondary-link' handle="aron-hd" />
            </li>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Github className='flex secondary-link' handle="aron-hd" />
            </li>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Linkedin className='flex secondary-link' handle="aron-hd" />
            </li>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Twitter className='flex secondary-link' handle="_aronhd" />
            </li>
        </ul>
    );
};

export default Social;