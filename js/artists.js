/**
 * Array of artist objects with name, image path, and link.
 * This data will be used to generate artist cards.
 */
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
];

/**
 * Generates and displays artist cards in the container.
 */
export const showArtists = () => {
  // Select the container element where artist cards will be displayed
  const container = document.querySelector('.container');
  
  // Check if container exists
  if (!container) {
    console.error('Container element not found.');
    return;
  }

  let output = ''; // Initialize an empty string to accumulate HTML content

  // Iterate over each artist in the ARTISTS array
  ARTISTS.forEach(({ name, image, link }) => {
    // Generate HTML for each artist card and append to the output string
    output += `
    <div class='card'>
      <img class='card__avatar' src="${image}" alt="${name}" />
      <h1 class='card__title'>${name}</h1>
      <a href="${link}" class='card__link'>Discover ${name}!</a>
    </div>
    `;
  });

  // Set the innerHTML of the container to the generated output
  container.innerHTML = output;
};
