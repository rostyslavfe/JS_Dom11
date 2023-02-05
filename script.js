let attetion = alert('Привіт, тут ми разом постараємось зробити спільну сторінку з твоїми улюбленими сайтам, попереду тебе будуть питати 10 запитань англійською, відповідай на них як забажаєш, у деяких вже є варіати які тобі треба вибрати, щасти тобі)');
let fon = prompt('Write a backgroung color in English');
let typeOfFont = prompt('Write a type of font: Serif, Sans-serif, Monospace, Cursive, Fantasy');
let centilizate = prompt('Write a type of end for title');
let fonForparagraph = prompt('Write a background for a paragpaph');
let coloroftextPar = prompt('Write a color for paragpaph text')
let links = prompt('Write a color of links');
let w = prompt('write a color of the text for div');
let v = prompt('write a size of the text in pixels');
let y = prompt('write a weight of the text from 100 to 1000, with add 100 if you wish to see him bolder')
let typeOfList = prompt('write a type of unoreder list: circle, square, upper-roman, lower-alpha')
let myFavoriteWebSiteIs = alert('мої улюблені вебсайти це гугл, веб3, стековерфлоу, ал якщо ти маєш інші уподобання, ти у наступних повідомленнях можеш дати посилання на свої улюблені веб-сайти');
let firstsite = prompt('write a first of your favorite site');
let secondsite = prompt('Write a second of your favorite site');
let thirdsite = prompt('Write a third of your favorite site');

// Вирішення задачі
let body = document.body.style.backgroundColor = fon;
let font = document.body.style.fontFamily = typeOfFont;
let header = document.querySelector('#title').style.textAlign = centilizate;
let par = document.querySelector('#par').style.backgroundColor = fonForparagraph;
let partext = document.querySelector('#par').style.color = coloroftextPar;
let a = document.getElementsByTagName('a')
for (const elem of a){
    elem.style.color = links;
}
let type = document.getElementsByTagName('li');
for (const elem of type){
    elem.style.listStyleType = typeOfList;
}
let test = document.getElementsByTagName('div');
for (const elem of test){
    elem.style.color = w;
    elem.style.fontSize = v;
    elem.style.fontWeight = y;
};
a[0].href = firstsite;
a[0].textContent = firstsite;
a[1].href = secondsite;
a[1].textContent = secondsite;
a[2].href = thirdsite;
a[2].textContent = thirdsite;
