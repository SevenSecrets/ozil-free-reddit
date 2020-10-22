var articles = document.getElementsByTagName("article");

for (i = 0; i < articles.length; i++) {

	var article = articles[i];
	var articleText = article.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
	var postDiv = article.parentNode.parentNode.parentNode.parentNode;

	if (articleText.includes("ozil") || articleText.includes("özil")) {
		console.log(articleText);
		postDiv.style.display = "none";
	}
}