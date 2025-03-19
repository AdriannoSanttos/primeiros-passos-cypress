import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashBoardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage() 

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGread: ".orangehrm-dashboard-grid",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateFild: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    secundItemcomboBox: '.oxd-select-dropdown > :nth-child(2) > span',
    thirdItemcomboBox: '.--selected',
    dateOfBirth: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    menuPage.accessPerfomace()

  
   
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-14')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('Field')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get( selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secundItemcomboBox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemcomboBox).click()
    cy.get(selectorsList.dateOfBirth).eq(1).clear().type('1987-04-16')
    cy.get('.oxd-radio-wrapper').eq(0).click()
    cy.get("[tabindex='0']").eq(2).click()
    
    
    
    
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFild).type(userData.userFail.username)
    cy.get(selectorsList.passwordFild).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
    
  })
})