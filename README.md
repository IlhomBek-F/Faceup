# Faceup App

## Overview

Faceup is an application that leverages the Unsplash API to provide users with high-quality, royalty-free images for their creative projects. Whether you're a developer, designer, or content creator, this app makes it easy to search for and display stunning images right from Unsplash's extensive library.

## Features

* Search Functionality: Quickly find images by keywords.
* Image Display: View images in various sizes and formats.
* User-Friendly Interface: A clean and intuitive design for a seamless experience.

## Technologies Used

* Frontend: React
* UI library: Ant Design
* API: Unsplash API

## Demo

Check out the live demo of Faceup App: https://statuesque-pony-f6f885.netlify.app/

## Installation

1.  **Clone the repository:**

### git clone https://github.com/IlhomBek-F/facemash.git

2.  **Configure all token key:**
 * In order to use app you need to get a token key from unsplash and a token

 * add VITE_API_KEY and assign your token key // 

 * VITE_API_KEY=your unsplash token key
 
3.  **Install dependencies:**

### npm install

4.  **Start the application:**

### npm start

The app should now be running on http://localhost:3000

## Folder Structure

```
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │      ├── BackgroundLayout
│ │      ├── DownloadSpin
│ │      ├── Header
│ │      ├── ImageColumn
│ │      ├── ImageItem
│ │      ├── ImageLists
│ │      ├── ImagePlaceholders
│ │      ├── NotFoundImage
│ │      ├── Pagination
│ │      ├── ShareImage
│ │      ├── ShowMore
│ │      ├── UpAction
| ├── context
| ├── hooks
| ├── http
| ├── service
| ├── utils
| ├── App.tsx
| ├── index.css
```
