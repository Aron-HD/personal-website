import { Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS, Hyperlink } from "@contentful/rich-text-types"
import React from 'react'
import ContentService from '@/lib/contentful'
import { Person } from '@/types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageNotFound from '../not-found'
import ContentfulImage from '../components/contentfulImage';
import Link from "next/link"

export async function generateStaticParams() {
    return await new ContentService()
        .getBlogPostSlugs()
        .then((slugs) => slugs.map((slug) => ({
            params: {
                slug
            }
        })))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    // reset scroll position to top of page
    const slug = params?.slug as string;
    const project = await new ContentService().getBlogPostBySlug(slug);

    if (!project) {
        return PageNotFound();
    }

    const { author: auth, gitHubLink, tags, publishDate, title, heroImage, bodyRichText } = project
    const author = auth?.fields as Person

    const pubDate = new Date(publishDate).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <article className="px-8 md:px-0 md:max-w-[60%] grid gap-5">
            <h1 className='font-black text-3xl text-primary'>
                {title}
            </h1>
            <section className="flex justify-between gap-2 items-end text-left" title='metadata'>
                <div>
                    <b>@{author.github}</b>
                    <br />
                    <em>{pubDate}</em>
                    <br />
                    <a href={gitHubLink}>View repository</a>
                </div>
                <div className="inline-block flex-wrap text-right">
                    {tags &&
                        tags.map((tag: string, index: number) => (
                            <pre
                                key={index}
                                className="inline-block m-1 h-fit w-fit px-2 text-accent border-accent border-solid border-[1.5px] rounded-[8%] bg-muted"
                            >
                                #{tag}
                            </pre>
                        ))}
                </div>
            </section>
            <section className="" title='hero' >
                {heroImage && (
                    <ContentfulImage
                        className=""
                        asset={heroImage}
                    />
                )}
            </section>
            <section className="" title='content'>
                {bodyRichText && documentToReactComponents(bodyRichText, richTextRenderOptions)}
            </section>
        </article>
    )
}

const richTextRenderOptions: Options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { data: { uri } } = node as Hyperlink;
            return (
                <Link href={uri} target="_blank" className='hover:text-accent font-bold text-primary cursor-pointer'>{children}</Link>
            )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className='py-2 text-justify'>
                {children}
            </p>
        ),
        [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className='text-3xl'>
                {children}
            </h1>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className='text-2xl font-extrabold pt-4 text-primary font-heading'>
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className='pt-4'>
                {children}
            </h3>
        ),
        [BLOCKS.HEADING_4]: (nde, children) => (
            <h4 className='pt-4'>
                {children}
            </h4>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <h5 className='pt-4 font-bold pb-2'>
                {children}
            </h5>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className='list-disc pl-10'>
                {children}
            </ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
            <ol className='list-decimal pl-10 marker:text-primary marker:font-bold'>
                {children}
            </ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li className='list-outside'>
                {children}
            </li>
        ),
        [BLOCKS.QUOTE]: (node, children) => <pre>{children}</pre>,
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            return <div className="flex center mt-8">
                <ContentfulImage asset={node.data.target} />
            </div>
        },
    },
    renderMark: {
        [MARKS.BOLD]: (text) => (
            <strong className='font-bold'>
                {text}
            </strong>
        ),
        [MARKS.ITALIC]: (text) => (
            <em className='italic'>
                {text}
            </em>
        ),
        [MARKS.CODE]: (text) => (
            <code className='bg-muted text-accent'>
                {text}
            </code>
        ),
    },
}