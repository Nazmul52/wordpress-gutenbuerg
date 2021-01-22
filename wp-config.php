<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_udemy' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Nazmul@4252' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('FS_METHOD','direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' $1fX~j.h@89#sOWpCEg^b7dJ_B%9Z!(&FaANPLVM1Yb68e&>{-a[-qTQOlSECM2' );
define( 'SECURE_AUTH_KEY',  'se<kPvD6=~,8ywf4iK23FMd`4#o-u6RLbV1,knw}3ZpR )ab-?.oSp!|n>pZ~$hJ' );
define( 'LOGGED_IN_KEY',    'T(LmJa)0VAW{aJ5i-cAJ{oo[RaB#Ffp8,26K_JTCvd4GE[6{)J%02& I)m]NkjI?' );
define( 'NONCE_KEY',        'hrx@{cVRXh.mO##.RSCI[8H/$bO}q>P]t<3gxlzIF+9@^Z]yUBxPTL[6zpmwmJ(G' );
define( 'AUTH_SALT',        '!;%L-OYlQq{g!Vbk vqO@$Z#QHrp{CYxUt,Y i4b0X^Yuv^S0=p_=g)2*]?oa(xR' );
define( 'SECURE_AUTH_SALT', 'Rx1nS+D}G9bm2qS%ly:-,N$Go>!7|;0OM2)muz!k+fo,E)^7Gv)Q?|nq#)3!/@@G' );
define( 'LOGGED_IN_SALT',   'l}r&?jYs;HW5n%&h76iK7Xy.uz_~[S1 ER=8|17c/Q@;]s.QCD<~fmFZ0_Ooa=50' );
define( 'NONCE_SALT',       '|R%nmS9{?0R}_kdDNT/No Ii>lJpec|Oy>Y!FLAVxpNv_2oEZy%OW(_Ltwshy*G{' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'uy_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
