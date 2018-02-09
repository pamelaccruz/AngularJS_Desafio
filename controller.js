angular.module('T6', [])

.controller('ListaDadosController', function($scope) {
  $scope.searchInput = '';

  $scope.itens = [
    { nome: 'Pamela Carvalho Cruz', dtnascimento: '11/10/1997', sexo: 'Feminino' },
    { nome: 'Claudia Nathalia Sierra', dtnascimento: '21/12/1998', sexo: 'Feminino' },
    { nome: 'Felipe Carvalho Cruz', dtnascimento: '28/08/2000', sexo: 'Masculino' },
    { nome: 'Pedro Barchi', dtnascimento: '08/12/1996', sexo: 'Masculino' }
  ];

  $scope.addItem = function() {
    $scope.itens.push({nome: $scope.nome, dtnascimento: $scope.dtnascimento, sexo: $scope.sexo});
    $scope.nome='';
    $scope.dtnascimento='';
    $scope.sexo='';
    $scope.showMe=false;
  };

  $scope.cancelItem = function() {
    $scope.nome='';
    $scope.dtnascimento='';
    $scope.sexo='';
  };  

  $scope.Homens = '';

  $scope.Mulheres = '';

  $scope.direction = '';
  $scope.orderProp = '';
  $scope.sort = function(column) {
    if ($scope.orderProp = column) {
      $scope.direction = !$scope.direction;
    }
  };
});