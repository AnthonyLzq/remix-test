const particlesConfig = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    line_linked: {
      enable: true,
      opacity: 0.07
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 1,
      straight: false
    },
    size: {
      value: 1
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.6
      }
    }
  },
  retina_detect: true
} as const

export { particlesConfig }
