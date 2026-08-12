import { Editor } from "@tinymce/tinymce-react";

import "tinymce/tinymce";
import "tinymce/models/dom";

import "tinymce/themes/silver";
import "tinymce/icons/default";

// skins
import "tinymce/skins/ui/oxide/skin.js";
import "tinymce/skins/ui/oxide/content.js";
import "tinymce/skins/content/default/content.js";

// plugins
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/image";
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";

function App() {
  return (
    <Editor
      init={{
        base_url: '/tinymce',
        suffix: '.min',
        branding: false,
        promotion: false,
        license_key: "gpl",
        height: 500,
        menubar: true,

        plugins: [
          "advlist", "anchor", "autolink", "autoresize", "autosave",
          "charmap", "code", "codesample", "directionality",
          "fullscreen", "image", "importcss", "insertdatetime",
          "link", "lists", "media", "nonbreaking", "pagebreak",
          "preview", "quickbars", "save", "searchreplace", "table",
          "visualblocks", "visualchars", "wordcount"
        ],

        // Toolbar without emoji button
        toolbar:
          "undo redo | " +
          "blocks fontfamily fontsize | " +
          "bold italic underline strikethrough superscript subscript | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist indent outdent | " +
          "link anchor image media table | " +
          "codesample charmap | " +
          "searchreplace visualblocks visualchars | " +
          "code preview fullscreen | " +
          "removeformat",

        // Ensure content font supports all features
        content_style: `
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
            font-size: 14px; 
            padding: 20px;
            line-height: 1.6;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #ccc;
            padding: 8px;
          }
          pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
          }
        `,

        // Additional settings
        browser_spellcheck: true,
        statusbar: true,
        elementpath: true,
        resize: true,
        forced_root_block: "p",
      }}
    />
  );
}

export default App;