<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cl41-a-wordp-zcg');

/** MySQL database username */
define('DB_USER', 'cl41-a-wordp-zcg');

/** MySQL database password */
define('DB_PASSWORD', 'VdyT.gjM9');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         'OjzutX)God09-GVVM+FNS71##b^xzxWagL(U#eB-0-hT_deSBwsVzSDBO-FubOZj');
define('SECURE_AUTH_KEY',  'kcuo1jdP5rri6V/d-5yrt+s^Zmbr!0mWsBG3JTrBR9=CcJ1O^P0rX=m3PLj#9PeJ');
define('LOGGED_IN_KEY',    'U#(Xrzm2gege^d=sRx8al=5jMZ^cpjp4kNr68CMtF05!b+dnYZj99^g(_IY_U/cb');
define('NONCE_KEY',        ')wN7bGPu/IrZef_ZMg4psZVg4+0l#d4_DpbyiOF#eFrun2MIq2b8SJROi^wy-=5M');
define('AUTH_SALT',        'g8LscVbXh!yNSWsm2AAF6VddY#xjB-r6I#y)O2-j9R#^i#Q(L/PH/hqRtWF^8G62');
define('SECURE_AUTH_SALT', ')02Ob=mz2#sSC=ZN_uKATtvu1QvjYg=uSD(Mq#5QDzGOO_9DWsT!ujJxHLYwivb9');
define('LOGGED_IN_SALT',   'HAM75hsDu6Z(zl-gLqK=5nxKhKP/dOdGkR!A9e!sFrshNI=TwB^Jwt)a35ezYnzs');
define('NONCE_SALT',       '-6RN#4-7MoC/m+L4LE9#MIAIRwtA_PZF(2ZYilZ9#HSe1-wOE-HA=7DV27s/voL5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 *  Change this to true to run multiple blogs on this installation.
 *  Then login as admin and go to Tools -> Network
 */
define('WP_ALLOW_MULTISITE', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/* Destination directory for file streaming */
define('WP_TEMP_DIR', ABSPATH . 'wp-content/');

