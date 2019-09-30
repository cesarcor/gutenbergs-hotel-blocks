import { Component } from "@wordpress/element";
import { RichText } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";

class FeatureBlockEdit extends Component {
    onChangeTitle = (title) => {
        this.props.setAttributes({title})
    }

    onChangeContent = (content) => {
        this.props.setAttributes({content})
    }

    render(){
        const { className, attributes } = this.props;
        const {title, content} = attributes;
        
        return(
            <div className = { className }>

            <RichText
              className = {'wp-block-gutenbergs-hotel-blocks-feature-block__title'}
              tagName = 'h3'
              onChange = { this.onChangeTitle }
              value = {title}
              placeholder = {  __("Feature Title", "gutenbergs-hotel-blocks") }
              formattingControls = {[]}
            />

            <RichText
              className = {'wp-block-gutenbergs-hotel-blocks-feature-block__content'}
              tagName = 'p'
              onChange = { this.onChangeContent }
              placeholder = {  __("Feature Content", "gutenbergs-hotel-blocks") }
              value = {content}
              formattingControls = {[]}
            />

            </div>
        );
    }
}

export default FeatureBlockEdit;