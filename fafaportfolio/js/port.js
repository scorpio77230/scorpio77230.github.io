$('[data-fancybox="images"]').fancybox({
  buttons: ["share", "zoom", "fullScreen", "close"],
  image: {
    preload: true,
  },
  thumbs: {
    autoStart: true,
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

  mobile: {
    preventCaptionOverlap: false,
    idleTime: false,
    thumbs: {
      autoStart: false,
    },
    clickContent: function (current, event) {
      return current.type === "image" ? "toggleControls" : false;
    },
    clickSlide: function (current, event) {
      return current.type === "image" ? "toggleControls" : "close";
    },
    dblclickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },
    dblclickSlide: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },
  },
});
