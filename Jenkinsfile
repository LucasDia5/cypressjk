pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/spec.cy.js", description:"Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice the browser where you want to execute your scripts")
    }

   
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
