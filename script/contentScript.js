class Shu {
  constructor() {
    this.frame = window.frames[1];
    this.pathname = window.frames[1].location.pathname;

    this.init();
  }

  getUserPathName = () => this.pathname.slice(this.pathname.lastIndexOf('/'));

  routeToQuestionnaireListPage = () => this.frame.document.location.href = '/STU1/EASG/GB0101.aspx';

  getIndexOfUndoQuestionnaire() {
    const questionnaires = this.frame.document.querySelectorAll('#GRD_DataGrid tr[class]');
    this.questionnaires = questionnaires;
    let indexOfUndoQuestionnaire = -1;
    for (let [index, questionnaire] of questionnaires.entries()) {
      if (questionnaire.innerHTML.includes('未填')) {
        indexOfUndoQuestionnaire = index;
        break;
      }
    }
    return indexOfUndoQuestionnaire;
  }

  routeToUndoQuestionnairePageByIndex(index) {
    const questionnaire = this.questionnaires[index];
    if (questionnaire.cells[3].innerHTML.includes('未填')) {
      questionnaire.cells[4].firstElementChild.click()
    } else if (questionnaire.cells[6].innerHTML.includes('未填')) {
      questionnaire.cells[7].firstElementChild.click()
    }
  }

  checkQuestionnaire() {
    const indexOfUndoQuestionnaire = this.getIndexOfUndoQuestionnaire();
    if (indexOfUndoQuestionnaire < 0) return alert('所有問卷已填寫完畢！');
    this.routeToUndoQuestionnairePageByIndex(indexOfUndoQuestionnaire);
  }

  doQuestionnaire() {
    const checkboxs = [...this.frame.document.querySelectorAll(`table input[type="checkbox"][value="15"]`), ...this.frame.document.querySelectorAll(`table input[type="checkbox"][value="50"]`)];
    checkboxs.forEach((checkbox) => checkbox.checked = true);
    this.frame.document.querySelector('table textarea').value = '謝謝老師';
    this.frame.document.querySelector(`input[type="submit"][value="確認"]`).click();
  }

  init() {
    const pathname = this.getUserPathName();
    switch (pathname) {
      case '/main.aspx':
        this.routeToQuestionnaireListPage();
        break;
      case '/GB0101.aspx':
        this.checkQuestionnaire();
        break;
      case '/GB0101EDT.aspx':
        this.doQuestionnaire();
        break;
      default:
        console.log(`Invalid pathname: ${pathname}`);
        break;
    }
  }
}