import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    onClick?: () => void
}

export default (props: Props) => {
    return (
        <button type="button" className="hover:border-accent hover:text-accent hover:scale-[101%] bezier-color text-center font-bold w-fit inline border-2 border-primary text-primary bg-transparent box-border px-4 py-2 rounded-md" {...props}>
            {props.children}
        </button>
    )
}
