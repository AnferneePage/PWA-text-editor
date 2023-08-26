# Text Editor Web Application

This repository contains a simple text editor web application with the following features:

## Getting Started

1. Clone or download this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.

## Running the Application

1. Run `npm install` to install the necessary dependencies.
2. Run `npm run start` from the root directory to start the application. This will initiate both the backend server and serve the client.
3. Access the application in your web browser by visiting `http://localhost:3009`.
https://jate10-899472ef7db5.herokuapp.com/

## Bundling JavaScript Files

1. To bundle JavaScript files using webpack, run `npm run build`.
2. This will generate a bundled JavaScript file along with an HTML file, service worker, and manifest file.

## Next-Gen JavaScript

1. The application supports next-gen JavaScript features, ensuring a smooth and error-free experience in the browser.

## IndexedDB Storage

1. Upon opening the text editor, an IndexedDB database storage is immediately created.
2. Content entered in the text editor is automatically saved to IndexedDB when clicking off the DOM window.
3. Reopening the text editor retrieves the content from IndexedDB.

## Install as Desktop App

1. Clicking the "Install" button allows you to download the web application and have it as an icon on your desktop.

## Service Worker and Caching

1. Loading the web application registers a service worker using workbox.
2. Static assets are pre-cached upon loading, ensuring faster subsequent page loads and offline access.

## Deploying to Heroku

1. Proper build scripts are set up for webpack to ensure a successful deployment to Heroku.

Feel free to explore the application and its features. If you have any questions or need further assistance, please refer to the documentation or reach out for support.
