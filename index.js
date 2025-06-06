// ---> LIGHT IMAGE GALLARY <--- //
document.addEventListener("DOMContentLoaded", function () {
  const imagesTab = document.querySelector("#pills-images-tab");
  if (imagesTab) {
    imagesTab.addEventListener("shown.bs.tab", function () {
      const gallery = document.querySelector(".contain-img");
      if (gallery) {
        if (typeof gallery.lightGallery === "function") {
          gallery.lightGallery().destroy(true);
        }
        lightGallery(gallery, {
          selector: ".lg-item",
          download: false,
          thumbnail: true,
          thumbnailWidth: 80,
          thumbnailHeight: 60,
          showThumbByDefault: true,
          zoom: true,
          actualSize: false,
          mode: "lg-slide",
        });
      }
    });
  }
});
// ---> LIGHT IMAGE GALLARY <--- //

// ---> VIDEO GALLARY <--- //
const TvLink = document.getElementById("tv-link");
const overlay = document.querySelector(".overlay");
const overlayBackdrop = document.querySelector(".overlay-backdrop");

if (TvLink) {
  TvLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (overlay) {
      overlay.classList.add("active");
    }
  });
}

if (overlayBackdrop) {
  overlayBackdrop.addEventListener("click", function (event) {
    if (event.target === overlayBackdrop && overlay) {
      overlay.classList.remove("active");
    }
  });
}

if (document.querySelectorAll(".video-thumb")) {
  document.querySelectorAll(".video-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const videoUrl = thumb.getAttribute("data-video");
      const videoFrame = document.getElementById("videoFrame");
      if (videoFrame) {
        videoFrame.src = videoUrl;
        const videoModal = new bootstrap.Modal(
          document.getElementById("videoModal")
        );
        videoModal.show();
      }
    });
  });
}

if (document.getElementById("videoModal")) {
  document
    .getElementById("videoModal")
    .addEventListener("hidden.bs.modal", () => {
      const videoFrame = document.getElementById("videoFrame");
      if (videoFrame) {
        videoFrame.src = "";
      }
    });
}
// ---> VIDEO GALLARY <--- //

// ---> COMMENTS <--- //
if (document.querySelectorAll(".sendComment")) {
  document.querySelectorAll(".sendComment").forEach((button) => {
    button.addEventListener("click", () => {
      const collapseId = button.getAttribute("data-collapse");
      const commentInput = document.querySelector(
        `.commentInput[data-collapse="${collapseId}"]`
      );
      if (commentInput) {
        const commentText = commentInput.value.trim();
        if (commentText) {
          const commentsSection = document.getElementById(
            `commentsSection${collapseId.replace("collapseCard", "")}`
          );
          if (commentsSection) {
            const newComment = document.createElement("div");
            newComment.className = "comment";
            newComment.innerHTML = `
                <div class="head-comment">
                  <img src="./images/Ellipse 88.jpg" alt="" />
                  <span class="name">عمر احمد</span>
                </div>
                <div class="desc-comments">${commentText}</div>
              `;
            commentsSection.appendChild(newComment);

            const accordionItem = button.closest(".accordion-item");
            const commentCountElement = accordionItem.querySelector(
              ".accordion-body .icon-group:nth-child(2) .number"
            );
            if (commentCountElement) {
              let currentCount = parseInt(commentCountElement.textContent) || 0;
              commentCountElement.textContent = currentCount + 1;
            }

            commentInput.value = "";
          }
        }
      }
    });
  });
}
// ---> COMMENTS <--- //

// ---> SCROLL TO NAVIGATION TAB <--- //
if (document.getElementById("detailsButton")) {
  document.getElementById("detailsButton").addEventListener("click", () => {
    const navigationTabs = document.getElementById("navigationTabs");
    if (navigationTabs) {
      navigationTabs.style.display = "block";
      navigationTabs.scrollIntoView({ behavior: "smooth" });
    }
  });
}
// ---> SCROLL TO NAVIGATION TAB <--- //

// LOGOUT

if (document.getElementById("logout")) {
  document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
}

// Popup Message

function togglePopup() {
  const popup = document.getElementById("helpPopup");
  popup.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const popup = document.getElementById("helpPopup");
  const icon = document.querySelector(".exclamation-icon");
  if (!popup.contains(event.target) && !icon.contains(event.target)) {
    popup.classList.remove("show");
  }
});

function toggleComments(commentsId, accordionId) {
  const commentsSection = document.querySelector(
    `#${accordionId} .comments-section`
  );
  const commentsCollapse = document.getElementById(commentsId);
  const accordionItem = document.getElementById(accordionId);
  const navigationTab = document.getElementById(
    `navigationTabs${accordionId.slice(-1)}`
  );

  const bootstrapCollapse = new bootstrap.Collapse(accordionItem, {
    toggle: false,
  });
  bootstrapCollapse.show();

  if (navigationTab.style.display === "block") {
    navigationTab.style.display = "none";
  }

  const commentsBootstrapCollapse = new bootstrap.Collapse(commentsCollapse, {
    toggle: false,
  });
  commentsBootstrapCollapse.show();
  commentsSection.style.display = "block";
}

function showFiles(accordionId, commentsId) {
  const commentsSection = document.querySelector(
    `#${accordionId} .comments-section`
  );
  const commentsCollapse = document.getElementById(commentsId);
  const accordionItem = document.getElementById(accordionId);
  const navigationTab = document.getElementById(
    `navigationTabs${accordionId.slice(-1)}`
  );

  const bootstrapCollapse = new bootstrap.Collapse(accordionItem, {
    toggle: false,
  });
  bootstrapCollapse.show();

  if (commentsSection.style.display !== "none") {
    const commentsBootstrapCollapse = new bootstrap.Collapse(commentsCollapse, {
      toggle: false,
    });
    commentsBootstrapCollapse.hide();
    setTimeout(() => {
      commentsSection.style.display = "none";
    }, 350);
  }

  navigationTab.style.display = "block";
}

// Close Modal in SearchPage.html

function closeModal() {
  const modal = document.getElementById("exampleModal");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  if (bootstrapModal) {
    bootstrapModal.hide();
  }
}

function togglePopup() {
  const popup = document.getElementById("helpPopup");
  popup.classList.toggle("show");
}
