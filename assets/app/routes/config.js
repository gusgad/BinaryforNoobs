app.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "assets/app/templates/homeTemplate.html",
      controller: 'MainController'
    })
    .state('play', {
      url: "/play",
      templateUrl: "assets/app/templates/playTemplate.html",
      controller: 'playController'
    })
});