const { Connection } = require("pg")

describe('PostgreSQL', () => {
   
  it('query table users', () => {
      cy.runSQL('select * from users;') //insere a query 
      .then(queryResponse => {
        expect(queryResponse.length).to.equal(2) //verifica a quantidade de linhas da tabela

        const{
          id,
          name,
          cargo
        } = queryResponse[0]

        expect(id).to.equal(1)        
        expect(name).to.equal('joao')
        expect(cargo).to.equal('engenheiro')
      }
      )
  })
  
  it('manipulacao de dados na tabela', () => {
      //inser
    cy.runSQL("INSERT INTO users(name, cargo) VALUES ('rosa','medica');")  
      
    //select
    cy.runSQL('SELECT * FROM users;')
      .then(queryResponse => {
        expect(queryResponse.length).to.equal(3)
      })
  });

  it('delete', () => {
    cy.runSQL("DELETE FROM users WHERE name='rosa';")
    .then(() => {
       cy.log('Table row deleted'); //informa que a linha da tablela foi excluída
      }) 
  }) 

})