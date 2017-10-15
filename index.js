function reqListener() {
    document.getElementById('quoteblock').innerHTML = this.response[0]['content'];
    document.getElementById('author').innerHTML = textauthor = this.response[0]['title'];
    var divit = document.createElement("div");
    divit.innerHTML = this.response[0]['content'];
    texto = divit.textContent;
    appendTweet();
}

function appendTweet() {
    document.getElementById('theblock').appendChild(document.createElement("div"));
    document.getElementById('theblock').lastChild.outerHTML = '<div id="tweet" onclick="tweetThis()">tweet this</div>';
}

function tweetThis() {
    window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(texto)+"   -"+textauthor);
}

function showAttrib() {
    document.getElementById('attribution').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+'quote API by quotesondesign.com';
}

var texto,textauthor;
var quoteReq = new XMLHttpRequest();

quoteReq.open("GET", "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1");
quoteReq.send();
quoteReq.responseType = "json";
quoteReq.onload = reqListener;

//window.onload = appendTweet;


