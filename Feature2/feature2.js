// A utility function to create HTML.
function getHtml(template) {
  return template.join('\n');
}

function displayVideo(iconSpan) {
  iconSpan.style.backgroundImage="url(" + 'https://aslsurveybucket.s3.amazonaws.com/feature2/signvideo.gif' + ")";
}

function removeVideo(iconSpan) {
  iconSpan.style.backgroundImage="url(" + 'https://aslsurveybucket.s3.amazonaws.com/feature2/icon.png' + ")";
}

// Show the 3 icons in the website
function listIcons() {
  // List first icon
  var icons = '';
  var firstIcon = getHtml([
    '<span class="icon" id="firstIcon" onmouseover="displayVideo(this);" onmouseout="removeVideo(this);">',
    '</span>',
  ]);
  icons = icons + firstIcon;

  var secondIcon = getHtml([
    '<span class="icon" id="secondIcon" href="#" data-toggle="tooltip" data-placement="top" title="tooltip">',
    '</span>',
  ]);
  icons = icons + secondIcon;

  var thirdIcon = getHtml([
    '<span class="icon" id="thirdIcon" animationend="displayVideo(this);" onmouseout="removeVideo(this);">',
    '</span>',
  ]);
  icons = icons + thirdIcon;

  var fourthIcon = getHtml([
    '<div class="flip-card">',
    '<div class="flip-card-inner">',
    '<div class="flip-card-front">',
    '<img src="https://aslsurveybucket.s3.amazonaws.com/feature2/icon.png" alt="Avatar" style="width:150px;height:150px;">',
    '</div>',
    '<div class="flip-card-back">',
    '<img src="https://aslsurveybucket.s3.amazonaws.com/feature2/signvideo.gif" alt="Avatar" style="width:150px;height:150px;border-radius:50%;">',
    '</div>',
    '</div>',
    '</div>',
  ]);
  icons = icons + fourthIcon;

  var htmlTemplate = [
    '<div class="container">',
      icons,
    '</div>',
  ]

  document.getElementById('viewer').innerHTML = getHtml(htmlTemplate);

  const element = document.getElementById("thirdIcon");
  element.addEventListener("animationend", () => {
    element.style.backgroundImage="url(" + 'https://aslsurveybucket.s3.amazonaws.com/feature2/signvideo.gif' + ")";
  }, {});
}