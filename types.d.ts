interface ScrollFuncs {
    [key: string]: () => void | undefined;
}


type ScrollFuncsProps = { scrollFuncs: ScrollFuncs }
type ScrollFuncProps = { scrollFunc: ScrollFuncs[keyof ScrollFuncs] }