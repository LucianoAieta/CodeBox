import React from 'react';

type ScreenProperties = {
    srcDoc: string;
};

function Screen({ srcDoc }: ScreenProperties) {
    return (
        <div className='screen-container'>
            <iframe
                className='screen'
                title='sandbox'
                sandbox='allow-scripts'
                srcDoc={srcDoc}
            />
        </div>
    );
}

export default Screen;
