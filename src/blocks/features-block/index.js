import './styles.editor.scss';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('gutenbergs-hotel-blocks/features-block', {
    title: __('Features Block', 'gutenbergs-hotel-blocks'),
    description: __('Features', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit: ({ className }) => {
      return(<div className = {className}>This the features block</div>);
    },
    save: () => {
        return(<div>This the features block</div>);
    }
});