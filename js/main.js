AOS.init();

// Select the thumbnail and video elements
const thumbnail = document.querySelector('.hero_thumbnail');
const video = document.getElementById('hero_video');

// Add a click event listener to the thumbnail
thumbnail.addEventListener('click', function() {
  // Hide the thumbnail
  thumbnail.style.display = 'none';

  // Show the video
  video.style.display = 'block';

  // Play the video
  video.play();
});
