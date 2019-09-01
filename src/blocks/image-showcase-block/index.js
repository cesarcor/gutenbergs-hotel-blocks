const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('gutenbergs-hotel-blocks/image-showcase-block', {
    title: __('Image Showcase Block', 'gutenbergs-hotel-blocks'),
    description: __('Image Showcase', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit: function(){

    },
    save: function(){

    }
});