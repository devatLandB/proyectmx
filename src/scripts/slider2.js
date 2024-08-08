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
        }, 3000);
      }

      slider.on("created", () => {
        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    }
  ]);
});
