import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from "@wordpress/editor";
import { __ } from '@wordpress/i18n';
import edit from './edit';

const attributes = {
  title:{
    type: 'string',
    source: 'html',
    selector: 'h3'
  },
  content:{
    type: 'string',
    source: 'html',
    selector: 'p'
  }
}

registerBlockType('gutenbergs-hotel-blocks/features-block', {
    title: __('Features Block', 'gutenbergs-hotel-blocks'),
    description: __('Features', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    attributes,
    edit,
    save: ( {attributes} ) => {
      const {title, content} = attributes;

      return(
        <div>
          {title &&
          <RichText.Content 
            className = {'wp-block-gutenbergs-hotel-blocks-feature-block__title'}
            tagName = 'h3'
            value = {title}
          />
          }

          {content &&
          <RichText.Content 
            className = {'wp-block-gutenbergs-hotel-blocks-feature-block__content'}
            tagName = 'p'
            value = {content}
          />
          }
        </div>
      )
    }

});