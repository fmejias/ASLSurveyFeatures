// A utility function to create HTML.
function getHtml(template) {
  return template.join('\n');
}

// Show the videos in the website
function listVideos() {
  // List first icon
  var icons = '';
  var firstIcon = getHtml([
    '<span>',
      '<div>',
        '<br/>',
        '<video width="320" height="240" onmouseover="this.play()" onmouseout="this.pause();">',
          '<source src="https://aslsurveybucket.s3.amazonaws.com/feature1Videos/Apple.mov" type="video/mp4">',
        '</video>',
      '</div>',
    '</span>',
  ]);         
  icons = icons + firstIcon;

  var secondIcon = getHtml([
    '<span>',
      '<div>',
        '<br/>',
        '<video width="320" height="240" controls>',
          '<source src="https://aslsurveybucket.s3.amazonaws.com/feature1Videos/Apple.mov" type="video/mp4">',
        '</video>',
      '</div>',
    '</span>',
  ]);
  icons = icons + secondIcon;

  var htmlTemplate = [
    '<div class="container">',
      icons,
    '</div>',
  ]

  document.getElementById('viewer').innerHTML = getHtml(htmlTemplate);
}