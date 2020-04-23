import React from 'react';
import { stat } from 'fs';

type OnlineOfflineState = 'online' | 'offline'

function useOnlineOffline() {
    const [status, setStatus] = React.useState<OnlineOfflineState>(() => {
        return window.navigator.onLine ? 'online' : 'offline';
      });

    React.useEffect(() => {
        function updateOnlineStatus(e: Event) {
            setStatus(e.type ==='online' ? 'online': 'offline');
        }
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        return () => {
            console.log('cleanup effect');
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return status;
}

export function OnlineOffline() {
    const status = useOnlineOffline();
    return <div>You network is {status}</div>
}