pipeline {
    agent {
        docker {
            image "node:24"
            reuseNode true
        }
    }
    stages {
        stage('CI - instalalar dependencias'){
            steps {
                sh 'npm install'
            }
        }
        stage('CI - Ejecutar el linter'){
            steps {
                sh 'npm run lint'
            }
        }
        stage('CI - Ejecutar los test'){
            steps {
                sh 'npm run test'
            }
        }
        stage('CI - Construir o build'){
            steps {
                sh 'npm run build'
            }
        }
        stage('CD - construir imagen docker'){
            steps {
                sh 'docker build -t curso-devops-backend:latest .'
            }
        }
    }
}