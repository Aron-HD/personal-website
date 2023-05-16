"use client";

import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Twitter from "./icons/twitter"
import Slack from "./icons/slack";

type Props = { className: string }

export default ({ className }: Props) => {
    return (
        <ul className={className += " list-none bg-transparent"}>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Slack handle="aron-hd" />
            </li>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Github handle="aron-hd" />
            </li>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Linkedin handle="aron-hd" />
            </li>
            <li className="social-icon bezier-all animate-fade-in-down">
                <Twitter handle="_aronhd" />
            </li>
        </ul>
    );
};