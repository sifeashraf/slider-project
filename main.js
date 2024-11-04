let images = document.querySelectorAll(".image-card");

let theInterval;
let imagenumber = 0;

function intervaltoggle(useraction) {
  if (useraction === undefined) {
    console.log("type here");
    theInterval = setInterval(() => {
      imagenumber++;
      if (imagenumber > images.length - 1) {
        imagenumber = 0;
      }
      images.forEach((element) => {
        element.classList.remove("show");
      });
      images[imagenumber].classList.add("show");
    }, 2000);
  }

  if (useraction === "byuser") {
    images.forEach((element) => {
      element.classList.remove("show");
    });
    images[imagenumber].classList.add("show");
  }
}
intervaltoggle();

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    clearInterval(theInterval);
  });
});

images.forEach((img) => {
  img.addEventListener("mouseleave", () => {
    intervaltoggle();
  });
});

function changeimage(num) {
  imagenumber = num;
  intervaltoggle("byuser");
  clearInterval(theInterval);
}
