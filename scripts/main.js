import { series } from './dataSeries.js';
var seasonsAverage = document.getElementById("average");
var seriesTbody = document.getElementById('series');
var serieCard = document.getElementById("info-serie");
renderSeriesInTable(series);
seasonsAverage.innerHTML = "".concat(getSeasonsAverage(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><strong>".concat(c.id, "</strong></td>\n                           <td><button class=\"link\" style=\"color:blue\" id=\"").concat(c.name, "\">").concat(c.name, "</button></td> \n                           <td>").concat(c.cadena, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function clearCards() {
    while (serieCard.hasChildNodes()) {
        if (serieCard.firstChild != null) {
            serieCard.removeChild(serieCard.firstChild);
        }
    }
}
function renderSerieinCard(name) {
    clearCards();
    var serieClicked = searchSerieByName(name, series);
    serieClicked.forEach(function (c) {
        var trElement = document.createElement("img");
        var att = document.createAttribute("src");
        att.value = c.image;
        trElement.setAttributeNode(att);
        serieCard.appendChild(trElement);
        var trElement2 = document.createElement("div");
        var att2 = document.createAttribute("class");
        att2.value = "card-body";
        trElement2.innerHTML = "<h3 class=\"card-text\">".concat(c.name, "</h3>\n                                <h6 class=\"card-text\">").concat(c.description, "</h6>\n                                <a class=\"card-text\" href=\"").concat(c.link, "\">").concat(c.link, "</h5>");
        serieCard.appendChild(trElement2);
    });
}
function searchSerieByName(nameKey, series1) {
    return nameKey === '' ? series : series1.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    var contador = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return contador = contador + 1; });
    return totalSeasons / contador;
}
var btnShowInfo1 = document.getElementById("Breaking Bad");
var btnShowInfo2 = document.getElementById("Orange Is the New Black");
var btnShowInfo3 = document.getElementById("Game of Thrones");
var btnShowInfo4 = document.getElementById("The Big Bang Theory");
var btnShowInfo5 = document.getElementById("Sherlock");
var btnShowInfo6 = document.getElementById("A Very English Scandal");
var btnShowInfo7 = document.getElementById("The Simpsons");
var btnShowInfo8 = document.getElementById("The Boys");
var btnShowInfo9 = document.getElementById("Lost");
var btnShowInfo10 = document.getElementById("The Walking Dead");
btnShowInfo1.onclick = function () { return renderSerieinCard("Breaking Bad"); };
btnShowInfo2.onclick = function () { return renderSerieinCard("Orange Is the New Black"); };
btnShowInfo3.onclick = function () { return renderSerieinCard("Game of Thrones"); };
btnShowInfo4.onclick = function () { return renderSerieinCard("The Big Bang Theory"); };
btnShowInfo5.onclick = function () { return renderSerieinCard("Sherlock"); };
btnShowInfo6.onclick = function () { return renderSerieinCard("A Very English Scandal"); };
btnShowInfo7.onclick = function () { return renderSerieinCard("The Simpsons"); };
btnShowInfo8.onclick = function () { return renderSerieinCard("The Boys"); };
btnShowInfo9.onclick = function () { return renderSerieinCard("Lost"); };
btnShowInfo10.onclick = function () { return renderSerieinCard("The Walking Dead"); };
