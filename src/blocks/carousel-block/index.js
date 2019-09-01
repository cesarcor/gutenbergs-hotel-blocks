const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('gutenbergs-hotel-blocks/carousel-block', {
    title: __('Carousel Block', 'gutenbergs-hotel-blocks'),
    description: __('Carousel', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit: function(){

    },
    save: function(){

    }
});