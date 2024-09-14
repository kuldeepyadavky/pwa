// Uncomment this line to debug and check if app.js is loaded
// console.log('app.js loaded');

// Select the container element where artist cards will be displayed
const container = document.querySelector('.container');

// Array of artist objects with name, image path, and link
const ARTISTS = [
  { name: 'Seedhe Maut', image: 'assets/images/seedhe-maut.jpeg', link: '' },
  { name: 'Young Stunners', image: 'assets/images/young-stunners.jpeg', link: '' },
  { name: 'Full Power', image: 'assets/images/full-power.jpeg', link: '' },
  { name: 'The Siege', image: 'assets/images/the-siege.jpeg', link: '' },
  { name: 'Raftaar', image: 'assets/images/raftaar.jpg', link: '' },
  { name: 'Divine', image: 'assets/images/divine.jpeg', link: '' },
  { name: 'Bella', image: 'assets/images/bella.jpeg', link: '' },
  { name: 'Yashraj', image: 'assets/images/yashraj.jpeg', link: '' },
  { name: 'Karma', image: 'assets/images/karma.jpeg', link: '' }
]

// Function to generate and display artist cards
const showArtists = () => {
  let output = ''; // Initialize an empty string to accumulate HTML content
  
  // Iterate over each artist in the ARTISTS array
  ARTISTS.forEach(({ name, image, link }) => {
    // Generate HTML for each artist card and append to the output string
    output += `
    <div class='card'>
      <img class='card__avatar' src=${image} alt='${name}' />
      <h1 class='card__title'>${name}</h1>
      <a href='${link}' class='card__link'>Discover ${name}!</a>
    </div>
    `;
  });

  // Set the innerHTML of the container to the generated output
  container.innerHTML = output;
}

// Add an event listener to execute showArtists function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', showArtists);

// Register the service worker if supported by the browser
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(res => console.log('Service worker registered', res)) // Log success message if registration is successful
      .catch(err => console.error('Service worker not registered', err)) // Log error message if registration fails
  });
}
