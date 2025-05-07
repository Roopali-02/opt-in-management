function setupChipInput(inputId, containerId) {
  document.getElementById(inputId).addEventListener("keydown", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
      const chipText = this.value.trim();
      const chipsContainer = document.getElementById(containerId);

      const chip = document.createElement("div");
      chip.classList.add("chip");
      chip.style.backgroundColor = "#F0F4FF";
      chip.innerHTML = `${chipText} <button class="close-btn fs-5" onclick="removeChip(this)">×</button>`;

      chipsContainer.appendChild(chip);
      this.value = "";
    }
  });
}

// Function to remove chips
function removeChip(button) {
  const chip = button.parentElement;
  chip.remove();
}

setupChipInput("chip-input-1", "chips-container-1");
setupChipInput("chip-input-2", "chips-container-2");

const configureBtns = document.querySelectorAll(".configureBtn");
const imagesToShow = document.querySelectorAll(".imageToShow");
// Add click event listener to the button
configureBtns.forEach((button, index) => {
  button.addEventListener("click", function () {
    const image = imagesToShow[index]; // Get the corresponding image based on index
    // Toggle visibility of the image
    if (image.style.display === "none") {
      image.style.display = "block"; // Show the image
    } else {
      image.style.display = "none"; // Hide the image again
    }
  });
});

function getModalContent(content, imagePath) {
  switch (content) {
    case 'content1':
      return `
       <div class="d-flex flex-column flex-md-row justify-content-start align-items-start gap-4">
  <div style="flex: 1;">
    <div>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
      <label class="form-check-label" for="radioDefault1">
        Pre-approved template message
      </label>
    </div>
    <div class='mt-2'>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
      <label class="form-check-label" for="radioDefault2">
        Regular message
      </label>
    </div>
    <p class='my-2'>Type</p>
    <div class='d-flex flex-wrap flex-md-unwrap'>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
  <label class="form-check-label" for="inlineRadio1">Text</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">Image</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">Video</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4">
  <label class="form-check-label" for="inlineRadio3">Document</label>
</div>
</div>

<div class="mt-2">
  <label for="exampleFormControlTextarea1" class="form-label">Message Body</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>

  </div>

  <div style="flex: 1;">
    <img src="${imagePath}" class="img-fluid mb-2" alt="Settings" />
  </div>
</div>
        
      `;
    case 'content2':
      return `
        <div class="d-flex flex-column flex-md-row justify-content-start align-items-start gap-4">
  <div style="flex: 1;">
    <div>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" checked>
      <label class="form-check-label" for="radioDefault1">
        Pre-approved template message
      </label>
    </div>
    <div class='mt-2'>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2">
      <label class="form-check-label" for="radioDefault2">
        Regular message
      </label>
    </div>
    <p class='my-2'>Template Name</p>
    <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>
<p class='my-2 upload'>Upload Media File</p>
<p class='file-info'>Suppported file type : <span class='text-black'> .png or .jpeg</span></p>
<p class='file-info'>Maximum file type : <span class='text-black'> 5 MB</span></p>
<button class="btn btn-primary w-100 w-sm-auto">
  Upload From Media Library
</button>

<div class="divider-with-text">
  <hr class="divider">
  <span class="or-text">OR</span>
  <hr class="divider">
</div>

<p class='my-2 upload'>Media URL</p>
<input class="form-control" type="text" value="https://unsplash.com/photos/" aria-label="readonly input example" readonly>
<button class="btn btn-outline-info">
  Add variable
</button>

<p class='upload my-2'>Values</p>
<div class='row'>
<div class='col-12 col-md-6'>
<p>Variable Name</p>
<input class="form-control" type="text" placeholder="1" aria-label="Disabled input example" disabled>
</div>
<div class='col-12 col-md-6'>
<p>Value</p>
<input class="form-control" type="text" value="Zendaya" aria-label="Zendaya" readonly>
</div>
</div>
<div class='row mt-2'>
<div class='col-12 col-md-6'>
<p>Variable Name</p>
<input class="form-control" type="text" placeholder="2" aria-label="Disabled input example" disabled>
</div>
<div class='col-12 col-md-6'>
<p>Value</p>
<input class="form-control" type="text" value="Holland" aria-label="Holland" readonly>
</div>
</div>
  </div>

  <div style="flex: 1;">
    <img src="${imagePath}" class="img-fluid mb-2" alt="Settings" />
  </div>
</div>
        
      `;
    case 'content3':
      return `
        <div class="d-flex flex-column flex-md-row justify-content-start align-items-start gap-4">
  <div style="flex: 1;">
    <div>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
      <label class="form-check-label" for="radioDefault1">
        Pre-approved template message
      </label>
    </div>
    <div class='mt-2'>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
      <label class="form-check-label" for="radioDefault2">
        Regular message
      </label>
    </div>
    <p class='my-2'>Type</p>
    <div class='d-flex flex-wrap flex-md-unwrap'>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">Text</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked>
  <label class="form-check-label" for="inlineRadio2">Image</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">Video</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4">
  <label class="form-check-label" for="inlineRadio3">Document</label>
</div>
</div>
<p class='my-2 upload'>Upload Media File</p>
<p class='file-info'>Suppported file type : <span class='text-black'> .png or .jpeg</span></p>
<p class='file-info'>Maximum file type : <span class='text-black'> 5 MB</span></p>
<button class="btn btn-primary w-100 w-sm-auto">
  Upload From Media Library
</button>

<div class="divider-with-text">
  <hr class="divider">
  <span class="or-text">OR</span>
  <hr class="divider">
</div>

<p class='my-2 upload'>Media URL</p>
<input class="form-control" type="text" value="https://unsplash.com/photos/" aria-label="readonly input example" readonly>
<button class="btn btn-outline-info">
  Add variable
</button>

<div class="mt-2">
  <label for="exampleFormControlTextarea1" class="form-label">Message Body</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>

  </div>

  <div style="flex: 1;">
    <img src="${imagePath}" class="img-fluid mb-2" alt="Settings" />
  </div>
</div>
      `;
    case 'content4':
      return `
        <div class="d-flex flex-column flex-md-row justify-content-start align-items-start gap-4">
         <div style="flex: 1;">
         <div>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
      <label class="form-check-label" for="radioDefault1">
        Pre-approved template message
      </label>
    </div>
    <div class='mt-2'>
      <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
      <label class="form-check-label" for="radioDefault2">
        Regular message
      </label>
    </div>
 <p class='my-2'>Type</p>
    <div class='d-flex flex-wrap flex-md-unwrap'>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">Text</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">Image</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">Video</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4" checked>
  <label class="form-check-label" for="inlineRadio3">Document</label>
</div>
</div>
<p class='my-2 upload'>Upload Media File</p>
<p class='file-info'>Suppported file type : <span class='text-black'> .png or .jpeg</span></p>
<p class='file-info'>Maximum file type : <span class='text-black'> 5 MB</span></p>
<button class="btn btn-primary w-100 w-sm-auto">
  Upload From Media Library
</button>

<div class="divider-with-text">
  <hr class="divider">
  <span class="or-text">OR</span>
  <hr class="divider">
</div>

<p class='my-2 upload'>Media URL</p>
<input class="form-control" type="text" value="https://unsplash.com/photos/" aria-label="readonly input example" readonly>
<button class="btn btn-outline-info">
  Add variable
</button>
<div class="mt-2">
  <label for="exampleFormControlTextarea1" class="form-label">Message Body</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
          </div>
          <div style="flex: 1;">
    <img src="${imagePath}" class="img-fluid mb-2" alt="Settings" />
  </div>
        </div>
       
      `;
    default:
      return `<p>Unknown modal type</p>`;
  }
}


function showModal(content, imagePath) {
  document.getElementById('modalBody').innerHTML = getModalContent(content, imagePath);
  const modal = new bootstrap.Modal(document.getElementById('configModal'));
  modal.show();
}