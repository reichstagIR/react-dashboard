import React from 'react';

const Button = ({padding , textSize , color , text , textColor , customStyle , borderRadius}) => {
    return (
        <button className={`text-${textSize} hover:shadow-xl rounded-${borderRadius}`} style={{padding , backgroundColor : color , color : textColor , ...customStyle}}>
            {text}
        </button>
    );
};

export default Button;
