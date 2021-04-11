$('[data-fancybox="images"]').fancybox({
  thumbs: {
    autoStart: true
  },
  // Open/close animation type
  // Possible values:
  //   false            - disable
  //   "zoom"           - zoom images from/to thumbnail
  //   "fade"
  //   "zoom-in-out"
  //
  animationEffect: "zoom-in-out",
  // Transition effect between slides
  //
  // Possible values:
  //   false            - disable
  //   "fade'
  //   "slide'
  //   "circular'
  //   "tube'
  //   "zoom-in-out'
  //   "rotate'
  //
  transitionEffect: "tube",
  spinnerTpl: '<div class="fancybox-loading"></div>',
  errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
});