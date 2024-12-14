document.addEventListener('DOMContentLoaded', function () {
  const slider = new KeenSlider(".keen-slider", {
    loop: true,
    slides: { perView: 1 },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 1 }
      }
    },
    controls: true,
    renderMode: "custom", // Custom render mode for manual fade effect
  }, [
    (slider) => {
      let timeout;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          slider.next();
        }, 4000);
      }

      function updateFade() {
        slider.slides.forEach((slide, idx) => {
          const relativePosition = slider.track.details.rel - idx;
          const opacity = relativePosition === 0 ? 1 : 0; // Show active slide, hide others
          const zIndex = relativePosition === 0 ? 2 : 1; // Keep active slide above others
          slide.style.opacity = opacity;
          slide.style.zIndex = zIndex;
          slide.style.transition = "opacity 3s ease"; // Elegant fade effect
        });
      }

      slider.on("created", () => {
        nextTimeout();
        updateFade();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", () => {
        nextTimeout();
        updateFade();
      });
      slider.on("updated", updateFade);
      slider.on("slideChanged", updateFade);
    }
  ]);
});


