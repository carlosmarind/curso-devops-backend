// Una funcion en un jenkins file Se escribe como cualquier funcion. Tiene un nombre, 
// y parametros y comienza con la palabra reservada def. Esta funcion se llama tagAndPush
// y sirve para resumir la logica de upload de imagenes sin repetir el que teniamos antes.

def tagAndPush(String localImage, String repo, String registry, String credential) {

    docker.withRegistry(registry, credential) {
        sh "docker tag ${localImage} ${repo}:latest"
        sh "docker tag ${localImage} ${repo}:${env.BUILD_NUMBER}"
        sh "docker tag ${localImage} ${repo}:${env.APP_SEMANTIC_VERSION}"
        sh "docker push ${repo}:latest"
        sh "docker push ${repo}:${env.BUILD_NUMBER}"
        sh "docker push ${repo}:${env.APP_SEMANTIC_VERSION}"
    }

}

pipeline {

    agent any
    // Aca podemos declarar variables que luego podemos acceder como variables de ambiente dentro del pipeline
    // usando "env.". Estas variables solo existen en este pipeline.
    environment {
        IMAGE_NAME = "curso-devops-backend"
        DH_REPO    = "carlosmarind/curso-devops-backend"
        GHCR_REPO  = "ghcr.io/carlosmarind/curso-devops-backend"
    }



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
                        sh 'npm run test:cov'
                    }
                }
                stage('CI - Construir o build'){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Quality Assurance'){
            agent {
                docker{
                    image 'sonarsource/sonar-scanner-cli'
                    args '--network  devops-infra_default'
                    reuseNode true
                }
            }
            stages{
                stage('validacion de codigo'){
                    steps{
                        withSonarQubeEnv('sonarqube'){
                            sh 'sonar-scanner'
                        }
                    }
                }
            }
        }
        stage("CD de la aplicacion - build dockerfile") {
            steps {
                sh "docker build -t ${env.IMAGE_NAME} ."
                script {
                    if (!env.APP_SEMANTIC_VERSION?.trim()) {
                        error("APP_SEMANTIC_VERSION no definida en el stage anterior")
                    }
                    // Aca llamamos a la funcion que definimos al principio , y ya esta funcion 
                    // hace login en dockerhub y github con docker.withRegistry y sube ambas imagenes
                    tagAndPush(env.IMAGE_NAME, env.DH_REPO, "https://index.docker.io/v1/", "dh-credencial")
                    tagAndPush(env.IMAGE_NAME, env.GHCR_REPO, "https://ghcr.io", "gh-credencial")
                }
            }
        }
    }
}