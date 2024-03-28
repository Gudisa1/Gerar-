pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'echo "Building the project..."'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying the application..."'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! Send notification...'
            // Add code here to send a notification on success
        }
        failure {
            echo 'Pipeline failed! Send notification...'
            // Add code here to send a notification on failure
        }
    }
}
