pipeline {
    agent any
    environment {
        BACKEND_URL = credentials('backend_url')
    }
    stages {
        stage('docker compose down') {
            steps {
                sh 'docker-compose down'
            }
        }
        stage('delete old version') {
            when {
                expression {
                    env.WORKSPACE == '/home/jenkins/workspace/frontend-production'
                }
            }
            steps {
                sh 'rm -rf *'
            }
        }
        stage('clone project and checkout') {
            steps {
                git branch: 'master',
                    credentialsId: 'sshgit',
                    url: 'git@github.com:KB-Group-Enterprise/integrated-frontend.git'

                sh 'ls -lat'
                sh 'git log --oneline'
            }
        }
        stage('docker compose up') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
