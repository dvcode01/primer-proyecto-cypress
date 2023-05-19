/// <reference types="cypress" />

describe('Validar formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        // Visita la url del proyecto
        cy.visit('http://127.0.0.1:5500/index.html');

        cy.get('[data-cy="formulario"]')
            .submit()

        // Seleccionando la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')

        // Verificar las clases de un elemento
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger')

    });
});