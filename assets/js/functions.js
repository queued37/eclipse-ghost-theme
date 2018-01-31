// Reading time estimation on post header
function readingTimeEstimation() {
  var txt = document.querySelector(".post-body").textContent;
  var wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

  var readingTimeInMinutes = Math.round(wordCount / 200);
  var readingTimeAsString = readingTimeInMinutes ?
                            readingTimeInMinutes + " min read" :
                            "< 1 min read";
  console.log(readingTimeAsString);
  document.querySelector('.post-reading-time span').innerHTML = readingTimeAsString;
};
document.addEventListener("DOMContentLoaded", readingTimeEstimation);