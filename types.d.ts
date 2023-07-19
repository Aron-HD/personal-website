import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { BlogPostFields } from '@/types';
import { Asset, AssetFields, Entry, EntryField, EntryFieldTypes, EntrySkeletonType, Link } from "contentful";
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
        image: EntryFieldTypes.AssetLink
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
        heroImage: EntryFieldTypes.AssetLink;
        description: EntryFieldTypes.Text;
        body: EntryFieldTypes.Text;
        bodyRichText: EntryFieldTypes.Document;
        author?: EntryFieldTypes.EntryLink<PersonEntry>;
        publishDate: EntryFieldTypes.Date;
        tags?: EntryFieldTypes.Symbol[];
    }
}

interface ContentfulAssetFields {
  title: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
  };
}


interface Person {
    name: string;
    title: string;
    github: string;
    shortBio: string;
    image: Asset<ContentfulImageFields>;
    email: string;
    company: string;
    twitter: string;
}

interface BlogPost {
    title: string;
    slug: string;
    gitHubLink: string;
    heroImage: Asset<ContentfulImageFields>;
    description: string;
    body: string;
    bodyRichText: Document;
    author?: Entry<Person>;
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