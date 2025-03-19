class DashboardPage {
    selctorsList() {
        const selectors = {
            dashboardGread: ".orangehrm-dashboard-grid",
            
        }

        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selctorsList().dashboardGread).should('be.visible')
    }
}

export default DashboardPage