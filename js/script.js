// FIXED NAVBAR ON SMALLER SCREENS
$(window).on("load resize", function() {
  if (this.matchMedia("(max-width: 768px)").matches) {
    $("nav").addClass("fixed-top");
  } else {
    $("nav").removeClass("fixed-top");
  }
});

  //DEMO REEL VIDEO PLAY BUTTON
$(document).ready(function() {
  $(".demoPlay").click(function() {
    $("#demoVideo").show();
    $("#demoVideo")[0].play();
    $("#demoVideo").one("play", function() {
      this.currentTime = 0;
    });
    });
  });

  // VIDEO HOVER EFFECTS
  const windowSize = () => {
    const x = window.innerWidth;
    if (x > 992) {
      // PROMOTIONAL VIDEO
      $("#promotionalThumbnail").hover(function() {
        $(this)[0].play();
        $(this).prop('muted', true);
        $(".promotionalPlay").css("opacity", "0");
      },
      function() {
        $(this)[0].pause();
        $(".promotionalPlay").css("opacity", "1");
      });
      // DOCUMENTARY VIDEO
      $("#documentaryThumbnail").hover(function() {
        $(this)[0].play();
        $(this).prop('muted', true);
        $(".documentaryPlay").css("opacity", "0");
      },
      function() {
        $(this)[0].pause();
        $(".documentaryPlay").css("opacity", "1");
      });
      // WEDDING VIDEO
      $("#weddingThumbnail").hover(function() {
        $(this)[0].play();
        $(this).prop('muted', true);
        $(".weddingPlay").css("opacity", "0");
      },
      function() {
        $(this)[0].pause();
        $(".weddingPlay").css("opacity", "1");
      });
      //DRONE VIDEO
      $("#droneThumbnail").hover(function() {
        $(this)[0].play();
        $(this).prop('muted', true);
        $(".dronePlay").css("opacity", "0");
      },
      function() {
        $(this)[0].pause();
        $(".dronePlay").css("opacity", "1");
      });
    } else {
      // PROMOTIONAL
      $("#promotionalThumbnail").hover(function() {
        $(this)[0].pause();
        $(this).prop('muted', true);
        $(".promotionalPlay").css("opacity", "1");
      });
      // DOCUMENTARY
      $("#documentaryThumbnail").hover(function() {
        $(this)[0].pause();
        $(this).prop('muted', true);
        $(".documentaryPlay").css("opacity", "1");
      });
      // WEDDING
      $("#weddingThumbnail").hover(function() {
        $(this)[0].pause();
        $(this).prop('muted', true);
        $(".weddingPlay").css("opacity", "1");
      });
      //DRONE
      $("#droneThumbnail").hover(function() {
        $(this)[0].pause();
        $(this).prop('muted', true);
        $(".dronePlay").css("opacity", "1");
      });
    }
  }
  

  // DEMO REEL FULLSCREEN LISTENER
  document.addEventListener("fullscreenchange", function() {
    if (window.innerHeight == screen.height) {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = false;
    } else {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = true;
      vidDM.pause();
      document.getElementById("demoVideo").style.display = "none";
    }
  });
  document.addEventListener("mozfullscreenchange", function() {
    if (window.innerHeight == screen.height) {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = false;
    } else {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = true;
      vidDM.pause();
      document.getElementById("demoVideo").style.display = "none";
    }
  });
  document.addEventListener("webkitfullscreenchange", function() {
    if (window.innerHeight == screen.height) {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = false;

    } else {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = true;
      vidDM.pause();
      document.getElementById("demoVideo").style.display = "none";
    }
  });
  document.addEventListener("msfullscreenchange", function() {
    if (window.innerHeight == screen.height) {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = false;
      vidDM.play();
    } else {
      let vidDM = document.getElementById('demoVideo');
      vidDM.muted = true;
      vidDM.pause();
      document.getElementById("demoVideo").style.display = "none";
    }
  });

// PROMO, DOC, WEDDING & DRONE FULLSCREEN LISTENER
document.addEventListener("fullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = false;
    vidD.muted = false;
    vidW.muted = false;
    vidDr.muted = false;
  } else {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = true;
    vidD.muted = true;
    vidW.muted = true;
    vidDr.muted = true;
  }
});
document.addEventListener("mozfullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = false;
    vidD.muted = false;
    vidW.muted = false;
    vidDr.muted = false;
  } else {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = true;
    vidD.muted = true;
    vidW.muted = true;
    vidDr.muted = true;
  }
});
document.addEventListener("webkitfullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = false;
    vidD.muted = false;
    vidW.muted = false;
    vidDr.muted = false;
  } else {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = true;
    vidD.muted = true;
    vidW.muted = true;
    vidDr.muted = true;
  }
});
document.addEventListener("msfullscreenchange", function() {
  if (window.innerHeight == screen.height) {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = false;
    vidD.muted = false;
    vidW.muted = false;
    vidDr.muted = false;
  } else {
    let vidP = document.getElementById('promotionalThumbnail');
    let vidD = document.getElementById('documentaryThumbnail');
    let vidW = document.getElementById('weddingThumbnail');
    let vidDr = document.getElementById('droneThumbnail');
    vidP.muted = true;
    vidD.muted = true;
    vidW.muted = true;
    vidDr.muted = true;
  }
});



