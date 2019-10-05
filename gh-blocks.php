<?php
/**
 * Plugin Name: Gutenberg's Hotel Blocks
 * Plugin URI: https://github.com/cesarcor/gutenbergs-hotel-blocks
 * Description: Gutenberg's Hotel Block, useful blocks for hotel websites
 * Author: Cesar Correchel
 * Author URI: http://github.com/cesarcor
 * Version: 0.1
 *
 * @package gutenbergs-hotel-blocks
 */


 if ( ! defined( 'ABSPATH' ) ) {
 	exit;
 }

define( 'GH_PLUGIN_VERSION', '0.0.1' );
define( 'GH_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'GH_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

/**
 * Register blocks
 */
function gh_register_block_type($blockName, $opts = array()){
    register_block_type(
        'gutenbergs-hotel-blocks/'.$blockName,
        array_merge(
            array( 
                'editor_script' => 'gh-block-editor-script',
                'editor_style' => 'gh-blocks-editor-style',
                'script' => 'gh-blocks-script',
                'style' => 'gh-blocks-style'
             ),
        $opts
     )
    );
}

add_action( 'init', 'gh_enqueue_blocks' );
function gh_enqueue_blocks(){

    wp_register_script(
        'gh-block-editor-script',
         GH_BLOCKS_URL . 'dist/editor.js',
         array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-blob' )
    );

    wp_register_script(
        'gh-blocks-script',
         GH_BLOCKS_URL . 'dist/script.js',
         array('jquery')
    );

    wp_register_style(
        'gh-blocks-editor-style',
        GH_BLOCKS_URL . 'dist/editor.css',
        array('wp-edit-blocks')
    );

    wp_register_style(
        'gh-blocks-style',
        GH_BLOCKS_URL . 'dist/style.css'
    );

    gh_register_block_type('hero-block');
    gh_register_block_type('grid-block');
    gh_register_block_type('carousel-block');
    gh_register_block_type('form-block');
    gh_register_block_type('image-showcase-block');
    gh_register_block_type('feature');
    
}


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
