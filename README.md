# Progressive Web App (PWA)

This project demonstrates how to create a Progressive Web App (PWA) using HTML, JavaScript, and Service Workers. The PWA displays a set of artist cards and incorporates notifications. 

## File Structure
```
pwa/
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── splash/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── artists.js
│   ├── notifications.js
│   └── service-worker.js
│
├── index.html
├── manifest.json
└── lighthouse-results
```

## Features
- **Service Worker**: Registers a service worker to handle caching, enabling offline capabilities.
- **Notifications**: Requests user permission for notifications and simulates a notification.
- **PWA Manifest**: Includes a manifest file to define the app's name, icons, and appearance when installed.
- **Caching**: Uses a service worker to cache assets and files, improving loading times and offline functionality.

## Explanation of Key Files

### 1. `index.html`
This is the main HTML file containing the structure of the PWA. It references the necessary CSS, JavaScript files, and the `manifest.json` for defining the PWA's properties. Additionally, it links various apple-touch-icons for iOS devices.

### 2. `manifest.json`
Defines the metadata for the PWA, including:
- `name`: The name of the app.
- `icons`: An array of image objects specifying the app icons for different sizes.
- `start_url`: The URL that loads when the app is launched.
- `display`: Defines the app's display mode (e.g., fullscreen, standalone).

### 3. `service-worker.js`
Handles the caching of files for offline access:
- Listens for the `install` event to cache specified files.
- Listens for the `fetch` event to serve cached files when offline.

### 4. `app.js`
- Calls functions to display artist cards.

### 5. `artists.js`
- Contains an array of artist objects with their names, images, and links.
- A function to dynamically create and display artist cards on the page.

### 6. `notifications.js`
- Manages the notification functionality.
- Checks if the Notification API is available, requests permission, and triggers a simulated notification.

## How to Run the PWA
1. Clone the repository to your local machine.
2. Open the `index.html` file in a browser.
3. The service worker will automatically register, enabling caching and offline support.
4. If your browser supports notifications, it will request permission to send notifications.
5. Once permission is granted, a test notification will be simulated.

## Implemented PWA Features

### Service Worker
The service worker is registered in `service-worker.js` and is responsible for:
- **Caching**: Caching essential files to make the PWA available offline.
- **Fetch Handling**: Intercepting network requests to serve cached content when offline.

### Notifications
In `notifications.js`:
- Requests the user's permission for notifications.
- If granted, simulates a notification after a 3-second delay.

### Manifest File
The `manifest.json` provides essential information about the PWA, such as:
- App name
- Icons for different device resolutions
- Display settings (standalone mode)

## Testing
To test the PWA:
1. **Permissions**: Accept the notification permissions when prompted.
2. **Simulated Notification**: A notification will appear 2 seconds after permission is granted.
3. **Offline Mode**: Open Developer Tools, go to the "Network" tab, and enable "Offline" mode to test the app's offline capabilities.

## Medium Link
For a detailed explanation and additional insights, you can read the full blog post on Medium: [placeholder]
