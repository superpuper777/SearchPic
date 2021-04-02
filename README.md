# SearchPic

This web app to search for images using Flickr.

## Details

The app should provide an interface to do a simple search on Flickr. The search results area should provide a list of images with titles; also, there should be a possibility to store any image with arbitrary tags provided by the end user. Please note that search results may be huge, we will need a pagination
The Bookmarks area should list all the saved images with ability to remove any single item. There is no limitation in frameworks except that the app should be built with the latest Angular.
Bookmarks are saved to the browser local storage.

## Application implementation

- The UI is implemented with using a Angular Material UI
- This app is [deployed to Netlify](https://gracious-mayer-b2f8d1.netlify.app/)
- The app monitor user’s activity; if there is no user activity (mouse movements) in search-page,
  in one minute, the app end user session) and display a mask over the user interface.
