// js/notifications.js

/**
 * Requests notification permission from the user and returns a boolean indicating whether permission was granted.
 * @returns {Promise<boolean>} - Promise that resolves to true if permission is granted, false otherwise.
 */
 export const requestNotificationPermission = () => {
  return new Promise((resolve, reject) => {
    if ('Notification' in window) {
      // Request notification permission
      Notification.requestPermission().then(permission => {
        console.log('Notification permission status:', permission);

        // Resolve the promise with true if permission is granted, false otherwise
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          resolve(true);
        } else {
          console.error('Notification permission denied.');
          resolve(false);
        }
      }).catch(error => {
        console.error('Notification permission request failed:', error);
        reject(error);
      });
    } else {
      console.error('Notifications are not supported in this browser.');
      resolve(false);
    }
  });
};

/**
 * Sends a test notification if permission was granted.
 */
const triggerTestNotification = () => {
  requestNotificationPermission().then(permissionGranted => {
    if (permissionGranted) {
      // Send a test notification after a delay
      setTimeout(() => {
        console.log('Simulating notification...');
        new Notification('New Drop Alert!', {
          body: 'Seedhe Maut just released a new EP',
          icon: '/assets/icons/icon-128x128.png', // Path to the notification icon
        });
      }, 2000); // 2-second delay
    } else {
      console.error('Notification permission not granted. Test notification will not be sent.');
    }
  }).catch(error => {
    console.error('Error handling notification permission:', error);
  });
};

triggerTestNotification();