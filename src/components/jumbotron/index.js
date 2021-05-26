import React from 'react'
import { Container, Inner } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps}) {
    return (
        <Inner direction={direction}>
            {children}
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronContainer ({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Title = function JumbotronContainer ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronContainer ({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronContainer ({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Jumbotron.Image = function JumbotronContainer ({ children, ...restProps }) {
    return <Image {...restProps}></Image>;
}