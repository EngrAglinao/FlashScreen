function bringInIntro() {
  anime
    .timeline({
      easing: "easeOutSine"
    })
    .add({
      targets: ".intro",
      translateX: ["-100%"]
    });
}