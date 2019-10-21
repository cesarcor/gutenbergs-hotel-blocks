import { Component } from '@wordpress/element';
import {
  RichText,
  MediaPlaceholder,
  BlockControls,
  MediaUpload,
  MediaUploadCheck
} from '@wordpress/editor';
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import {
  Spinner,
  Toolbar,
  IconButton
} from '@wordpress/components';

class FeatureBlockEdit extends Component {
  componentDidMount() {
    const { attributes, setAttributes } = this.props;
    const { url, id } = attributes;

    if (url && isBlobURL(url) && !id) {
      setAttributes({
        url: "",
        alt: ""
      });
    }
  }

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

  onSelectURL = url => {
    this.props.setAttributes({
      url,
      id: null,
      alt: ""
    });
  };

  onUploadError = message => {
    console.log(message);
  };

  removeImage = () => {
    this.props.setAttributes({
      id: null,
      url: "",
      alt: ""
    });
  };

  render() {
    const { className, attributes } = this.props;
    const { title, content, button_text, id, url, alt } = attributes;

    return (
      <>
        <BlockControls>
          {url && (
            <Toolbar>
              {id &&
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={this.onSelectImage}
                    allowedTypes={['image']}
                    value={id}
                    render={({open}) => {
                      return(
                        <IconButton
                        label={__("Edit Image", "gutenbergs-hotel-blocks")}
                        onClick={open}
                        icon="edit"
                      />
                      )
                    }}
                  />
                </MediaUploadCheck>
              }

              <IconButton
                label={__("Remove Image", "gutenbergs-hotel-blocks")}
                onClick={this.removeImage}
                icon="trash"
              />

            </Toolbar>
          )}
        </BlockControls>
        <div className={className}>
          {url ? (
            <>
              <img src={url} alt={alt} />
              {isBlobURL(url) && <Spinner />}
            </>
          ) : (
            <MediaPlaceholder
              icon="format-image"
              onSelect={this.onSelectImage}
              onSelectURL={this.onSelectURL}
              onError={this.onUploadError}
              accept="image/*"
            />
          )}

          <RichText
            className={"wp-block-gutenbergs-hotel-blocks-feature-block__title"}
            tagName="h3"
            onChange={this.onChangeTitle}
            value={title}
            placeholder={__("Feature Title", "gutenbergs-hotel-blocks")}
            formattingControls={[]}
          />

          <RichText
            className={
              "wp-block-gutenbergs-hotel-blocks-feature-block__content"
            }
            tagName="p"
            onChange={this.onChangeContent}
            placeholder={__("Feature Content/Description", "gutenbergs-hotel-blocks")}
            value={content}
            formattingControls={[]}
          />

          <RichText
              className={
                "wp-block-gutenbergs-hotel-blocks-feature-block__button"
              }
              tagName="p"
              placeholder={__("Button Text", "gutenbergs-hotel-blocks")}
              value={button_text}
            />

        </div>
      </>
    );
  }
}

export default FeatureBlockEdit;
