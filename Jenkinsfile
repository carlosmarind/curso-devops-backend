pipeline{
    agent any
    stages {
     stage('CI - Instalar dependencias'){
        steps{
            sh 'npm install'
            }
     }
    stage('CI - Ejecutar lint'){
        steps{
            sh 'npm run lint'
        }
    }
    stage('CI - Ejecutar test'){
        steps{
            sh 'npm test'
        }
    }
    stage('CI - construir build'){
        steps{
            sh 'npm run build'
        }
     }
    }   
}