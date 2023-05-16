import { PropsWithRef, forwardRef } from "react";
import SectionTitle from "../../components/sectionTitle";

const Projects = forwardRef<PropsWithRef<HTMLElement>>((props, forwardedRef) => {
    const pageName = "Projects";

    return (
        <section ref={forwardedRef} className="flex flex-col center w-full h-full" title={pageName} {...props} >
            <SectionTitle n={2}>{pageName}</SectionTitle>
        </section>
    );
})

Projects.displayName = "Projects";

export default Projects;