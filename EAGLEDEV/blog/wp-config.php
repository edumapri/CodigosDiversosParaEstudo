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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'eagled_blog');

/** MySQL database username */
define('DB_USER', 'eagled_blog');

/** MySQL database password */
define('DB_PASSWORD', 'uD2.Zpd8');

/** MySQL hostname */
define('DB_HOST', 'eagled-blog.mysql.uhserver.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'kPvr8jrp85NQC1i0#sNzQIcCelo6r#*zp1^1cbq!H)Dg)Ws)ekePveQYmB%pR!I#');
define('SECURE_AUTH_KEY',  'XLuFT7YA1&OrvNt6vbt(5wsWZIjW)&PzexbgL&^im8TT%5q&#bk0xsMiihCLZh#!');
define('LOGGED_IN_KEY',    'yTWpbEjR7tmea6h3AalxcDY#Fpl)NYlzbs@szXzfSI7%mM#*GMfJjlM!46!CeD3j');
define('NONCE_KEY',        'njO@ytvU2QM@CT9ySXmet028mU3d%K#dr@YFw#DAb#&4qCNrZ@*84mAEpd7OrE%u');
define('AUTH_SALT',        '^VXl&lMehv7eSZ()M5UR1J3dnmPpKMsFU3Flny@^9^HpDxcVHLFnWeqz#VRf(yZK');
define('SECURE_AUTH_SALT', '!k&VEt)KuCtz3*SyyfPuSo@bE12Y0qGg(xF!5pW6(z&oZpXK2)7AKXfLS3DCjUEx');
define('LOGGED_IN_SALT',   '&r1#&pJ2CD^ucwQ#RR#UFShqBg&#Ubg*pOoiL^FNBT^QCk4MVvw!GG^vgtOBj*ac');
define('NONCE_SALT',       'GF@utshiaW4dT5xo)CeM3)KwPPQXXcB0mWySfsp3H*)ElbAB1%Rq6i*r5g8kLAv3');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'apswp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
