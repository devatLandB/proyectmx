
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
          }, 4000);
        }

        function updateParallax() {
          slider.slides.forEach((slide, idx) => {
            const textElements = slide.querySelectorAll('.parallax-text');
            const relativePosition = slider.track.details.rel - idx;
            textElements.forEach(text => {
              text.style.transform = `translate3d(${relativePosition * 20}px, 0, 0)`;
            });
          });
        }

        slider.on("created", () => {
          nextTimeout();
          updateParallax();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", () => {
          nextTimeout();
          updateParallax();
        });
        slider.on("updated", updateParallax);
        slider.on("slideChanged", updateParallax);
      }
    ]);
  });
