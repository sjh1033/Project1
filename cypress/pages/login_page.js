export class LoginPage{

  loginPage_username = '#username'
  loginPage_password = '#password'
  loginPage_loginButton = '.submit'

  navigate(url){
    cy.visit(url)
  }
  enterUsername(username){
    cy.get(this.loginPage_username).click().type(username)
  }
  enterPassword(password){
    cy.get(this.loginPage_password).click().type(password)
  }
  clickLogin(login){
    cy.get(this.loginPage_loginButton, {timeout: 20000}).click()
  }
}
