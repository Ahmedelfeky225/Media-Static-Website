// ---> LIGHT IMAGE GALLARY <--- //
document.addEventListener("DOMContentLoaded", function () {
  const imagesTab = document.querySelector("#pills-images-tab");
  if (imagesTab) {
    imagesTab.addEventListener("shown.bs.tab", function () {
      const gallery = document.querySelector(".contain-img");
      if (gallery) {
        // تدمير الـ instance القديمة لو موجودة عشان نضمن إعادة التهيئة
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
          mode: "lg-slide", // تغيير نوع الـ slider لـ slide
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

            const commentCountElement = document.querySelector(
              `#${collapseId} .icon-group:nth-child(2) .number`
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

if (document.querySelector(".overlay")) {
  document
    .querySelector(".overlay")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      document.querySelector(".overlay").classList.remove("active");
    });
}
