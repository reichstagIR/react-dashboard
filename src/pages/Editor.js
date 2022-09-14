import React from 'react';
//Lib
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
//Components
import {Header} from "../components";
//Data
import {EditorData} from "../data/dummy"

const Editor = () => {

    const toolBarSetting = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
        ],
    }

    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header title="Editor" category="App"/>
            <div className="mt-10">
                <RichTextEditorComponent height="590px" toolbarSettings={toolBarSetting}>
                    <EditorData />
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
                </RichTextEditorComponent>
            </div>
        </div>
    );
};

export default Editor;
