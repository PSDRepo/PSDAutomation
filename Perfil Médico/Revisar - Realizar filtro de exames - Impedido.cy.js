/// <reference types="Cypress" />

describe ('Realizar filtro de exames - Ambiente DEV', function() {
    it('Realizar filtro de exames - Perfil Médico', function () {
        
        // Realizar Login no Ambiente
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.medico1@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(5000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()
        
        // Realizar filtro de exame por etapas - Impedido  
        cy.get('[data-tooltip="Filtros Avançados"]').click()
        cy.get('[formcontrolname="step"]').select("Todas Etapas")
        cy.get('[formcontrolname="blocked"]').check()
        cy.get('[name="apply"]').click()
    })
})