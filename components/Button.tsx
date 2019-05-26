import * as React from 'react';

interface ButtonProps {
    text?: string,
    action?: any
}

const Button = (props: ButtonProps) => {
    return (
        <div onClick={()=> props.action ? props.action() : null}>
            {props.text}
        </div>
    )
}

Button.defaultProps = {
    text: 'button',
}

export default Button;