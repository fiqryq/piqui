import React from "react";

export type TextProps<T extends React.ElementType> = {
    as?: T
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

export const Text = <T extends React.ElementType = 'span'>({
    as,
    children,
    ...rest
}: TextProps<T>) => {
    const Components = as || 'span'
    return <Components {...rest}>{children}</Components>
}