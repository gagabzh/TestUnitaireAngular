describe('#ImagesCtrl',function(){
    var scope;
    var Social;
    var $q;
    beforeEach(function(){
        angular.mock.module('App');
        angular.mock.inject(function($controller,$rootScope, _Social_,_$q_){
            scope = $rootScope.$new();
            $controller('ImagesCtrl',{
                $scope:scope
            });
            Social = _Social_;
            $q = _$q_
        })
    });
    it('should have images',function(){
        expect(scope.images).eql([])
    });
    it ('should can delete image',function(){
        var image = {};
        scope.images = [{}, image, {}];
        scope.deleteImage(image);
        expect(scope.images.length).equal(2);
        expect(scope.images[1]).not.equal(image)
    });
    it('should return twitter count',function(){
        mock = sinon.mock(Social);
        q = $q.defer();
        mock.expects('getTwitterCount').once().returns(q.promise);
        scope.getTwitter("http://graphikart.fr");
        q.resolve(2);
        scope.$apply();
        expect(scope.twitter).equal(2)

    });
    it('should return twitter count 0 if fail',function(){
        mock = sinon.mock(Social);
        q = $q.defer();
        mock.expects('getTwitterCount').once().returns(q.promise);
        scope.getTwitter("http://graphikart.fr");
        q.reject();
        scope.$apply();
        expect(scope.twitter).equal(0)
    })
});
