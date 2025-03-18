import { Connection } from 'pg'
import './commands'

Cypress.Commands.add('runSQL', sql => {
    cy.task('dbQuery', {
        query: sql,
        connection: Cypress.env('db')
    })
})