import ContentService from "@/lib/contentful";
import { HTMLProps } from "react";
import SectionTitle from "../sectionTitle";
import ContentfulImage from '../contentfulImage';
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, Hyperlink } from '@contentful/rich-text-types';
import React from "react";
import Link from "next/link";

export default async function About(props: HTMLProps<HTMLElement>) {
    const pageName = "About";
    const me = await new ContentService().getMe();
    const biography = await richTextFromMarkdown(me.shortBio);

    return (
        <section {...props} className="flex center w-full h-full" title={pageName}>
            {me &&
                <div className="flex flex-col-reverse md:flex-row gap-10">
                    <div className="flex flex-col max-w-full md:max-w-[320px] flex-initial gap-6">
                        <SectionTitle n={1}>{pageName}</SectionTitle>
                        {biography && documentToReactComponents(biography, options)}
                    </div>

                    <div className="flex center">
                        {me.image && (
                            <ContentfulImage
                                className="rounded-full"
                                asset={me.image}
                                width={300}
                                height={300}
                            />
                        )}
                    </div>
                </div>
            }
        </section>
    );
}

// type CustomOptions = {
//     renderNode: {
//         [INLINES.HYPERLINK]: (node: Hyperlink, children: React.ReactNode) => React.JSX.Element;
//     }
// };

const options: Options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { data: { uri } } = node as Hyperlink;
            return (
                <Link href={uri} target="_blank" className='hover:text-accent font-bold text-primary cursor-pointer'>{children}</Link>
            )
        }
    }
}