// APK download tracking for GA4 — fires 'apk_download' on every .apk link click.
// External file because inline braces break build.py's str.format().
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[href$=".apk"]');
  if (a && typeof gtag === 'function') {
    gtag('event', 'apk_download');
  }
});
