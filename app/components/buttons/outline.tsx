import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
}

const OutlineButton = (props: Props) => {
    return (
        <button type="button" className="
        dark:hover:border-accent-dark hover:border-accent-light dark:hover:text-accent-dark hover:text-accent-light hover:scale-[101%] bezier-color text-center font-bold w-fit inline border-2 dark:border-primary-dark border-primary-light dark:text-primary-dark text-primary-light bg-transparent box-border px-4 py-2 rounded-md" {...props}>
            {props.children}
        </button>
    )
}

export default OutlineButton;