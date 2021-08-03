import React from 'react';

type ScreenProperties = {
    srcDoc: string;
};

function Screen({ srcDoc }: ScreenProperties) {
    return (
        <div>
            <iframe title='sandbox' sandbox='allow-scripts' srcDoc={srcDoc} />
        </div>
    );
}

export default Screen;
