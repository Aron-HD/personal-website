import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { BlogPostFields } from '@/types';
import { Asset, AssetFields, Entry, EntryField, EntryFieldTypes, Link } from "contentful";
// import { AnchorHTMLAttributes } from "react";

type IconProps = AnchorHTMLAttributes<HTMLAnchorElement> & { handle: string }

interface ScrollFuncs {
    [key: string]: () => void | undefined;
}

type ScrollFuncsProps = { scrollFuncs: ScrollFuncs }
type ScrollFuncProps = { scrollFunc: ScrollFuncs[keyof ScrollFuncs] }

interface PersonEntry extends EntrySkeletonType {
    contentTypeId: 'person'
    fields: {
        name: EntryFieldTypes.Symbol
        title: EntryFieldTypes.Symbol
        github: EntryFieldTypes.Symbol
        shortBio: EntryFieldTypes.Text
        image: Entry<Asset>
        email: EntryFieldTypes.Symbol
        company: EntryFieldTypes.Symbol
        twitter: EntryFieldTypes.Symbol
    }
}

interface BlogPostEntry extends EntrySkeletonType {
    contentTypeId: 'blogPost'
    fields: {
        title: EntryFieldTypes.Symbol;
        slug: EntryFieldTypes.Symbol;
        gitHubLink: EntryFieldTypes.Text;
        heroImage: Asset;
        description: EntryFieldTypes.Text;
        body: EntryFieldTypes.Text;
        bodyRichText: EntryFieldTypes.Document;
        author?: Entry<PersonEntry>;
        publishDate: EntryFieldTypes.Date;
        tags?: EntryFieldTypes.Symbol[];
    }
}

interface Person {
    name: string;
    title: string;
    github: string;
    shortBio: string;
    image: Asset;
    email: string;
    company: string;
    twitter: string;
}

interface BlogPost {
    title: string;
    slug: string;
    gitHubLink: string;
    heroImage: Asset;
    description: string;
    body: string;
    bodyRichText: Document;
    author?: Entry<PersonEntry>;
    publishDate: string;
    tags?: string[];
}


interface ContentfulImageFields {
    title?: string,
    description?: string,
    file?: {
        url: string
        details: {
            image: {
                width: number
                height: number
            }
        }
    }
}