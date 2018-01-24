// only set checkboxs
javascript:(function() {
    var getCheckboxs = window.frames[1].document.querySelectorAll('input[type="checkbox"][value="15"]');
    Array.prototype.forEach.call(getCheckboxs, function(getCheckbox) { getCheckbox.checked = true; }); window.frames[1].document.querySelector('textarea').value="謝謝老師"; })()

// set checkboxs also deal with page
javascript:(function() {
    if(window.frames[1].location.pathname==="/STU1/main.aspx") {
        window.frames[1].document.getElementById("WebUserControl11_ASMenu1g9").querySelector("td").click();
    }
    if(window.frames[1].location.pathname==="/STU1/EASG/GB0101.aspx") {
        checkSession();
        function checkSession() {
            if(sessionStorage["survey"]) {
                var getSurvey = JSON.parse(sessionStorage["survey"]);
                (getSurvey.surveys).forEach( (survey, index) => {
                    if(survey.State==="未填"){
                        getSurvey["currentSurvey"] = index;
                        sessionStorage["survey"] = JSON.stringify(getSurvey);
                        window.frames[1].location.href = survey.Url;
                    }
                });
            } else {
                initPage();
            }
        }
        function initPage() {
            let surveyData = { };
    
            let surveyTable = window.frames[1].document.getElementById("GRD_DataGrid");
            let surveyTbody = surveyTable.querySelector("tbody");
            let surveyRows = surveyTbody.rows;
            surveyData["quantity"] = surveyRows.length - 1;
    
            let surveys = [];
            Array.prototype.forEach.call(surveyRows, function(getSurvey, index) {
                if(index === 0) return;
                var survey = { };
    
                survey["Name"] = getSurvey.cells[1].firstElementChild.textContent;
    
                var surveyState = getSurvey.cells[3].firstElementChild.textContent;
                survey["State"] = surveyState;
    
                if(surveyState === "未填") survey["Url"] = getSurvey.cells[4].firstElementChild.href;
    
                surveys.push(survey);
            });
    
            surveyData["surveys"] = surveys;
            surveyData["surveyFunc"] = `function setChecked() {
                var getCheckboxs = window.frames[1].document.querySelectorAll('input[type="checkbox"][value="15"]');
                Array.prototype.forEach.call(getCheckboxs, getCheckbox => {
                    getCheckbox.checked = true;
                });
                window.frames[1].document.querySelector("textarea").value = "謝謝老師";
                window.frames[1].document.querySelector('input[value="確認"]').click();
            }; setChecked();`;
            if(surveys.length>0) {
                sessionStorage["survey"] = JSON.stringify(surveyData);
                checkSession();
            }
        }
    }
    if(window.frames[1].location.pathname==="/STU1/EASG/GB0101EDT.aspx") {
        if(sessionStorage["survey"]) {
            var getSurvey = JSON.parse(sessionStorage["survey"]);
            eval(getSurvey.surveyFunc);
            getSurvey.surveys[getSurvey.currentSurvey].State = "已填";
            sessionStorage["survey"] = JSON.stringify(getSurvey);
        } else {
            alert("尚未初始化課程！");
            location.href = "https://ap2.shu.edu.tw/STU1/Index.aspx";
        }
    }
})()
