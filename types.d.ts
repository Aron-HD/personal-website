interface ScrollFuncs {
    [key: string]: () => void | undefined;
}


type ScrollFuncsProps = { scrollFuncs: ScrollFuncs }
type ScrollFuncProps = { scrollFunc: ScrollFuncs[keyof ScrollFuncs] }

type PersonEntrySkeleton = {
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