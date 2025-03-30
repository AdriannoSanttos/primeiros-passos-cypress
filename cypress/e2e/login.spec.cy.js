import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashBoardPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login HRM Tests', () => {
  
 
  
  it('login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessIvalid()    
    
  })

  it('login - Succsses', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    
  })

})
