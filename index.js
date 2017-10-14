function reqListener() {
    document.getElementById('quoteblock').innerHTML = this.response[0]['content'];
    document.getElementById('author').innerHTML = textauthor = this.response[0]['title'];
    document.getElementById('tweet').innerHTML = "tweet this";
    var divit = document.createElement("div");
    divit.innerHTML = this.response[0]['content'];
    texto = divit.textContent;
}
var texto,textauthor;
var quoteReq = new XMLHttpRequest();
quoteReq.onload = reqListener;
quoteReq.open("GET", "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1");
quoteReq.send();
quoteReq.responseType = "json";

function tweetThis() {
    window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(texto)+"   -"+textauthor);
}

function showAttrib() {
    document.getElementById('attribution').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+'quote API by quotesondesign.com';
}

