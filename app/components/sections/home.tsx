import { PropsWithoutRef, forwardRef } from "react";
import OutlineButton from "../buttons/outline";

export default forwardRef<HTMLElement, ScrollFuncsProps>(({ scrollFuncs }, forwardedRef) => {

    return (
        <section ref={forwardedRef} className="flex w-full h-3/4 center text-left" title="Home" >
            <div className="grid gap-3 w-fit h-fit">
                <h1 className="text-primary font-heading text-[64px] font-extrabold leading-[1.125]">Aron Davidson</h1>
                <h2 className="font-monospace text-[40px] font-thin">Software Developer</h2>
                <p className="opacity-80 mb-[40px]">
                    Welcome to my website, have a look at some
                    <br /> of my projects or get in touch.
                </p>
                <OutlineButton onClick={scrollFuncs.scrollToProjects}>Projects</OutlineButton>
            </div>
        </section>
    );
})