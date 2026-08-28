// Gabriel Contassot Scroll Animation Engine - Rock Solid GSAP Pinning & Smooth Morph
(function initGabrielScroll() {
  function start() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      setTimeout(start, 50);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var container = document.getElementById("gabriel-scroll-container");
    var previews = container ? container.querySelector(".section-previews") : null;
    if (!container || !previews) {
      setTimeout(start, 100);
      return;
    }

    // Clean any prior ScrollTriggers for Gabriel scroll
    ScrollTrigger.getAll().forEach(function (st) {
      if (st.vars && st.vars.id && st.vars.id.indexOf("gabriel") === 0) {
        st.kill();
      }
    });

    var sections = Array.from(container.querySelectorAll(".gabriel-section"));
    if (!sections.length) return;

    // Pin .section-previews cleanly inside the container
    ScrollTrigger.create({
      id: "gabriel-main-pin",
      trigger: container,
      pin: previews,
      start: "top top",
      end: "bottom bottom",
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    // 1. Image Zoom Animation on each Section
    sections.forEach(function (section, index) {
      var previewNum = index + 1;
      var image = container.querySelector("#preview-" + previewNum + " img");
      if (!image) return;

      var startCondition = index === 0 ? "top 80%" : "bottom bottom";

      gsap.to(image, {
        scrollTrigger: {
          id: "gabriel-img-" + previewNum,
          trigger: section,
          start: startCondition,
          end: function () {
            var viewportHeight = window.innerHeight;
            var sectionBottom = section.offsetTop + section.offsetHeight;
            var additionalDistance = viewportHeight * 0.5;
            var endValue = sectionBottom - viewportHeight + additionalDistance;
            return "+=" + Math.max(200, endValue);
          },
          scrub: 1,
          invalidateOnRefresh: true,
        },
        scale: 2.2,
        ease: "none",
      });
    });

    // 2. Polygon clipPath animations
    function animateClipPath(
      sectionSelector,
      previewSelector,
      startClipPath,
      endClipPath,
      startPos,
      endPos
    ) {
      var section = container.querySelector(sectionSelector);
      var preview = container.querySelector(previewSelector);
      if (!section || !preview) return;

      gsap.fromTo(
        preview,
        { clipPath: startClipPath },
        {
          clipPath: endClipPath,
          ease: "none",
          scrollTrigger: {
            id: "gabriel-clip-" + sectionSelector + "-" + previewSelector,
            trigger: section,
            start: startPos,
            end: endPos,
            scrub: 0.15,
            invalidateOnRefresh: true,
          },
        }
      );
    }

    // First preview reveals as section-1 enters
    animateClipPath(
      "#section-1",
      "#preview-1",
      "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "top 80%",
      "center center"
    );

    var totalSections = sections.length;

    for (var i = 2; i <= totalSections; i++) {
      var currentSection = "#section-" + i;
      var prevPreview = "#preview-" + (i - 1);
      var currentPreview = "#preview-" + i;

      // Close previous preview polygon upwards
      animateClipPath(
        currentSection,
        prevPreview,
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)",
        "top bottom",
        "center center"
      );

      // Open current preview polygon upwards
      if (i < totalSections) {
        animateClipPath(
          currentSection,
          currentPreview,
          "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          "center center",
          "bottom top"
        );
      }
    }

    ScrollTrigger.refresh();
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 400);
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 1200);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(start, 50);
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }

  window.addEventListener("load", function () {
    setTimeout(function () {
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    }, 200);
  });
})();
