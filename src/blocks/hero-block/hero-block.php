<?php

function gh_hero_block() {

    wp_register_script(
        'hero-block',
        get_template_directory_uri() . '/blocks/hero-block/index.build.js',
        array( 'wp-blocks', 'wp-element' )
    );

    wp_register_style(
      'hero-block',
      get_template_directory_uri() . '/blocks/hero-block/styles/style.css',
      array( 'wp-blocks' )
      // filemtime( get_template_directory_uri() . '/blocks/hero-block/style.css' )
    );

    register_block_type( 'gutenbergs-hotel/hero-block', array(
        'editor_script' => 'hero-block',
        'editor_style' => 'hero-block'
    ) );

}

add_action( 'init', 'gh_hero_block' );
