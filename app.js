controller = new ScrollMagic.Controller();

let tl = gsap.timeline({});

// animations for scene
tl.fromTo(
  ".main-page",
  { clipPath: "circle(3%)" },
  { clipPath: "circle(80%)", duration: 3 }
);

tl.fromTo(
  ".title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".sub-title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
  "-=1"
);

const slide = document.querySelectorAll(".main-page");

slideScene = new ScrollMagic.Scene({
  triggerElement: slide, // we want to trigger this on every slide
  triggerHook: 0.6,
  reverse: false, // stops animations from running  over again
})
  .setTween(tl) // adds the gsap animations we made to scroll magic
  // .addIndicators({
  //   colorStart: "white",
  //   colorTrigger: "white",
  //   name: "slide",
  // })
  .addTo(controller);
