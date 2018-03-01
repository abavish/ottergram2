var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var PREVIOUS_BUTTON = "[name=\"previousButton\"]";
var NEXT_BUTTON = "[name=\"nextButton\"]";

var btnPrevious = document.querySelector(PREVIOUS_BUTTON);
var btnNext = document.querySelector(NEXT_BUTTON);

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    setDetailImageId(thumb.getAttribute("data-image-id"));
    //console.log(thumb.getAttribute('data-image-id'));
  });
}

//function to set ImageID
function setDetailImageId(idVal) {
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("data-image-id", idVal);
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  //prevButtonClickHandler(thumbnails);
}

//click event handler for previous button
btnPrevious.addEventListener("click", function() {
  var thumbnails = getThumbnailsArray();
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var imgId = detailImage.getAttribute("data-image-id");
  if (imgId > 0) {
    var newImgId = +imgId - 1;
    detailImage.setAttribute("data-image-id", newImgId);
    setDetailsFromThumb(thumbnails[newImgId]);
    //console.log(detailImage.getAttribute('data-image-id'));
  }
});

//click event handler for next button
btnNext.addEventListener("click", function() {
  var thumbnails = getThumbnailsArray();
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var imgId = detailImage.getAttribute("data-image-id");
  if (imgId < (thumbnails.length - 1)) {
    var newImgId = +imgId + 1;
    detailImage.setAttribute("data-image-id", newImgId);
    setDetailsFromThumb(thumbnails[newImgId]);
    //console.log(detailImage.getAttribute('data-image-id'));
  }
});

initializeEvents();
