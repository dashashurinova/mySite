let time = document.querySelector('.time');
let date = document.querySelector('.date');
let Sec =document.getElementById('sec_on_site');
let Min =document.getElementById('min_on_site');
let now;
// let secOnSite = document.querySelector('.time_on_site');
let secOnSite = 0
let minOnSite = 0
let probel = ' '
// function timeSpend();

// ************************ set time/date 

setInterval(() => {
    now = new Date();
    time.innerHTML = now.toLocaleTimeString();
}, 1000)

function showDate() {
    let siteDate = new Date();
    let day = siteDate.getDay(),
        month = siteDate.getMonth(),
        dateNum = siteDate.getDate(),
        year = siteDate.getFullYear();
    let months = ['January', 'Februaru', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
    let week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday' ]
    let ids = ['dayname', 'months', 'daynum', 'year']
    let values = [week[day], months[month], dateNum, year]
    ids.forEach((el, ind) => {
        document.getElementById(ids[ind]).firstChild.nodeValue = values[ind];

    })
}
showDate();

// ***************************** ammount of time spend on this page 
if (minOnSite<1){Min.textContent =('00:')}
function timeSpend() {
    secOnSite++
    Sec.textContent = secOnSite
    if (secOnSite<10){Sec.textContent =('0'+secOnSite)}
    console.log(secOnSite)
if (secOnSite === 59){
    secOnSite =0
    minOnSite++
    Sec.textContent = secOnSite
    Min.textContent =(minOnSite+':')
    if (minOnSite<10){Min.textContent =('0'+minOnSite+':')}
}
}
let timer = setInterval(timeSpend, 1000)

//*************************************** calculation */
let lang1
let lang2
let answer

function calculateLanguage() {
    switch (Number(document.getElementById('drink').value)) {
        case 0: lang1 ='X'; console.log(lang1);break;
        case 1: lang1 ='Python';  console.log(lang1);break;
        case 2: lang1 ='Ruby'; console.log(lang1);break;
        case 3: lang1 ='Java';console.log(lang1); break;
        case 4: lang1 ='JS';console.log(lang1); break;
    }

    switch (Number(document.getElementById('season').value)) {
        case 0: lang2 ='X'; console.log(lang2);break;
        case 1: lang2 ='GO';  console.log(lang2);break;
        case 2: lang2 ='C'; console.log(lang2);break;
        case 3: lang2 ='PHP';console.log(lang2); break;
        case 4: lang2 ='C++';console.log(lang2); break;
    }

    answer= lang1 + ' and '+ lang2;
    document.getElementById('answer').innerHTML = answer;

}