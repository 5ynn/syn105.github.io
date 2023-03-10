// set container variable for

let animatedMonster = document.getElementById("animatedMonster");

// let toggle = 0;

// load in animation with lottie syntax

let monster =
bodymovin.loadAnimation({
      container: animatedMonster,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: "https://lottie.host/76b44cb9-938a-45ed-8afe-67fa8bd4e379/uNXeOwfNfK.json"
    });

    // animation for monster


    // excited frames

    animatedMonster.addEventListener("click", function() {
        monster.playSegments([30,70], true);
    });


    // cry frames

    animatedMonster.addEventListener("mouseenter", function() {
        monster.playSegments([105,220], true);
    });


    // shrug

    animatedMonster.addEventListener("mouseleave", function() {
        monster.playSegments([240,300], true);
    });
