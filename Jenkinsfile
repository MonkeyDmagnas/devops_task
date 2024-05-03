pipeline {
    agent any
	environment{
		dockerImage=''
		registry='monkeydmagnas007/staging-task'
	}
    stages {
        stage('GitCheckout') {
            steps {
               git branch: 'staging', url: 'https://github.com/MonkeyDmagnas/devops_task.git'            }
        }
	stage(‘StagingImagebuild’) {
            steps {
                script {
                  dockerImage = docker.build registry
                }
            }
        }
        stage(‘stagingImagePush’) {
            steps {
                script {
                  dockerImage.push()
                }
            }
        }
    }
}
