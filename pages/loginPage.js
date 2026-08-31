class loginPage {
constructor(page){
this.page = page
this.userName = page.locator('id=user-name')
this.password = page.locator('id=password')
this.loginButton = page.locator('id=login-button')
}
async openWebsite(){
 await this.page.goto('https://www.saucedemo.com/')
}
async enterUsername(username){
 await this.userName.fill(username)
}
async enterPassword(password){
 await this.password.fill(password)
}
async clickLogin(){
  await this.loginButton.click()
}
async login(username,password){
 await this.enterUsername(username)
 await this.enterPassword(password)
 await this.clickLogin()
}}
 module.exports = loginPage;