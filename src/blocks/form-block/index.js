const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('gutenbergs-hotel-blocks/form-block', {
    title: __('Form Block', 'gutenbergs-hotel-blocks'),
    description: __('Forms', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit: function(){

    },
    save: function(){

    }
});