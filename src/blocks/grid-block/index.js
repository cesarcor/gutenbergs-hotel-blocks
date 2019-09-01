const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('gutenbergs-hotel-blocks/grid-block', {
    title: __('Grid Block', 'gutenbergs-hotel-blocks'),
    description: __('Display post types in a grid', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit: function(){
        return <p></p>;
    },
    save: function(){
        return <p></p>;
    }
});