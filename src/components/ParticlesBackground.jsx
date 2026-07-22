import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: "#000000",
        },

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#facc15",
          },

          links: {
            enable: true,
            color: "#facc15",
            distance: 150,
            opacity: 0.4,
          },

          move: {
            enable: true,
            speed: 1.5,
          },

          size: {
            value: 2,
          },

          opacity: {
            value: 0.6,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            onClick: {
              enable: true,
              mode: "push",
            },
          },

          modes: {
            grab: {
              distance: 180,
            },

            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}