pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Install dependencies and build the React application
               echo "Installing the dependencies"
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the built files to the server
                echo "Deploying the app"
            }
        }
    }
    
    post {
        success {
            echo 'React application deployed successfully!'
        }
        failure {
            echo 'Failed to deploy React application!'
        }
    }
}
