# Vue File Upload with Express Backend

This project demonstrates a basic setup for uploading files using Vue.js with the **Vue File Upload component** and **ImageKit Vue.js SDK**. It has an Express.js backend server. The Vue component allows users to select and upload files to the server, and the server handles the file uploads.


## Prerequisites

Before running this project, ensure you have the following prerequisites installed on your system:

- Node.js and npm or yarn

## Getting Started

Follow the steps below to set up and run the project:

1. Clone this repository:

   ```sh
   git clone https://github.com/ttebify/vuejs-file-upload-demo.git
   ```

2. Navigate to the project directory:

   ```sh
   cd vuejs-file-upload-demo
   ```

3. Install the project dependencies:

   ```sh
   npm install

   # OR

   yarn install
   ```

4. Navigate to the `server` directory:

   ```sh
   cd server
   ```

6. Start the Express backend server:

   ```sh
   node index.js
   ```

7. In a new terminal, start the Vue.js development server:

   ```sh
   npm run dev

   # OR

   yarn dev
   ```

8. Open your web browser and access the Vue app at `http://localhost:<yourport>`. You can upload files and see them displayed on the page.

## Project Structure

- `/`: Vue.js frontend.
- `/server`: Express.js backend for handling file uploads.

## Configuration

- The Vue File Upload component is used for file selection and upload on the client side.
- The Express.js server handles file uploads and stores them in the `/uploads` directory.

## Customization

- You can customize the Vue File Upload component by modifying the Vue component in the `/src` directory.
- Modify the Express.js server in the `/server/index.js` file as needed to handle file uploads, validations, and storage.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are greatly appreciated.
