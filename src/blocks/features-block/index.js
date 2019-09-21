import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

registerBlockType('gutenbergs-hotel-blocks/features-block', {
    title: __('Features Block', 'gutenbergs-hotel-blocks'),
    description: __('Features', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    attributes: {
      heading:{
        type: 'string',
        source: 'html',
        selector: 'h2'
      },
      content:{
        type: 'string',
        source: 'html',
        selector: 'p'
      }
    },
    edit: ({ className, attributes, setAttributes }) => {
      const { heading, content } = attributes;

      const onChangeHeading = (heading) => setAttributes({ heading })
      const onChangeContent = (content) => setAttributes({ content })

      
      return(
        <div>

            <RichText
              tagName = "h2"
              className = {className}
              onChange = { onChangeHeading }
              value = {heading}
            />

            <RichText
              tagName = "p"
              className = {className}
              onChange = { onChangeContent }
              value = {content}
            />

          </div>
          )
    },

    save: ({ attributes }) => {
        const { heading, content } = attributes;
        return(
          <div>
            <RichText.Content tagName = "h2" value = { heading } />
            <RichText.Content tagName = "p" value = { content } />
          </div>
          );
    }

});