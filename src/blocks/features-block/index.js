import "./styles.editor.scss";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import edit from "./edit";

const attributes = {
  title: {
    type: "string",
    source: "html",
    selector: "h3"
  },
  content: {
    type: "string",
    source: "html",
    selector: "p"
  },
  button_text:{
    type: "string",
    source: "html",
    selector: "a"
  },
  id: {
    type: "number"
  },
  alt: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "alt",
    default: ""
  },
  url: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "src",
    default: ""
  }
};

registerBlockType("gutenbergs-hotel-blocks/feature", {
  title: __("Feature", "gutenbergs-hotel-blocks"),
  description: __("Feature", "gutenbergs-hotel-blocks"),
  category: "gh-blocks",
  parent: ["gutenbergs-hotel-blocks/features"],
  supports: {
    reusable: false
  },
  attributes,
  edit,
  save: ({ attributes }) => {
    const { title, content, button_text, url, alt, id } = attributes;

    return (
      <div>
        {url &&
          <img src={url} alt={alt} className={id ? `wp-image-${id}`: null}/>
        }
        {title && (
          <RichText.Content
            className={"wp-block-gutenbergs-hotel-blocks-feature__title"}
            tagName="h3"
            value={title}
          />
        )}

        {content && (
          <RichText.Content
            className={"wp-block-gutenbergs-hotel-blocks-feature__content"}
            tagName="p"
            value={content}
          />
        )}

        {button_text && (
          <RichText.Content
            className={"wp-block-gutenbergs-hotel-blocks-feature__button"}
            tagName="a"
            value={button_text}
          />
        )}
      </div>
    );
  }
});
