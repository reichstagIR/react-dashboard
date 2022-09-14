import React from 'react';

const Header = ({title , category}) => {
    return (
        <div>
            <p className="text-gray-400 text-lg">{category}</p>
            <p className="text-black dark:text-white text-3xl font-bold">{title}</p>
        </div>
    );
};

export default Header;
