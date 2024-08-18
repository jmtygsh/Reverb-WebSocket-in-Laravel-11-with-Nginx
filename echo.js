import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,  // Ensure correct port
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: true,  // Ensure TLS is forced
    enabledTransports: ['ws', 'wss'],  // Allow WebSocket and secure WebSocket
    disableStats: true,  // Optionally disable pusher stats
    path: '/ws',  // Adjust this to match the NGINX config if necessary
});
