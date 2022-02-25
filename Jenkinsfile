pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'This is the build number $BUILD_NUMBER of $DEMO'
      }
    }

  }
  environment {
    DEMO = 'Stage Env'
  }
}