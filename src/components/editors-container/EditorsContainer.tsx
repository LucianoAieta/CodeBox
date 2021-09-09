import React, { useEffect, useState } from 'react';
import Editor from '../editor/Editor';
import { initialHTML, initialCSS } from './initialCode';
import { ResetCSSCode } from './resetCSS';

const genBasicHTMlStructure = ({ css, js, html }: { [index: string]: string }) => `
    <style type='text/css'>${ResetCSSCode}${css}</style>
    <body>
        ${html}
        <script type='text/javascript'>${js}</script>
    </body>
`;

type EditorsContainerProps = {
    srcDocSetter: React.Dispatch<React.SetStateAction<string>>;
};

function EditorsContainer(props: EditorsContainerProps) {
    const { srcDocSetter } = props;

    const [html, setHtml] = useState<string>(initialHTML);
    const [css, setCss] = useState<string>(initialCSS);
    const [js, setJs] = useState<string>('');

    useEffect(
        () => srcDocSetter(genBasicHTMlStructure({ html, css, js })),
        [html, css, js]
    );

    return (
        <div className='editors'>
            <Editor type='html' code={html} setCode={setHtml} />
            <Editor type='css' code={css} setCode={setCss} />
            <Editor type='javascript' code={js} setCode={setJs} />
        </div>
    );
}

export default EditorsContainer;
