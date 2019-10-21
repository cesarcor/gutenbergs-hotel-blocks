import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, InspectorControls } from "@wordpress/editor";
import { PanelBody, RangeControl } from "@wordpress/components";

const attributes = {
  columns: {
    type: 'number',
    default: 3
  }
}

registerBlockType("gutenbergs-hotel-blocks/features", {
  title: __("Features", "gutenbergs-hotel-blocks"),

  description: __("Features", "gutenbergs-hotel-blocks"),

  category: "gh-blocks",

  attributes,

  edit({ className, attributes, setAttributes }) {
    const { columns } = attributes;

    return (
      <div className={ `${className} has-${columns}-columns` }>

        <InspectorControls>
          <PanelBody>
            <RangeControl 
              label={ __("Columns", "gutenbergs-hotel-blocks") }
              value={ columns }
              onChange={(columns) => setAttributes({ columns })}
              min={3}
              max={6}
            />
          </PanelBody>
        </InspectorControls>

        <InnerBlocks
          allowedBlocks={["gutenbergs-hotel-blocks/feature"]}
          template={[
            ["gutenbergs-hotel-blocks/feature"],
            ["gutenbergs-hotel-blocks/feature"],
            ["gutenbergs-hotel-blocks/feature"]
          ]}
        />
      </div>
    );
  },

  save({ attributes }) {
    const { columns } = attributes;

    return (
      <div className={`has-${columns}-columns`}>
        <InnerBlocks.Content />
      </div>
    );
  }
});
