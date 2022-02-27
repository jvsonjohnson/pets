function animateSlides() {
  controller = new ScrollMagic.Controller();
  const slide = document.querySelectorAll(".slide");
  const slide2 = document.querySelectorAll(".slide2");

  const tl = gsap.timeline({});

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

  const pagetl = gsap.timeline({
    defaults: { duration: 1 },
  });
  pagetl.fromTo(".fade", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 });

  pageScene = new ScrollMagic.Scene({
    triggerElement: slide2,
    triggerHook: 0.5,
  })
    .setTween(pagetl)
    // .addIndicators({
    //   colorStart: "black",
    //   colorTrigger: "black",
    //   name: "slide",
    // })
    .addTo(controller);
}

animateSlides();
