# SHU-Questionnaire-Autocomplete #
<p>Tired of filling all the questionaires out everytimes, before checking your Final/Midterm grade?<br/>
  Now, you can easily just click on the bookmark and makes it automatically completed all!</p>
<p align=center>
<img src="https://raw.githubusercontent.com/SaveYourTime/SHU-Questionnaire-Autocomplete/master/SHU.jpg" width="600px">
</p>
<p align=center>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>

## Getting Started

<img src="https://img.shields.io/badge/Press-this%20button-green.svg?style=for-the-badge&link=javascript:(function()%20{%20if(window.frames[1].location.pathname===%22/STU1/main.aspx%22)%20{%20window.frames[1].document.getElementById(%22WebUserControl11_ASMenu1g9%22).querySelector(%22td%22).click();%20}%20if(window.frames[1].location.pathname===%22/STU1/EASG/GB0101.aspx%22)%20{%20checkSession();%20function%20checkSession()%20{%20if(sessionStorage[%22survey%22])%20{%20var%20getSurvey%20=%20JSON.parse(sessionStorage[%22survey%22]);%20(getSurvey.surveys).forEach(%20(survey,%20index)%20=%3E%20{%20if(survey.State===%22%E6%9C%AA%E5%A1%AB%22){%20getSurvey[%22currentSurvey%22]%20=%20index;%20sessionStorage[%22survey%22]%20=%20JSON.stringify(getSurvey);%20window.frames[1].location.href%20=%20survey.Url;%20}%20});%20}%20else%20{%20initPage();%20}%20}%20function%20initPage()%20{%20let%20surveyData%20=%20{%20};%20let%20surveyTable%20=%20window.frames[1].document.getElementById(%22GRD_DataGrid%22);%20let%20surveyTbody%20=%20surveyTable.querySelector(%22tbody%22);%20let%20surveyRows%20=%20surveyTbody.rows;%20surveyData[%22quantity%22]%20=%20surveyRows.length%20-%201;%20let%20surveys%20=%20[];%20Array.prototype.forEach.call(surveyRows,%20function(getSurvey,%20index)%20{%20if(index%20===%200)%20return;%20var%20survey%20=%20{%20};%20survey[%22Name%22]%20=%20getSurvey.cells[1].firstElementChild.textContent;%20var%20surveyState%20=%20getSurvey.cells[3].firstElementChild.textContent;%20survey[%22State%22]%20=%20surveyState;%20if(surveyState%20===%20%22%E6%9C%AA%E5%A1%AB%22)%20survey[%22Url%22]%20=%20getSurvey.cells[4].firstElementChild.href;%20surveys.push(survey);%20});%20surveyData[%22surveys%22]%20=%20surveys;%20surveyData[%22surveyFunc%22]%20=%20`function%20setChecked()%20{%20var%20getCheckboxs%20=%20window.frames[1].document.querySelectorAll(%27input[type=%22checkbox%22][value=%2215%22]%27);%20Array.prototype.forEach.call(getCheckboxs,%20getCheckbox%20=%3E%20{%20getCheckbox.checked%20=%20true;%20});%20window.frames[1].document.querySelector(%22textarea%22).value%20=%20%22%E8%AC%9D%E8%AC%9D%E8%80%81%E5%B8%AB%22;%20window.frames[1].document.querySelector(%27input[value=%22%E7%A2%BA%E8%AA%8D%22]%27).click();%20};%20setChecked();`;%20if(surveys.length%3E0)%20{%20sessionStorage[%22survey%22]%20=%20JSON.stringify(surveyData);%20checkSession();%20}%20}%20}%20if(window.frames[1].location.pathname===%22/STU1/EASG/GB0101EDT.aspx%22)%20{%20if(sessionStorage[%22survey%22])%20{%20var%20getSurvey%20=%20JSON.parse(sessionStorage[%22survey%22]);%20eval(getSurvey.surveyFunc);%20getSurvey.surveys[getSurvey.currentSurvey].State%20=%20%22%E5%B7%B2%E5%A1%AB%22;%20sessionStorage[%22survey%22]%20=%20JSON.stringify(getSurvey);%20}%20else%20{%20alert(%22%E5%B0%9A%E6%9C%AA%E5%88%9D%E5%A7%8B%E5%8C%96%E8%AA%B2%E7%A8%8B%EF%BC%81%22);%20location.href%20=%20%22https://ap2.shu.edu.tw/STU1/Index.aspx%22;%20}%20}%20})();">

### Prerequisites

1. 👆🏻 Click on the button above, and it will open a new tab with only one button on the page.
2. 🖱 Right click on the button to copy the url link.
```
   Be aware that coping the link at the new tab, rather than the button above.
```
> <img src="https://i.imgur.com/puWaFXs.png" width="300px">
3. ⌨️ Press Ctrl + D to add bookmark<br />
```
   You can also click the star-icon at the right of the url column instead.
```
> <img src="https://i.imgur.com/Iuiz0bT.png" width="300px">
4. Press Edit to reset the url.<br />
```
   Replace the link with the link that you copied on step2.
   Of course you can change the name whatever you want 
```
> <img src="https://i.imgur.com/VR26jYV.png" width="300px">

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo
