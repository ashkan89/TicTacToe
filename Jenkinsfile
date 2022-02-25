pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      environment {
        LOG_LEVEL='INFO'
      }
      steps {
        echo "Building ${RELEASE} with log level ${LOG_LEVEL}..."
      }
    }
    stage('Test') {
      steps {
        echo "Tesing relesse ${RELEASE}..."
      }
    }
    stage('Deploy') {
      input {
        message 'Deploy?'
        ok 'Do it!'
        parameters {
          string(name: 'TARGET_ENVIRONMENT', defaultValue: 'PROD', description: 'Target deployment environment')
        }
        steps {
          echo "Deploying release ${RELEASE} to environment ${TARGET_ENVIRONMENT}"
        }
      }
    }
  }
  post {
      always {
        echo 'Prints whether deploy happened or not, success or failure'
      }
    }
  environment {
    RELEASE='20.04'
  }
}
