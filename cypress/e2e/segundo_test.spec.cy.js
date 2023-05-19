/// <reference types="cypress" />
describe('Carga la pagina principal', () => {
  it('Cargar la pagina principal', () => {
    // Visita la url del proyecto
    cy.visit('http://127.0.0.1:5500/index.html');

    // Revisa tanto el elemento como el texto que estamos buscando
    cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

    // Revisa si el elemento que estamos buscando existe
    cy.get('[data-cy="titulo-proyecto"]').should('exist');

    // Verifica que exista el elemento y contenga un texto especifico
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria');

    // Verificar el texto de la cita
    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una')
  })
})