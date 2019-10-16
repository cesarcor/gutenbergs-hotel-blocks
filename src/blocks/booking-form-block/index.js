import './styles.editor.scss';
import edit from './edit';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('gutenbergs-hotel-blocks/booking-form', {
    title: __('Booking Form', 'gutenbergs-hotel-blocks'),
    description: __('Booking form', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit,
    save: () => {
        return(
            <></>
        )
    }

});
