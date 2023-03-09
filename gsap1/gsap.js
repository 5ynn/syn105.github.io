// Box Animation

gsap.from(".chucked",{
    duration: 5,
    ease: "elastic",
    rotation: 720,
    x: -500,
    y: -500,
    stagger: 0.5
});

// Text Animation

gsap.from(".headline",{
    duration: 2.5,
    opacity: 0,
    y: 300,
    stagger: 0.3
});
