pipeline{
    agent any
    tools {nodejs "node"}
    environment{
        imageName = "game-hub"
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
    }
}