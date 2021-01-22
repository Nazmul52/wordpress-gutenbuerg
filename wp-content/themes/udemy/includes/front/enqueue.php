<?php

function ju_enqueue(){
    $ver  =   JU_DEV_MODE ? time() : false;

    wp_register_style(
        'ju_google_fonts',
         'https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i');
    wp_register_style(
        'ju_bootstrap',
          get_theme_file_uri('/assets/css/bootstrap.css'),
          [],
          $ver
        );
    wp_register_style(
        'ju_style',
          get_theme_file_uri('/assets/css/style.css'),
          [],
          $ver
        );
    wp_register_style(
        'ju_dark',
         get_theme_file_uri('/assets/css/dark.css'),
         [],
         $ver
        );
    wp_register_style(
        'ju_font_icons',
         get_theme_file_uri('/assets/css/font-icons.css'),
         [],
         $ver
         );
    wp_register_style(
        'ju_animate',
         get_theme_file_uri('/assets/css/animate.css'),
        [],
        $ver
    );
    wp_register_style(
        'ju_magnific_popup', 
        get_theme_file_uri('/assets/css/magnific-popup.css'),
        [],
        $ver
    );
    wp_register_style(
        'ju_responsive',
         get_theme_file_uri('/assets/css/responsive.css'),
         [],
         $ver
        );
    wp_register_style(
        'ju_custom',
         get_theme_file_uri('/assets/css/custom.css'),
         [],
         $ver
        );

    wp_enqueue_style('ju_google_fonts');
    wp_enqueue_style('ju_bootstrap');
    wp_enqueue_style('ju_style');
    wp_enqueue_style('ju_dark');
    wp_enqueue_style('ju_font_icons');
    wp_enqueue_style('ju_animate');
    wp_enqueue_style('ju_magnific_popup');
    wp_enqueue_style('ju_responsive');
    wp_enqueue_style('ju_custom');

    wp_register_script('ju_plugins', get_theme_file_uri('/assets/js/plugins.js'), [], false, true);
    wp_register_script('ju_functions', get_theme_file_uri('/assets/js/functions.js'), [], false, true);

    wp_enqueue_script('jquery');
    wp_enqueue_script('ju_plugins');
    wp_enqueue_script('ju_functions');


}