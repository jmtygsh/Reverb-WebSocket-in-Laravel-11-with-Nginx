# WebSocket-Reverb-in-Laravel-11-with-Nginx

- Step 1: Nginx Configuration (laravel) file path etc/nginx/sites-available/laravel
- Step 2: Link to sites-enabled (If your laravel configuration in sites-available isn't already linked to sites-enabled, you can create a symbolic link like this): sudo ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/
- Step 3: After making your changes, reload or restart Nginx to apply the new configuration: sudo systemctl reload nginx  or sudo systemctl restart nginx
- Step 4: 
