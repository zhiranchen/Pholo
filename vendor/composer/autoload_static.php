<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2bf9ccd22b5be78a350eec27cba2836e
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'Bolandish\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Bolandish\\' => 
        array (
            0 => __DIR__ . '/..' . '/bolandish/instagram-grabber/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2bf9ccd22b5be78a350eec27cba2836e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2bf9ccd22b5be78a350eec27cba2836e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
