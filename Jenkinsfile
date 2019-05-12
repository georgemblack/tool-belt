pipeline {
    environment {
        PROJECT_NAME = 'toolbelt'
        OUTPUT_DIR = '/var/public/toolbeltdev/'
    }
    agent none
    stages {
        stage('Lint and Build Client') {
            agent {
                docker {
                    image 'node:11-stretch'
                }
            }
            stages {
                stage('Install Client Dependencies') {
                    steps {
                        dir('client') {
                            sh '''
                                npm install -g yarn
                                yarn
                            '''
                        }
                    }
                }
                stage('Lint Client') {
                    steps {
                        dir('client') {
                            sh 'yarn lint'
                        }
                    }
                }
                stage('Build Client') {
                    steps {
                        dir('client') {
                            sh 'yarn build'
                        }
                    }
                }
            }
        }
        stage('Copy Files') {
            agent any
            steps {
                sh '''
                    rm -rf ${OUTPUT_DIR}*
                    cp -r ./* ${OUTPUT_DIR}
                '''
            }
        }
    }
}
