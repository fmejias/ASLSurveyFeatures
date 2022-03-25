// A utility function to create HTML.
function getHtml(template) {
  return template.join('\n');
}

function displayVideo(iconSpan) {
  iconSpan.style.backgroundImage="url(" + 'https://aslsurveybucket.s3.amazonaws.com/feature3/Apple.gif' + ")";
  iconSpan.style.backgroundSize = "cover";
}

function removeVideo(iconSpan) {
  iconSpan.style.backgroundImage="url(" + 'https://aslsurveybucket.s3.amazonaws.com/feature3/Apple.png' + ")";
  iconSpan.style.backgroundSize = "cover";
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
    '<span class="icon" id="secondIcon" href="#" data-toggle="tooltip" title="tooltip">',
    '</span>',
  ]);
  icons = icons + secondIcon;

  var thirdIcon = getHtml([
    '<span class="icon" id="thirdIcon" animationend="displayVideo(this);" onmouseout="removeVideo(this);">',
    '</span>',
  ]);
  icons = icons + thirdIcon;

  var htmlTemplate = [
    '<div class="container">',
      icons,
    '</div>',
  ]

  document.getElementById('viewer').innerHTML = getHtml(htmlTemplate);

  const element = document.getElementById("thirdIcon");
  element.addEventListener("animationend", () => {
    element.style.backgroundImage="url(" + 'https://aslsurveybucket.s3.amazonaws.com/feature3/Apple.gif' + ")";
  }, {});
}