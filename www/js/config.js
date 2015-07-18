angular
  .module('ionicTrainer')

  .config(function($stateProvider) {
    $stateProvider
       .state('/login', {
      	templateUrl:'src/views/login.html',
      	controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .state('/', {
        templateUrl: 'src/views/main/trainingIndex.html',
        controller: 'trainingIndexCtrl'
    	})

      .state('/armlist', {
      	templateUrl:'src/views/main/armPage.html',
      	controller: 'ArmCtrl',
        controllerAs: 'arm'
       })

      .state('/backlist', {
      	templateUrl:'src/views/main/backPage.html',
      	controller: 'BackCtrl',
        controllerAs: 'back'
      })

      .state('/chestlist', {
      	templateUrl:'src/views/main/chestPage.html',
      	controller: 'ChestCtrl',
        controllerAs: 'chest'
      })

      .state('/leglist', {
      	templateUrl:'src/views/main/legPage.html',
      	controller: 'LegCtrl',
        controllerAs: 'leg'
      })

      .state('/shoulderlist', {
      	templateUrl:'src/views/main/shoulderPage.html',
      	controller: 'ShoulderCtrl',
        controllerAs: 'shoulder'
      });

    });