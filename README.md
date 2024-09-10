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

## Step 4: Set up your sub-domain
Go to your domain registrar, find the DNS configuration, and create a CNAME record with 'ws' as the name and '@' as the value.


## Step 5: Update Environment Variables

Make sure to include the following environment variables in your .env file:

```env
REVERB_HOST=ws.example.com  # This is sub-domain ssl verify
REVERB_PORT=443   # nginx ssl server listen port
REVERB_SCHEME="https"  
REVERB_SERVER_PORT=9000  # proxy_pass port -- You can use any port number (MOST 8080)  -- Just Allow port in Firewall
````


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

Finally, you don't need to configure reverb.php keep it as it is.
```path
config/reverb.php
```

## Step 8: Broadcasting Configuration

Also, you don't need to configure broadcasting.php keep it as it is.
```path
config/broadcasting.php
```

## Step 9: Clear Configuration cache
```path
php artisan config:clear

php artisan config:cache

php artisan optimize:clear

systemctl restart nginx

npm run build

systemctl restart nginx
```


## These step only for cloudpanel 
Sometimes while SSL install to sub-domain occur problem so, 

# Main server block for handling HTTPS requests
 server_name example.com ws.example.com; // try to add sub-domain to solve ssl problem on here

# Backend server handling PHP requests
  server_name example.com ws.example.com; //here too

ONCE SSL INSTALL COMPLETE THEN REMOVE IT.








