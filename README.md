# WebSocket-Reverb-in-Laravel-11-with-Nginx

- Step 1: Nginx Configuration (laravel) file path etc/nginx/sites-available/laravel
- Step 2: Link to sites-enabled (If your laravel configuration in sites-available isn't already linked to sites-enabled, you can create a symbolic link like this): sudo ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/
- Step 3: After making your changes, reload or restart Nginx to apply the new configuration: sudo systemctl reload nginx  or sudo systemctl restart nginx
- Step 4: Make sure include these: REVERB_HOST="example.com" REVERB_PORT=443  REVERB_SCHEME=https
- Step 5: Path resources/js/echo.js
- Step 6: Make sure echo is import on path resources/js/bootstrap.js
  
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allow your team to quickly build robust real-time web applications.
 */

import './echo';

...........

path resources/js/app.js

import "./bootstrap";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();


