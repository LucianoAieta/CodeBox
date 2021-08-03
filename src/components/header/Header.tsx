import React from 'react';

type HeaderProperties = {
    title: string;
};

function Header(props: HeaderProperties) {
    const { title } = props;

    return (
        <div className='header main'>
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default Header;
