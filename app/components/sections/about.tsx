import { forwardRef } from "react";
// import { Image } from 'next/image';
// import { Entry } from "contentful";
// import ContentService, { PersonEntrySkeleton } from "../lib/contentful";
import SectionTitle from "../sectionTitle";
import { Me } from "@/app/page";

type Props = {
    me:
    // Entry<PersonEntrySkeleton> 
    Me
    | undefined
}

export default forwardRef<HTMLElement, Props>((
    { me },
    forwardedRef
) => {
    const pageName = "About";

    return (
        <section ref={forwardedRef} className="flex center w-full h-full" title={pageName}>
            {me &&
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-4 lg:gap-1">
                    <div className="flex-col max-w-[320px] flex-initial">
                        <SectionTitle n={1}>{pageName}</SectionTitle>
                        <div
                            className="opacity-80"
                            dangerouslySetInnerHTML={{
                                __html: me.fields.shortBio//.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                    <div className="flex center">
                        <p className="flex text-primary text-center align-middle center min-w-[200px] min-h-[200px] bg-accent/10">
                            {/* {me.fields.title.toString()} */}
                            image
                            {/* <Image src="" alt="" srcset="" /> */}
                        </p>
                        {/* {me.fields.name.toString()} */}
                        {/* {data.contentfulPerson.image && (
                                <Image
                                    className={styles.headshot}
                                    alt={data.contentfulPerson.title}
                                    image={getImage(data.contentfulPerson.image)}
                                />
                            )} 
                        */}
                    </div>
                </div>
            }
        </section>
    );
})

