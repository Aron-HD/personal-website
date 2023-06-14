import { HTMLProps } from "react";
import SectionTitle from "../../components/sectionTitle";
import ContentService from "@/lib/contentful";
import { BlogPost } from "@/types";
import Link from "next/link";
import Github from "../icons/github";

export default async function Projects(props: HTMLProps<HTMLElement>) {
    const pageName = "Projects";

    const projects = await new ContentService().getBlogPosts();

    return (
        <section {...props} className="flex center w-full h-full" title={pageName} >
            <div className="max-w-[90%] flex flex-col center gap-6">
                <div className="w-full">
                    <SectionTitle n={2}>{pageName}</SectionTitle>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                    {projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })}
                </div>
            </div>
        </section>
    );
}

const Tag = (props: HTMLProps<HTMLElement>) => {
    return (
        <span className="inline-block text-accent/80 w-fit h-fit font-monospace text-sm">
            {props.children}
        </span>
    );
}

const Project = ({ project }: { project: BlogPost }) => {
    return (
        <article className="bg-muted rounded-md min-h-[300px] max-h-[300px] min-w-[300px] max-w-[350px]">
            <Link className="grid gap-2 p-6 h-full" href={"/" + project.slug}>
                <header className="space-y-2">
                    <div className="flex justify-between">
                        <div className="h-6 w-6 text-primary">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 17"
                                // fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.8565 10.0666L21.7131 15.4552C21.4685 15.8746 21.1182 16.2225 20.6972 16.4643C20.2763 16.7061 19.7992 16.8334 19.3138 16.8334H1.95421C1.15026 16.8334 0.649349 15.9613 1.05443 15.2668L4.19783 9.87815C4.44246 9.45879 4.79272 9.11087 5.21372 8.86907C5.63471 8.62726 6.11173 8.50002 6.59722 8.50002H23.9568C24.7607 8.50002 25.2616 9.37212 24.8565 10.0666ZM6.59722 7.11114H20.8333V5.0278C20.8333 3.87719 19.9006 2.94447 18.75 2.94447H11.8056L9.02778 0.166691H2.08333C0.932726 0.166691 0 1.09942 0 2.25002V14.318L2.99813 9.17832C3.74193 7.90324 5.12105 7.11114 6.59722 7.11114Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="h-6 w-6 text-accent">
                            <Github handle={project.gitHubLink} />
                        </div>
                    </div>
                    <h3 className="text-accent hover:text-primary text-[26px] font-extrabold bezier-color">
                        {project.title.toString()}
                    </h3>
                </header>
                {
                    project.description && <p className="opacity-80">{project.description}</p>
                }
                <footer className="flex gap-[6px] h-full items-end">
                    {
                        project.tags?.map((tag: string, i: number) => <Tag key={i}>{tag}</Tag>)
                    }
                </footer>
            </Link>
        </article>
    );
}
