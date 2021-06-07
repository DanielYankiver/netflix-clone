import React from 'react'import { Container } from '../../accordion/styles/accordion';
import { 
    Container, 
    Base, 
    Error, 
    Title, 
    Text, 
    TextSmall, 
    Link, 
    Input, 
    Submit 
} from './styles/form';


export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}




