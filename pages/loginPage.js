class loginPage1 {

    constructor(page) {

        this.page = page;

        this.userName = page.getByPlaceholder('Username');

        this.password = page.getByPlaceholder('Password');

        this.loginButton = page.getByText('Login');
    }

    async openWebsite() {

        await this.page.goto('https://www.saucedemo.com/')

    }

    async enterUserName(username) {

        await this.userName.fill(username);
    }

    async enterPassword(password) {

        await this.password.fill(password);

    }

    async clickLoginButton() {

        await this.loginButton.click();

    }

}

   module.exports = loginPage1;




