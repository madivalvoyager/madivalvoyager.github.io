tsParticles.load("home", {
  fps_limit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.1,
        max: 1,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  background: {
    color: "#00000",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "20%",
  },
  detectRetina: true,
});
