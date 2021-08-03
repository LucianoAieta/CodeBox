import React, { Fragment, useEffect, useState } from 'react';
import Editor from './components/editor/Editor';
import Screen from './components/screen/Screen';
import './sass/styles.sass';

function App() {
    const [html, setHtml] = useState<string>('');
    const [css, setCss] = useState<string>('');
    const [js, setJs] = useState<string>('');
    const [srcDoc, setSrcDoc] = useState<string>('');

    useEffect(() => {
        setSrcDoc(`
                <style type='text/css'>${css}</style>
                <body>
                    ${html}
                    <script type='text/javascript'>${js}</script>
                </body>
        `);
    }, [html, css, js]);

    return (
        <Fragment>
            <div className='editors'>
                <Editor type='html' code={html} setCode={setHtml} />
                <Editor type='css' code={css} setCode={setCss} />
                <Editor type='javascript' code={js} setCode={setJs} />
            </div>
            <div className='screen-container'>
                <Screen srcDoc={srcDoc} />
            </div>
        </Fragment>
    );
}

export default App;
