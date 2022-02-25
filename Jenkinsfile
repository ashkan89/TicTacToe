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
        echo "Tesing. I can relesse ${RELEASE}, but not log level ${LOG_LEVEL}"
      }
    }
  }
  environment {
    RELEASE='20.04'
  }
}
