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
                stage('CI - obtener version de app'){
                    steps{
                        script{
                            env.APP_SEMANTIC_VERSION = sh(
                                script: 'npm pkg get version | tr -d \'"\'',
                                returnStdout: true
                            ).trim()
                            echo "La version de mi aplicacion es : ${env.APP_SEMANTIC_VERSION}"
                        }
                    }

                }
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
                sh 'docker tag curso-devops-backend ghcr.io/carlosmarind/curso-devops-backend:${env.APP_SEMANTIC_VERSION}'
                sh 'docker tag curso-devops-backend carlosmarind/curso-devops-backend:${env.APP_SEMANTIC_VERSION}'
            }
        }
        stage('CD - Distribuir Imagen dockerhub'){
            steps {
                script{
                    docker.withRegistry('https://index.docker.io/v1/','dh-credencial'){
                        sh 'docker push carlosmarind/curso-devops-backend:${env.APP_SEMANTIC_VERSION}'
                    }
                }
                
            }
        }
        stage('CD - Distribuir Imagen github'){
            steps {
                script{
                    docker.withRegistry('https://ghcr.io','gh-credencial'){
                        sh 'docker push ghcr.io/carlosmarind/curso-devops-backend:${env.APP_SEMANTIC_VERSION}'
                    }
                }
            }
        }
    }
}