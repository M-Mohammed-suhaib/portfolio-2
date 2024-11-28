// Function to open the image in a modal (80% fullscreen)
function openFullscreen(imageId) {
    var img = document.getElementById(imageId);
    var src = img.src;

    var modal = document.createElement('div');
    modal.classList.add('fullscreen-container');
    modal.onclick = function() {
        modal.remove();  // Close on clicking anywhere
    };

    var fullscreenImage = document.createElement('img');
    fullscreenImage.src = src;
    fullscreenImage.classList.add('fullscreen-image');

    var closeButton = document.createElement('button');
    closeButton.classList.add('fullscreen-close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.remove();
    };

    modal.appendChild(closeButton);
    modal.appendChild(fullscreenImage);
    document.body.appendChild(modal);
}


// Function to show the video when the thumbnail is clicked
function showVideo(videoContainer) {
    const thumbnail = videoContainer.querySelector('.thumbnail');
    const playIcon = videoContainer.querySelector('.play-icon');
    const video = videoContainer.querySelector('video');
    
    // Hide the thumbnail and play icon
    thumbnail.style.display = 'none';
    playIcon.style.display = 'none';

    // Show the video
    video.style.display = 'block';

    // Play the video
    video.play();

    // Add event listeners for when the video is paused or ended
    video.addEventListener('pause', function () {
        resetThumbnailAfterDelay(videoContainer);
    });

    video.addEventListener('ended', function () {
        resetThumbnailAfterDelay(videoContainer);
    });
}

// Function to reset the thumbnail after a delay of 15 seconds when the video is stopped (paused or ended)
function resetThumbnailAfterDelay(videoContainer) {
    const delay = 5000; // 15 seconds delay
    const thumbnail = videoContainer.querySelector('.thumbnail');
    const playIcon = videoContainer.querySelector('.play-icon');
    const video = videoContainer.querySelector('video');
    
    // Wait for 15 seconds before resetting the thumbnail and play icon
    setTimeout(function () {
        // Show the thumbnail and play icon again only if the video is not playing
        if (video.paused || video.ended) {
            thumbnail.style.display = 'block';
            playIcon.style.display = 'block';
            video.style.display = 'none';  // Hide the video
        }
    }, delay);
}
