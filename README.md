# WebSocket Reverb in Laravel 11 with Nginx

This guide walks you through setting up WebSocket Reverb in a Laravel 11 application using Nginx.

## Step 1: Nginx Configuration

Edit your Nginx configuration file for Laravel:

```bash
sudo nano /etc/nginx/sites-available/laravel
```

## Step 2: Link to sites-enabled

If your Laravel configuration file in sites-available isn't already linked to sites-enabled, create a symbolic link:

```bash
sudo ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/
```
## Step 3: Reload or Restart Nginx

After making changes to your Nginx configuration, reload or restart Nginx to apply the new settings:

```bash
sudo systemctl reload nginx
```

Or 

```bash
sudo systemctl restart nginx
```


## Step 4: Update Environment Variables

Make sure to include the following environment variables in your .env file:

```env
REVERB_HOST="example.com"
REVERB_PORT=443
REVERB_SCHEME=https
````

## Step 5: Update echo.js

Ensure that echo.js is correctly configured. The file is located at:

```path
resources/js/echo.js
```

## Step 6: Bootstrap Configuration

Ensure that Echo is imported in your bootstrap.js file, located at:
```path
resources/js/bootstrap.js
```

Add the following code:

```js
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allow your team to quickly build robust real-time web applications.
 */

import './echo';

```

Also, ensure that your app.js file is properly set up. The file is located at:

```path
resources/js/app.js
```
Add the following code:

```js
import "./bootstrap";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

```

## Step 7: Reverb Configuration

Finally, configure Reverb by setting up the reverb.php file in your config directory:
```path
config/reverb.php
```











