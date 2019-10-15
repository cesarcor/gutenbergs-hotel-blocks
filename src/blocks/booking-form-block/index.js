import "./styles.editor.scss";
import "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType('gutenberg-hotel-blocks/booking-form', {
    title: __('Booking Form', 'gutenbergs-hotel-blocks'),
    description: __('Booking form', 'gutenbergs-hotel-blocks'),
    category: 'gh-blocks',
    edit,
    save: () => {

    }

});
