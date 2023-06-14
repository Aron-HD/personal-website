"use client";

import { HTMLProps } from "react";
import OutlineButton from "../buttons/outline";

type Props = HTMLProps<HTMLElement>;

export default function Home(props: Props) {
    const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section {...props} className="flex w-full h-3/4 center text-left" title="Home" >
            <div className="grid gap-3 w-fit h-fit">
                <h1 className="dark:text-primary-dark text-muted-dark font-heading text-[64px] font-extrabold leading-[1.125]">Aron Davidson</h1>
                <h2 className="dark:text-text-dark text-accent-light font-monospace text-3xl md:text-[40px] font-thin">Software Developer</h2>
                <p className="opacity-80 mb-6 md:mb-10">
                    Welcome to my website, have a look at some
                    <br /> of my projects or get in touch.
                </p>
                <OutlineButton onClick={scrollToProjects}>Projects</OutlineButton>
            </div>
        </section>
    );
}
