// import './styles/style.scss';
// import './styles/editor.scss';

// import Inspector from './components/inspector';

const { Component } = wp.element;

const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;

const { __ } = wp.i18n;

const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText
} = wp.editor;

const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar
} = wp.components;

const heroBlockAttributes = {

  heroHeading: {
      type: 'array',
      source: 'children',
      selector: 'h2'
  },

  heroText: {
    type: 'array',
		source: 'children',
		selector: '.hero-text'
  },

	heroText_color: {
		type: 'string',
		default: '#f22424'
	},

	heroText_alignment: {
		type: 'string'
	},

  button: {
    type: 'string',
		source: 'text'
  },

  backgroundImageURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img',
		default: 'http://localhost/hotel/wp-content/uploads/2018/12/210129.jpg'
  },

  backgroundImageID: {
    type: 'number'
  }

}

registerBlockType( 'gutenbergs-hotel/hero-block', {
    title: 'Hero Block',
    description: __( 'Add a Hero Section', 'gutenbergs-hotel' ),
    icon: 'format-gallery',
    category: 'gh-blocks',
		keywords: [
			__('Hero'),
		  __('Slider')
		],

    attributes: heroBlockAttributes,

    edit: function( props, className, setAttributes ) {

        const {
          heroHeading,
          backgroundImageURL,
          heroText,
					heroText_color,
          button,
          backgroundImageID
        } = props.attributes;

        return (
					<div class="wp-block-gutenbergs-hotel-hero-block">

						<RichText
							tagName="h1"
							placeholder={ __( 'Hero Heading', 'gutenbergs-hotel' ) }
							keepPlaceholderOnFocus
							value={ heroHeading }
							className='hero-title'
							onChange={ (value) => setAttributes( { heroHeading } ) }
						/>

						<RichText
							tagName="p"
							placeholder={ __( 'Hero Text', 'gutenbergs-hotel' ) }
							keepPlaceholderOnFocus
							value={ heroText }
							className='hero-text'
							style={
								{ color: heroText_color }
							}
							onChange={ (value) => setAttributes( { heroText } ) }
						/>

					</div>
        );
    },

    save: function( props, className ) {

				const {
					heroHeading,
          backgroundImageURL,
          heroText,
					heroText_color,
          button,
          backgroundImageID
				} = props.attributes;

				return ([
					<div style="background-image: url({backgroundImageURL})">
						<RichText.Content
						tagName="h1"
						value={ heroHeading }
						/>

						<RichText.Content
						tagName="p"
						value={ heroText }
						/>

					</div>
				]);


    }
} );
