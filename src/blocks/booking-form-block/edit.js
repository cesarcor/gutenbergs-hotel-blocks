import { Component } from "@wordpress/element";
import { InspectorControls } from "@wordpress/editor";
import { Panel, PanelBody, PanelRow } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

class BookingFormEdit extends Component {
  render() {
    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__("Form Styles", "gutenbergs-hotel-blocks")}
            initialOpen={false}
          >
            <PanelRow>{__("Form Type", "gutenbergs-hotel-blocks")}</PanelRow>
          </PanelBody>

          <PanelBody
            title={__("Fields", "gutenbergs-hotel-blocks")}
            initialOpen={false}
          >
            <PanelRow>
              {__("Field Type", "gutenbergs-hotel-blocks")}
              {__("Label Color", "gutenbergs-hotel-blocks")}
              {__("Field Color", "gutenbergs-hotel-blocks")}
            </PanelRow>
          </PanelBody>

          <PanelBody
            title={__("Submit Button", "gutenbergs-hotel-blocks")}
            initialOpen={false}
          >
            <PanelRow>{__("Button Color", "gutenbergs-hotel-blocks")}</PanelRow>
            <PanelRow>
              {__("Button Radius", "gutenbergs-hotel-blocks")}
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </>
    );
  }
}

export default BookingFormEdit;
