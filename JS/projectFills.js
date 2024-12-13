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








function showVideo(container) {
    const videoElement = container.querySelector("video");
    const thumbnail = container.querySelector(".thumbnail");
    const playIcon = container.querySelector(".play-icon");
    const videoSource = videoElement.querySelector("source").src;

    // Check if the URL is a YouTube URL
    if (videoSource.includes("youtube.com") || videoSource.includes("youtu.be")) {
        let videoId = "";

        if (videoSource.includes("youtube.com")) {
            const urlParams = new URLSearchParams(new URL(videoSource).search);
            videoId = urlParams.get("v"); // Extract video ID
        } else if (videoSource.includes("youtu.be")) {
            videoId = videoSource.split("/").pop(); // Extract video ID
        }

        if (videoId) {
            // Replace container content with an iframe
            container.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>
                </iframe>`;
        } else {
            alert("Invalid YouTube URL");
        }
    } else if (videoSource.includes("drive.google.com")) {
        // Handle Google Drive video URL
        thumbnail.style.display = "none";
        playIcon.style.display = "none";
        videoElement.style.display = "block";
        videoElement.play();

        // Handle fullscreen and stopping Google Drive videos
        videoElement.onfullscreenchange = function() {
            if (document.fullscreenElement) {
                // Fullscreen is active
                videoElement.style.height = "100vh"; // Adjust height for fullscreen
            } else {
                // Exit fullscreen
                videoElement.style.height = "auto"; // Restore height
            }
        };

        // You can add custom controls for stopping the video if needed:
        const stopButton = document.createElement("button");
        stopButton.textContent = "Stop";
        stopButton.style.position = "absolute";
        stopButton.style.top = "10px";
        stopButton.style.right = "10px";
        stopButton.style.background = "#333";
        stopButton.style.color = "#fff";
        stopButton.style.padding = "10px";
        stopButton.style.border = "none";
        stopButton.style.borderRadius = "5px";
        stopButton.style.cursor = "pointer";
        container.appendChild(stopButton);

        stopButton.onclick = function() {
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.style.display = "none";
            thumbnail.style.display = "block";
            playIcon.style.display = "block";
        };
    } else {
        // Handle regular video playback
        thumbnail.style.display = "none";
        playIcon.style.display = "none";
        videoElement.style.display = "block";
        videoElement.play();
    }
}




