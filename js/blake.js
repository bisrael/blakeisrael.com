var blake = angular.module('blake', [])


blake.directive('blakeTile', function blakeTileDirectiveFactory() {
  return {
    restrict: 'E',
    templateUrl: 'html/blakeTile.html',
    replace: true,
    compile: function blakeTileCompiler(tElement, tAttrs, transclude) {

      tElement.append($('<div class="icon">').addClass(tAttrs.icon))
      return function blakeTilePostLink(scope, iElement, iAttrs, controller) {

      }
    }
  }
})