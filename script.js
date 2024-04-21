const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const shareButton = document.getElementById("shareButton");
async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url);
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerHTML,
    "tweet window",
    "width=600, height=700"
  );
}
shareButton.addEventListener("click", () => {
  const shareText = "Check out this awesome quote app ❤️🔥!";
  const shareUrl = "https://quote-app-orpin.vercel.app/";
  const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
    shareText
  )}%20${encodeURIComponent(shareUrl)}`;
  window.location.href = whatsappUrl;
});
