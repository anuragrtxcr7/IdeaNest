# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Overview of the project: -

- It’s a full fledged blog website built in ReactJs with animations, where users can upload any post, image, text and perform CRUD operations according to their need
- It also includes a login authentication service which is specific to users so that the user has their data stored in the database.
- This project utilizes all the major functionalities of core react including Redux and React-Router-DOM and uses Tailwind
CSS and Third-party libraries for formatting, along with Appwrite for authentication and data storage in backend.

# Packages/Dependencies

Here were all the libraries, frameworks and packages I used for creating this project: -

- @reduxjs/toolkit: ^2.2.1
- @tinymce/tinymce-react: ^4.3.2
- antd: ^5.15.4
- appwrite: ^13.0.2
- html-react-parser: ^5.1.8
- react: ^18.2.0
- react-dom: ^18.2.0
- react-hook-form: ^7.51.0
- react-hot-toast: ^2.4.1
- react-icons: ^5.0.1
- react-redux: ^9.1.0
- react-router-dom: ^6.22.2

# Page Load Time

- Page load time measures how long it takes for the contents of a website to show up in the user’s browser. The loading process of a website will consist of multiple milestones, for example starting to show text or displaying a hero image.

- For this website I measured the Page Load time after deploying this website and measured its data from Google’s Page speed insights.
- My First Contentful Paint came out to be 0.7s 
- MY Largest Contentful Paint came out to be 2s
- My Total Blocking time was 0 sec
- My speed index was 1.3 sec

- The page load time of website depends on the Server Response time, download Sizes and Rendering Times.
