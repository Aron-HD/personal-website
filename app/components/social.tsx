"use client";

import { PropsWithoutRef, useEffect, useState } from "react";
import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Twitter from "./icons/twitter"

type Props = { className: string }

export default ({ className }: Props) => {
    // const [scrollingDown, setScrollingDown] = useState(false)
    // // create a handleScroll function where we set the scroll state to true if the offset increases.

    // let previousScrollPosition = 0;

    // const handleScroll = () => {
    //     const offset = window.scrollY
    //     if (offset > previousScrollPosition && offset > 100) setScrollingDown(true)
    //     else setScrollingDown(false)
    //     previousScrollPosition = offset;
    // }
    // useEffect(() => window.addEventListener("scroll", handleScroll), [previousScrollPosition])

    return (
        // ${scrollingDown ? "lg:opacity-0" : "lg:opacity-100"} 
        <ul className={className += " list-none bg-transparent"}>
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