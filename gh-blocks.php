<?php
/**
 * Plugin Name: Gutenberg's Hotel Blocks
 * Plugin URI: http://github.com/cesarcor
 * Description: Gutenberg's Hotel Block, useful blocks for hotel websites
 * Author: Cesar Correchel
 * Author URI: http://github.com/cesarcor
 * Version: 0.1
 *
 * @package gh-blocks
 */

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
