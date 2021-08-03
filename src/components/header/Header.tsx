import React from 'react';

type HeaderProperties = {
    title: string;
};

function Header(props: HeaderProperties) {
    const { title } = props;

    return <div className='header main'></div>;
}

export default Header;
