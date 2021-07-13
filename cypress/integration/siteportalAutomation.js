/// <reference types="cypress" />
import {LoginPage} from "../pages/login_page"
import {CreateReportPage} from "../pages/createReport_page"

var loginPage = new LoginPage()
var createReportPage = new CreateReportPage()

it('siteportal reporting test', function() {
  loginPage.navigate('https://192.168.11.191/nypd_qa-unified/');
  loginPage.enterUsername('admin');
  loginPage.enterPassword('eHagaz12');
  loginPage.clickLogin();
  createReportPage.navigateToReporting();
  createReportPage.createReportButton();
  createReportPage.reportType('firm{enter}');
  createReportPage.reportTitle('NYPDFirmware');
  createReportPage.nodeDropDown();
  createReportPage.chooseNode();
  createReportPage.saveNodeSelection();
  createReportPage.createNowOrEmail();
  createReportPage.createReport();
  //cy.wait(5000)
  //cy.screenshot()
})
