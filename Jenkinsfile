pipeline{

    agent any

  
    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
            
        }

    stage('install cypress'){
            steps{
                sh "npm ci"  
                sh "npx cypress verify"
                sh "npm install cypress"
            }
        }
        

         stage('Testing'){
            steps{
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
