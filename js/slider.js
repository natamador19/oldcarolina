document.addEventListener("DOMContentLoaded", function(e){
    var sliderTrail = document.querySelector('.slidetrail');
    var slideFrames = document.querySelectorAll('.slideframe');
    var toLoad = 0;
    var timeSecs = 3000;
    var currectSlider=0;
    var slides = slideFrames.length;
    var direction=1;
    var timerId = null;
  
    console.log(slides);
    for(var index = 0; index < slideFrames.length; index++){
      var hasSrcSet = false;
      var frame = slideFrames[index].children[0].children;
      for(var srcindex in frame){
        if(!(typeof(frame[srcindex].dataset)==="undefined")){
          if ('srcset' in frame[srcindex].dataset){
              frame[srcindex].srcset = frame[srcindex].dataset.srcset;
              hasSrcSet = true;
          }
          if ('src' in frame[srcindex].dataset) {
              frame[srcindex].src = frame[srcindex].dataset.src;
              hasSrcSet = true;
              frame[srcindex].onload = function (e) {
              toLoad--;
              if (toLoad == 0) {
                startSlider();
              }
            };
          }
        }
      }
      if (hasSrcSet) {
        toLoad ++;
      }
    }
    function startSlider(){
      sliderTrail.style.width = slideFrames.length * 100 + 'vw';
      timerId = setTimeout(setNewSlide, timeSecs);
    }
  
    function setNewSlide(){
      if ((currectSlider + direction) == slides){
        direction = -1;
      }
      if (currectSlider + direction < 0){
        direction = 1;
      }
      currectSlider = currectSlider + direction;
      sliderTrail.style.left = (-100 * currectSlider) + 'vw';
      timerId = setTimeout(setNewSlide, timeSecs);
    }
  });
  