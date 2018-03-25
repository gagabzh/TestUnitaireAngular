describe('ImagesCtrl', function(){

  var scope;
  var Social;
  var $q;

  beforeEach(function(){
    angular.mock.module('App')
    angular.mock.inject(function($controller, $rootScope, _Social_, _$q_){
      scope = $rootScope.$new()
      $q = _$q_
      Social= _Social_
      $controller('ImagesCtrl', {
        $scope: scope
      })
    })
  })

  it('Should have images', function(){
    expect(scope.images).to.be.eql([])
  })

  it('Should delete image', function(){
    var image = {}
    scope.images = [{}, image, {}]
    scope.deleteImage(image)
    expect(scope.images.length).to.be.equal(2)
    expect(scope.images[1]).to.not.be.equal(image)
  })

})
