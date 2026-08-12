pipeline {

    agent any

    stages {
        stage('CI - Integracion continua'){
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
            }
        }
        stage('CD - Distribuir Imagen docker'){
            steps {
                sh 'docker build -t curso-devops-backend:latest .'
                sh 'docker tag curso-devops-backend ghcr.io/carlosmarind/curso-devops-backend'
                sh 'docker tag curso-devops-backend carlosmarind/curso-devops-backend'
                sh 'docker push carlosmarind/curso-devops-backend'
                sh 'docker push carlosmarind/ghcr.io/carlosmarind/curso-devops-backend'
            }
        }
    }
}