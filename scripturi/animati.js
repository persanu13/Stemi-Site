anime.set('.titlu', {
    translateX:"-13em",
});

anime({
 targets: '.titlu',
 translateX:0,
 easing: 'easeOutElastic(1, .6)',
 duration:1200,
});

$(document).ready(function(){
    $(".titlu h1").mouseenter(function(){
        element=$(this).context;
        anime({
            targets:element,
            keyframes: [
                {scaleX:0.5,scaleY:1.4,duration: 200,},
                {scaleX:1.2,scaleY:0.8,duration: 170,},
                {scaleX:0.7,scaleY:1.2,duration: 130,},
                {scaleX:1.1,scaleY:0.9,duration: 100,},
                {scaleX:0.9,scaleY:1.1,duration: 70,},
                {scaleX:1,scaleY:1,duration: 40,},
              ],
            easing: 'linear',
          });
    });
    setTimeout(function () {
        anime({
            targets: '.titlu h1',
          
            keyframes: [
                {scaleX:0.5,scaleY:1.4,duration: 200,},
                {scaleX:1.2,scaleY:0.8,duration: 170,},
                {scaleX:0.7,scaleY:1.2,duration: 130,},
                {scaleX:1.1,scaleY:0.9,duration: 100,},
                {scaleX:0.9,scaleY:1.1,duration: 70,},
                {scaleX:1,scaleY:1,duration: 40,},
              ],
            easing: 'linear',
            delay: function(el, i) { return i * 50 },
          });
}, 600);
  });

 