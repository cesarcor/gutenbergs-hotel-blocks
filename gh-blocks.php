<?php
/**
 * Plugin Name: Gutenberg's Hotel Blocks
 * Plugin URI: https://github.com/cesarcor/gutenbergs-hotel-blocks
 * Description: Gutenberg's Hotel Block, useful blocks for hotel websites
 * Author: Cesar Correchel
 * Author URI: http://github.com/cesarcor
 * Version: 0.1
 *
 * @package gutenberg-hotel-blocks
 */


 if ( ! defined( 'ABSPATH' ) ) {
 	exit;
 }

define('GH_PLUGIN_VERSION', '0.0.1');

define( 'GH_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'GH_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

function gh_enqueue_blocks(){

    wp_register_script(
        'hero-block',
         GH_BLOCKS_URL . 'dist/blocks.build.js',
         array( 'wp-blocks', 'wp-element', 'wp-editor' )
       );

   register_block_type( 'gutenbergs-hotel-blocks/hero-block', array(
      'editor_script' => 'hero-block',
   ) );
}
add_action( 'init', 'gh_enqueue_blocks' );


add_filter('block_categories', function ($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'gh-blocks',
                'title' => __('Gutenberg\'s Hotel', 'gh-blocks'),
            ),
        )
    );
}, 10, 2);
