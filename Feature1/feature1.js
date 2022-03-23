var albumBucketName = 'aslsurveybucket';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:443291c0-1cbe-48ca-bbc4-e55f88789dd4',
});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

// A utility function to create HTML.
function getHtml(template) {
  return template.join('\n');
}

// Show the videos in the website
function listVideos() {
  var albumVideosKey = encodeURIComponent('feature1Videos') + '/';
  s3.listObjects({Prefix: albumVideosKey}, function(err, data) {
    if (err) {
      return alert('There was an error viewing your album: ' + err.message);
    }
    // 'this' references the AWS.Request instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + '/';

    var numVideos = 0;
    var videos = data.Contents.map(function(video) {
      var videoKey = video.Key;
      if (videoKey != albumVideosKey) {
        var videoUrl = bucketUrl + encodeURIComponent(videoKey);
        numVideos = numVideos + 1;
        if (numVideos === 2) {
          return getHtml([
            '<span>',
              '<div>',
                '<br/>',
                '<video width="320" height="240" onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;" controls>',
                  '<source src="' + videoUrl + '" type="video/mp4">',
                '</video>',
              '</div>',
            '</span>',
          ]);
        }
        else {
          return getHtml([
            '<span>',
              '<div>',
                '<br/>',
                '<video width="320" height="240" controls>',
                  '<source src="' + videoUrl + '" type="video/mp4">',
                '</video>',
              '</div>',
            '</span>',
          ]);
        }
      }
    });

    var htmlTemplate = [
      '<div>',
        getHtml(videos),
      '</div>',
    ]
    document.getElementById('viewer').innerHTML = getHtml(htmlTemplate);
    document.getElementsByTagName('img')[0].setAttribute('style', 'display:none;');
  });
}