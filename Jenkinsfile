pipeline{
    agent any
    tools {nodejs "node"}
    environment{
        imageName = "devinanugrahp/game-hub" 
        registryCredential =  'devinanugrahp'
    }

    stages{
        stage("Install Dependencies"){
            steps{
                sh 'yarn install'
            }
        }

        stage("Build"){
            steps{
                script{
                    dockerImage = docker.build imageName
                }
            }
        }
        stage("Deploy"){
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-creds'){
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }

        stage("Cleanup Existing Container") {
            steps {
                script {
                    // Check if the container exists and stop/remove it
                    def existingContainer = sh(script: "docker ps -aq -f name=${containerName}", returnStdout: true).trim()
                    if (existingContainer) {
                        sh "docker stop ${existingContainer}"
                        sh "docker rm ${existingContainer}"
                    }
                }
            }
        }

        stage("Running Container"){
            steps{
                script{
                    docker.image(imageName).run("-d -p 5173:80")
                }
            }
        }
    }
}