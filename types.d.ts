import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { BlogPostFields } from '@/types';
import { Asset, Entry, EntryFieldTypes } from "contentful";

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
        github: EntryFieldTypes.Text
        shortBio: EntryFieldTypes.Text
        // location: EntryFieldTypes.Location
    }
}

interface BlogPostEntry extends EntrySkeletonType {
    contentTypeId: 'blogPost'
    fields: {
        title: EntryFieldTypes.Symbol;
        slug: EntryFieldTypes.Symbol;
        gitHubLink: EntryFieldTypes.Text;
        heroImage: Entry<Asset>;
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
    // location: string;
}

interface BlogPost {
    title: string;
    slug: string;
    gitHubLink: string;
    heroImage: Entry<Asset>;
    description: string;
    body: string;
    bodyRichText: Document;
    author?: Entry<PersonEntry>;
    publishDate: string;
    tags?: string[];
}

interface ContentfulImage {
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