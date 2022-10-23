import { Serie } from './serie.js';

import { series } from './dataSeries.js';

const seasonsAverage: HTMLElement = document.getElementById("average")!;
const seriesTbody: HTMLElement = document.getElementById('series')!;
const serieCard: HTMLElement = document.getElementById("info-serie")!;

renderSeriesInTable(series);
seasonsAverage.innerHTML = `${getSeasonsAverage(series)}`




function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><strong>${c.id}</strong></td>
                           <td><button class="link" style="color:blue" id="${c.name}">${c.name}</button></td> 
                           <td>${c.cadena}</td>
                           <td>${c.seasons}</td>`;
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

function renderSerieinCard(name: string): void {
    clearCards();
    let serieClicked: Serie[] = searchSerieByName(name, series);
    serieClicked.forEach(c => {
        let trElement = document.createElement("img");
        let att = document.createAttribute("src");
        att.value = c.image;
        trElement.setAttributeNode(att);
        serieCard.appendChild(trElement);
        let trElement2 = document.createElement("div");
        let att2 = document.createAttribute("class");
        att2.value = "card-body";
        trElement2.innerHTML = `<h3 class="card-text">${c.name}</h3>
                                <h6 class="card-text">${c.description}</h6>
                                <a class="card-text" href="${c.link}">${c.link}</h5>`;
        serieCard.appendChild(trElement2);
    })
}

function searchSerieByName(nameKey: string, series1: Serie[]) {
    return nameKey === '' ? series : series1.filter( c => 
      c.name.match(nameKey));
  }

function getSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    let contador: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    series.forEach((serie) => contador = contador + 1);
    return totalSeasons/contador;
  }

const btnShowInfo1: HTMLElement = document.getElementById("Breaking Bad")!;
const btnShowInfo2: HTMLElement = document.getElementById("Orange Is the New Black")!;
const btnShowInfo3: HTMLElement = document.getElementById("Game of Thrones")!;
const btnShowInfo4: HTMLElement = document.getElementById("The Big Bang Theory")!;
const btnShowInfo5: HTMLElement = document.getElementById("Sherlock")!;
const btnShowInfo6: HTMLElement = document.getElementById("A Very English Scandal")!;
const btnShowInfo7: HTMLElement = document.getElementById("The Simpsons")!;
const btnShowInfo8: HTMLElement = document.getElementById("The Boys")!;
const btnShowInfo9: HTMLElement = document.getElementById("Lost")!;
const btnShowInfo10: HTMLElement = document.getElementById("The Walking Dead")!;
btnShowInfo1.onclick = () => renderSerieinCard("Breaking Bad");
btnShowInfo2.onclick = () => renderSerieinCard("Orange Is the New Black");
btnShowInfo3.onclick = () => renderSerieinCard("Game of Thrones");
btnShowInfo4.onclick = () => renderSerieinCard("The Big Bang Theory");
btnShowInfo5.onclick = () => renderSerieinCard("Sherlock");
btnShowInfo6.onclick = () => renderSerieinCard("A Very English Scandal");
btnShowInfo7.onclick = () => renderSerieinCard("The Simpsons");
btnShowInfo8.onclick = () => renderSerieinCard("The Boys");
btnShowInfo9.onclick = () => renderSerieinCard("Lost");
btnShowInfo10.onclick = () => renderSerieinCard("The Walking Dead");