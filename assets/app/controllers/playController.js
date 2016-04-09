app.controller('PlayController', ['$scope', function($scope) {
     
    function Bulb(num, val) {
        this.descr = num;
        this.val = val;
    };
    
    
    $scope.one = new Bulb('1', 1);
    $scope.two = new Bulb('2', 2);
    $scope.four = new Bulb('4', 4);
    $scope.eight = new Bulb('8', 8);
    $scope.sixteen = new Bulb('16', 16);
    $scope.thirtytwo = new Bulb('32', 32);
    $scope.sixtyfour = new Bulb('64', 64);
    $scope.onetwentyeight = new Bulb('128', 128);
    
}]);