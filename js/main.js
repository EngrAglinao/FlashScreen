window.addEventListener("load", () => {
    document.querySelector("body").classList.remove("loading");
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".home-container .home-wrapper",
        top: ["-100%", 0],
        duration: 2500
      })
      .add({
        targets: ".home-wrapper .great",
        opacity: [0, 1],
        translateY: [40, 0],
        offset: "-=1000"
      })
      .add({
        targets: ".home-wrapper .great",
        opacity: [1, 0],
        translateY: [0, -40],
        complete: anim => {
          document.querySelector(".home-wrapper .great").remove();
        }
      })
      .add({
        targets: ".name h1",
        translateY: [300, 0],
        duration: 2000,
        offset: "-=1000",
        complete: anim => {
          bringInIntro();
        }
      });
  });
  