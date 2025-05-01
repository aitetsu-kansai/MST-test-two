document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');
    
    // Ensure video plays smoothly
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });

    // Handle video resize on window changes
    window.addEventListener('resize', function() {
        if (video.paused) {
            video.play().catch(function(error) {
                console.log("Video replay failed:", error);
            });
        }
    });
}); 