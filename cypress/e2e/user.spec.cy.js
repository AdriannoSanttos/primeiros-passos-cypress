import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashBoardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const  Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage() 
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    
    
  }

  
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
   

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId', 'otherId', 'Drivers Number', '2025-03-25')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  
   
    
    
    
    
    
    
    
    
  })
  
})