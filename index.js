document.addEventListener("DOMContentLoaded", function () {
  const imagesTab = document.querySelector("#pills-images-tab");
  imagesTab.addEventListener("shown.bs.tab", function () {
    const gallery = document.querySelector(".contain-img");
    if (gallery) {
      lightGallery(gallery, {
        selector: ".lg-item",
        download: false,
        thumbnail: true,
        thumbnailWidth: 80,
        thumbnailHeight: 60,
        showThumbByDefault: true,
        zoom: true,
        actualSize: false,
        onInit: function () {
          console.log("LightGallery initialized");
        },
        onError: function (error) {
          console.log("LightGallery Error:", error);
        },
      });
    } else {
      console.log("Gallery element not found");
    }
  });
});

const gallery = document.getElementById("gallery");
const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
const videoFrame = document.getElementById("videoFrame");

gallery.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("video-thumb")) {
    const videoUrl = target.getAttribute("data-video");
    videoFrame.src = videoUrl + "?autoplay=1";
    videoModal.show();
  }
});

document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", function () {
    videoFrame.src = "";
  });

function openPDF(url) {
  document.getElementById("pdfViewer").src = url;
  document.getElementById("pdfViewerContainer").style.display = "block";
  document
    .getElementById("pdfViewerContainer")
    .scrollIntoView({ behavior: "smooth" });
}

function closePDF() {
  document.getElementById("pdfViewer").src = "";
  document.getElementById("pdfViewerContainer").style.display = "none";
}

const kuwaitTvLink = document.getElementById("kuwait-tv-link");
const overlay = document.querySelector(".overlay");
const overlayBackdrop = document.querySelector(".overlay-backdrop");

kuwaitTvLink.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.add("active");
});

overlayBackdrop.addEventListener("click", function (event) {
  if (event.target === overlayBackdrop) {
    overlay.classList.remove("active");
  }
});

const collapseIds = [
  "#collapseCard1",
  "#collapseCard2",
  "#collapseCard3",
  "#collapseCard4",
  "#collapseComments",
  "#textParagraph",
];

collapseIds.forEach((id) => {
  const collapseElement = document.querySelector(id);
  const button = document.querySelector(`[data-bs-target="${id}"]`);
  const icon = button ? button.querySelector(".icon") : null;

  if (icon) {
    collapseElement.addEventListener("show.bs.collapse", () => {
      icon.style.transform = "rotate(180deg)";
      icon.style.transition = "transform 0.3s ease";
    });

    collapseElement.addEventListener("hide.bs.collapse", () => {
      icon.style.transform = "rotate(0deg)";
    });
  }
});

// Show overlay when clicking "تليفزيون الكويت" link
document.querySelector("#kuwait-tv-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay").classList.add("active");
});

// Handle dropdown menu item clicks for the new dropdown
document.querySelectorAll(".custom-dropdown .dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const section = item.getAttribute("data-section");

    if (section === "kuwait-newspaper") {
      // Show the text-paragraph and card-comments
      const textParagraph = document.querySelector("#textParagraph");
      const textParagraphCollapse = new bootstrap.Collapse(textParagraph, {
        toggle: false,
      });
      textParagraphCollapse.show();

      const cardComments = document.querySelector(".card-comments");
      cardComments.style.display = "block";

      // Change the "عرض التفاصيل" button to "المرفقات"
      const detailsButton = document.querySelector("#detailsButton span");
      detailsButton.textContent = "المرفقات";
    }
  });
});

// Handle "المرفقات" button click to show navigation tab
document.querySelector("#detailsButton").addEventListener("click", () => {
  const detailsButtonText = document.querySelector(
    "#detailsButton span"
  ).textContent;
  if (detailsButtonText === "المرفقات") {
    const navigationTab = document.querySelector(".navigaton-tab");
    if (navigationTab.style.display === "none") {
      navigationTab.style.display = "block";
      const filesTab = new bootstrap.Tab(
        document.querySelector("#pills-files-tab")
      );
      filesTab.show();
    }
  }
});
