import { BlogPostFields } from '@/types';
import { Entry, EntryFieldTypes } from "contentful";

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
        // github: EntryFieldTypes.Array<
        //   EntryFieldTypes.EntryLink<CategoryEntrySkeleton>
        // >
        // location: EntryFieldTypes.Location
    }
}

interface BlogPostEntry extends EntrySkeletonType {
    contentTypeId: 'blogPost'
    fields: {
        title: EntryFieldTypes.Symbol;
        slug: EntryFieldTypes.Symbol;
        gitHubLink: EntryFieldTypes.Text;
        heroImage: EntryFieldTypes.Asset;
        description: EntryFieldTypes.Text;
        body: EntryFieldTypes.Text;
        bodyRichText: EntryFieldTypes.Document;
        author?: Entry<PersonFields>;
        publishDate: EntryFieldTypes.Date;
        tags?: EntryFieldTypes.Symbol[];
    }
}

interface BlogPostFields {
  title: string;
  slug: string;
  gitHubLink: string;
  heroImage: Entry<any>;
  description: string;
  body: string;
  bodyRichText: Entry<any>;
  author?: Entry<PersonFields>;
  publishDate: string;
  tags?: string[];
}
