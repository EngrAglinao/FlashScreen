function bringInIntro() {
  anime
    .timeline({
      easing: "easeOutSine"
    })
    .add({
      targets: ".intro",
      translateX: ["-100%"]
    })
    .add({
      targets: "#welcome path , #welcome-android path",
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000
    })
    .add({
      targets: "#welcome #fill, #welcome-android #fill",
      opacity: [0 , 1],
      duration: 1000,

    })
    .add({
      targets: "#desc path:nth-child(1)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(2)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(3)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(4)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(5)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(6)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(7)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(8)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(9)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(10)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(11)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(12)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(13)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(14)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(15)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(16)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(17)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(18)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(19)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(20)",
      opacity: [0 , 1],
      duration: 100
    })
    .add({
      targets: "#desc path:nth-child(21)",
      opacity: [0 , 1],
      duration: 100
    });

}