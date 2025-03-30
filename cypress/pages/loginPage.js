class LoginPage{
    selectorsList() {
        const selectors = {
            usernameFild: "[name='username']",
            passwordFild: "[name='password']",
            loginButton: "[type='submit']",  
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors

    
    }

    accessLoginPage(){
        cy.visit('/auth/login')

    }
    
    loginWithAnyUser(username,password){
        cy.get(this.selectorsList().usernameFild).type(username)
        cy.get(this.selectorsList().passwordFild).type(password)
        cy.get(this.selectorsList().loginButton).click()
       
        
    }

    checkAccessIvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}
export default LoginPage

