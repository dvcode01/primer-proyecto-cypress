/// <reference types="cypress" />

describe('Editando la cita y mostrandola', () => {
    it('Escribiendo en cada campo', () => {
        // Visita la url del proyecto
        cy.visit('http://127.0.0.1:5500/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook')

        cy.get('[data-cy="propietario-input"]')
            .type('Nathan')

        cy.get('[data-cy="telefono-input"]')
            .type('12121212')

        cy.get('[data-cy="fecha-input"]')
            .type('2021-04-21')

        cy.get('[data-cy="hora-input"]')
            .type('12:30:00')

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Vomito')

        cy.get('[data-cy="btn-submit"]')
            .click()

        // Seleccionando titulo
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

        // Seleccionando la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
    });

    it('Editando los campos y la cita', () => {
        cy.get('[data-cy="btn-editar"]').click()

        // Escribiendo de nuevo en los campos
        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Luna')

        cy.get('[data-cy="propietario-input"]')
            .clear()
            .type('Gabriel')

        cy.get('[data-cy="telefono-input"]')
            .clear()
            .type('232323')

        cy.get('[data-cy="btn-submit"]')
            .click()

        // Seleccionando la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')
    })
});