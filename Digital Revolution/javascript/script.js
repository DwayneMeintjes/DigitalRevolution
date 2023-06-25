//SPINNER//
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    setTimeout(function () {
      loader.style.opacity = 0;
      setTimeout(function () {
        loader.style.display = 'none';
      }, 500);
    }, 500);
  });
  //////////////////////

  // SMOOTH SCROLLING NAVIGATION //
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");

      // Scroll back to the top
      if (href === "#")
      {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior : "smooth"});
    }
  });
});
//////

///More Navigation Item///
// Event listener for the More button
document.addEventListener('DOMContentLoaded', function() {
  // More button functionality
  document.getElementById('moreOverlay').style.display = 'none';

  document.querySelector('.nav-more').addEventListener('click', function() {
    document.getElementById('moreOverlay').style.display = 'flex';
  });

  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('moreOverlay').style.display = 'none';
  });

  const moreButton = document.querySelector(".nav-more");
  const closeButton = document.getElementById("closeButton");
  const overlay = document.querySelector(".overlay-container");

  if (moreButton && closeButton && overlay) {
    moreButton.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "flex";
      overlay.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
      overlay.style.display = "none";
      overlay.classList.remove("active");
    });
  } else {
    console.log("More button, close button, or overlay not found");
  }
});


////////////////////////////////////////////////