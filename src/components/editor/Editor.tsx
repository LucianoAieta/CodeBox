import React from 'react';
import AceEditor from 'react-ace-builds';
import 'react-ace-builds/webpack-resolver-min';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

type EditorProps = {
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
    type: string;
};

function Editor(props: EditorProps) {
    const { code, setCode, type } = props;

    return (
        <AceEditor
            height='100%'
            width='100%'
            className='editor'
            mode={type}
            theme='github'
            value={code}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}
            onChange={setCode}
        />
    );
}

export default Editor;
