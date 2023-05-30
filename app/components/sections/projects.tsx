import { HTMLProps } from "react";
import SectionTitle from "../../components/sectionTitle";

const Projects = (props: HTMLProps<HTMLElement>) => {
    const pageName = "Projects";

    return (
        <section {...props} className="flex flex-col center w-full h-full" title={pageName} >
            <SectionTitle n={2}>{pageName}</SectionTitle>
            <div className="grid grid-cols-3 grid-flow-row gap-4">
                <div className="grid bg-accent/20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi deserunt quam provident amet! Ipsa dolorem, eos sit excepturi ut voluptate sunt adipisci velit quia et tenetur culpa repellendus accusantium?</div>
                <div className="grid bg-accent/20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi deserunt quam provident amet! Ipsa dolorem, eos sit excepturi ut voluptate sunt adipisci velit quia et tenetur culpa repellendus accusantium?</div>
                <div className="grid bg-accent/20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi deserunt quam provident amet! Ipsa dolorem, eos sit excepturi ut voluptate sunt adipisci velit quia et tenetur culpa repellendus accusantium?</div>
                <div className="grid bg-accent/20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi deserunt quam provident amet! Ipsa dolorem, eos sit excepturi ut voluptate sunt adipisci velit quia et tenetur culpa repellendus accusantium?</div>
                <div className="grid bg-accent/20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi deserunt quam provident amet! Ipsa dolorem, eos sit excepturi ut voluptate sunt adipisci velit quia et tenetur culpa repellendus accusantium?</div>
                
            </div>
        </section>
    );
}

Projects.displayName = "Projects";

export default Projects;