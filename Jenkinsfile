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
        stage('CD - Construir Imagen'){
            steps {
                sh 'docker build -t curso-devops-backend:latest .'
                sh 'docker tag curso-devops-backend ghcr.io/carlosmarind/curso-devops-backend'
                sh 'docker tag curso-devops-backend carlosmarind/curso-devops-backend'
            }
        }
        stage('CD - Distribuir Imagen dockerhub'){
            steps {
                docker.withRegistry('https://index.docker.io/v1/','dh-credencial'){
                    sh 'docker push carlosmarind/curso-devops-backend'
                }
                
            }
        }
        stage('CD - Distribuir Imagen github'){
            steps {
                docker.withRegistry('https://ghcr.io','dh-credencial'){
                    sh 'docker push ghcr.io/carlosmarind/curso-devops-backend'
                }
            }
        }
    }
}