pipeline{

    agent any

  
    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
            
        }

         stage('Testing'){
            steps{
                sh "npm i"
                sh "npm install cypress"
                sh "npx cypress run --spec cypress/e2e/spec.cy.js"
            }
        }

         stage('Deploying'){
            steps{
                echo "Deploying the application"
            }
            
        }
    }
    
}
