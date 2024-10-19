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

        stage("Cleanup previous container"){
            steps{
                script{
                    sh 'docker stop game-hub || true'
                    sh 'docker rm game-hub || true'
                }
            }
        }
    }
}