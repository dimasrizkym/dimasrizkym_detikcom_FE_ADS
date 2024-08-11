const imageUpload = document.getElementById("imageUpload");
const uploadLabel = document.getElementById("uploadLabel");

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      uploadLabel.style.backgroundImage = `url(${this.result})`;
      uploadLabel.classList.add("has-image");
    });

    reader.readAsDataURL(file);
  }
});
