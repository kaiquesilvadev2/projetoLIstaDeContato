import React from "react";
import { cva, type VariantProps } from "class-variance-authority";


export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            default: "text-white",
        },

        size: {
            textNavbar: "text-sm md:text-base lg:text-lg xl:text-xl",
            textTituloNavBar: "text-base md:text-lg lg:text-xl xl:text-2xl",
        },

        spacing: {
            paddingNavbar: "px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3",
        },
    },

    defaultVariants: {
        variant: "default",
    },
});

interface ITextLayoutProps extends React.ComponentProps<'p'>, VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;

}


export default function Text({
    as = "p",
    className,
    children,
    variant,
    size,
    spacing,
    ...props
}: ITextLayoutProps) {
    return React.createElement(
        as,
        {
            className: textVariants({ variant, size, spacing, className }),
            ...props,
        },
        children
    );
}