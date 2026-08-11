pipeline {

    agent any

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
    }
}