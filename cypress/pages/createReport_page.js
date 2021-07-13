export class CreateReportPage{

  createReportPage_reportingCanvas = '.tree > app-network-tree-footer > .div-position > .btn-group-hidebar > [title="Reporting"]'
  createReportPage_createReportButton = '#createReportButton_btn'
  createReportPage_reportType = '.ng-input > input'
  createReportPage_reportTitle = '.title-input'
  createReportPage_nodeDropDown = '.choose_node'
  //choose node set to this is for "all clients"
  createReportPage_chooseNode = ':nth-child(1) > app-network-select-node > .tree-node-container > .node-item > .value-item > .checkbox > .form-check-label'
  createReportPage_saveNodeSelection = '#warning-save-button'
  //Report set to 'Create Excel Report'
  createReportPage_createNowOrEmail = '[type="checkbox"]'
  createReportPage_createReport = '.split-controls > .ng-star-inserted'

  navigateToReporting(reportingCanvas){
    cy.get(this.createReportPage_reportingCanvas).click()
  }
  createReportButton(createReport){
    cy.get(this.createReportPage_createReportButton).click()
  }
  reportType(type){
    cy.get(this.createReportPage_reportType).click().type(type)
  }
  reportTitle(reportTitle){
    cy.get(this.createReportPage_reportTitle).click().type(reportTitle)
  }
  nodeDropDown(nodeDropDown){
    cy.get(this.createReportPage_nodeDropDown).click()
  }
  chooseNode(node){
    cy.get(this.createReportPage_chooseNode).click()
  }
  saveNodeSelection(saveNodeSelection){
    cy.get(this.createReportPage_saveNodeSelection).click()
  }
  createNowOrEmail(nowOrEmail){
    cy.get(this.createReportPage_createNowOrEmail).first().check()
  }
  createReport(report){
    cy.get(this.createReportPage_createReport).click()
  }
}
