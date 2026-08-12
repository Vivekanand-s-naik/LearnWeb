import { useRef, } from 'react';
import BundledEditor from './BundledEditor';

export default function RTE({ onChange, value }) {
    const editorRef = useRef(null);
    

    return (
        <>
            <BundledEditor

                onInit={(_evt, editor) => editorRef.current = editor}
                value={value}
                init={{
                    height: 500,
                    menubar: false,
                    promotion: false,
                    branding: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

                }}
                onEditorChange={(newValue) => {
                    return onChange(newValue)
                }}

            />
        </>
    );
}