import { Component } from "@wordpress/element";
import { RichText, MediaPlaceholder } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { Spinner } from "@wordpress/components";

class FeatureBlockEdit extends Component {
  onChangeTitle = title => {
    this.props.setAttributes({ title });
  };

  onChangeContent = content => {
    this.props.setAttributes({ content });
  };

  onSelectImage = ({ id, alt, url }) => {
    this.props.setAttributes({
      id,
      url,
      alt
    });
  };

  render() {
    const { className, attributes } = this.props;
    const { title, content, id, url, alt } = attributes;

    return (
      <div className={className}>
        {url ?
          <>
            <img src={url} alt={alt} />
            {isBlobURL(url) && <Spinner/>}
          </>
         : 
          <MediaPlaceholder
            icon="format-image"
            onSelect={this.onSelectImage}
            accept="image/*"
          />
        }

        <RichText
          className={"wp-block-gutenbergs-hotel-blocks-feature-block__title"}
          tagName="h3"
          onChange={this.onChangeTitle}
          value={title}
          placeholder={__("Feature Title", "gutenbergs-hotel-blocks")}
          formattingControls={[]}
        />

        <RichText
          className={"wp-block-gutenbergs-hotel-blocks-feature-block__content"}
          tagName="p"
          onChange={this.onChangeContent}
          placeholder={__("Feature Content", "gutenbergs-hotel-blocks")}
          value={content}
          formattingControls={[]}
        />
      </div>
    );
  }
}

export default FeatureBlockEdit;
