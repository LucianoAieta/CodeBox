import React, { Fragment, useState } from 'react';
import EditorContainer from '../../components/editors-container/EditorsContainer';
import Screen from '../../components/screen/Screen';

function EditorPage() {
    const [srcDoc, setSrcDoc] = useState<string>('');

    return (
        <Fragment>
            <div className='header editorPage'>
                <h1 className='title'>Testing the editor!</h1>
            </div>
            <div className='body editorPage'>
                <EditorContainer srcDocSetter={setSrcDoc} />
                <Screen srcDoc={srcDoc} />
            </div>
        </Fragment>
    );
}

export default EditorPage;
