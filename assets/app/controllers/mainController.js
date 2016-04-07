app.controller('MainController', ['$scope', function($scope) {
     
    $scope.addNumber = function(evt) {
        var element = evt.target;
        element.innerHTML = randomNumber();
    };
    
    
    function randomNumber() {
        return Math.round(Math.random());
    }
    
    
}]);