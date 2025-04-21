// Import the React library to use React components
import React from 'react';
// Import the Masonry component from 'react-masonry-css' for creating a Masonry layout
import Masonry from 'react-masonry-css';
import './Home.css'
// Define a functional component named ImageMasonryGallery

function Home(){ 
    
    
  // Define breakpoints for responsive columns
  // This object specifies how many columns should be displayed at different screen widths
  const breakpointColumnsObj = {
    default: 4, // 4 columns by default
    1100: 3,   // 3 columns for screens <= 1100px
    700: 2,    // 2 columns for screens <= 700px
    500: 1     // 1 column for screens <= 500px
  };

  // Array of image URLs to be displayed in the Masonry layout
  const images = [
    'https://picsum.photos/400/600',
     // Image with dimensions 400x600
    'https://picsum.photos/600/400', // Image with dimensions 600x400
    'https://picsum.photos/800/500',// Image with dimensions 800x500
    'https://picsum.photos/500/800' ,// Image with dimensions 500x800
    'https://picsum.photos/700/500',
    'https://picsum.photos/500/700',
    'https://picsum.photos/200/100'
  ];

  // Return the JSX for the component
  return (
    <div className="home-container">
    // Use the Masonry component to create a responsive Masonry layout
    <Masonry
      breakpointCols={breakpointColumnsObj} // Pass the breakpoints object to configure columns
      className="my-masonry-grid"          // Add a class name for the Masonry grid container
      columnClassName="my-masonry-grid_column" // Add a class name for each column in the grid
    >
      {/* Map over the images array to render each image */}
      {images.map((image, index) => (
        // Each image is wrapped in a div with a unique key (required by React for lists)
        <div key={index} className="my-masonry-grid_item">
          {/* Render the image with the src attribute pointing to the image URL */}
          <img
            src={image} // Set the image source
            alt={`Image ${index + 1}`} // Add an alt attribute for accessibility
            style={{ width: '100%', display: 'block' }} // Make the image responsive
          />
        </div>
      ))}
    </Masonry>
    </div>
  );
};

// Export the ImageMasonryGallery component as the default export
export default Home;