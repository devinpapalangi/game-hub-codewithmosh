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

        


        stage("Cleaning up"){
            steps{
                sh 'docker rmi ${imageName}'
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