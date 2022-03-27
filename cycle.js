window.onload = rotate;
var theAd = 0;
var adImages = new 
Array("superhero1.png","superhero2.png","superhero3.png", "superhero4.png", "superhero5.png", "superhero6.png"
);
function rotate() {
theAd++;
if (theAd == adImages.length) {
theAd = 0;
}
document.getElementById("adBanner").src = adImages[theAd];
setTimeout(rotate, 3 * 1000);
}