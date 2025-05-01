
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('mainVideo');
  
  const playVideo = () => {
    const promise = video.play();
    
 
  };
  
  
  playVideo();
  
  document.body.addEventListener('click', function firstTouch() {
    playVideo();
    document.body.removeEventListener('click', firstTouch);
  }, { once: true });
});


function adaptLayout() {
  const content = document.querySelector('.content');
  const h1 = content.querySelector('h1');
  const isMobileLayout = window.innerWidth < 1420;

  if (isMobileLayout) {
    if (h1.querySelectorAll('.line').length === 6) return;
    
    h1.innerHTML = `
      <span class="line">
        <span class="word">We're</span>
        <span class="word">here</span>
        <span class='word with-video'></span>
      </span>
      <span class="line">
        <span class="word">to</span>
        <span class='word with-video'></span>
        <span class="word">make</span>
      </span>
      <span class="line">
        <span class='word with-video'></span>
        <span class="word">healthy</span>
        <span class="word">living</span>
      </span>
      <span class="line">
        <span class="word">effortless,</span>
        <span class="word">so</span>
        <span class="word">you</span>
      </span>
      <span class="line">
        <span class="word">can</span>
        <span class='word with-video'></span>
        <span class="word">live</span>
        <span class="word">longer</span>
      </span>
      <span class="line">
        <span class="word">and</span>
        <span class="word">happier</span>
        <span class='word with-video'></span>
      </span>
    `;
  } else {
    if (h1.querySelectorAll('.line').length === 4) return;
    
    h1.innerHTML = `
      <span class="line">
        <span class="word">We're</span>
        <span class="word">here</span>
        <span class="word">to</span>
        <span class='word with-video'></span>
        <span class="word">make</span>
      </span>
      <span class="line">
        <span class="word">healthy</span>
        <span class='word with-video'></span>
        <span class="word">living</span>
        <span class="word">effortless,</span>
      </span>
      <span class="line">
        <span class="word">so</span>
        <span class="word">you</span>
        <span class="word">can</span>
        <span class='word with-video'></span>
        <span class="word">live</span>
        <span class="word">longer</span>
      </span>
      <span class="line">
        <span class="word">and</span>
        <span class="word">happier</span>
        <span class='word with-video'></span>
      </span>
    `;
  }

}


let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(adaptLayout, 0); 
});

document.addEventListener('DOMContentLoaded', () => {
  adaptLayout();
});