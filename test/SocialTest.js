describe('Social',function(){
    var Social;
    var $http;
    var url = 'http://graphikart.fr';

    describe('#getTwitterCount',function(){
        beforeEach(function(){
            angular.mock.module('App')
            angular.mock.inject(function(_Social_, $httpBackend){
                Social = _Social_
                $http = $httpBackend
            })
        })
        it('should have a getTwitterCount method',function(){
            expect(Social.getTwitterCount).a('function')
        })
        it.skip("should call JSONP",function(){
            $http.expectJSONP(Social.twitterAPI + url).respond(false);
            Social.getTwitterCount(url)
            $http.flush()
        })
        it.skip('should return count',function(){
            count = 0;
            $http.expectJSONP(Social.twitterAPI + url).respond({count: 2});
            Social.getTwitterCount(url).then(function(count){
                count = c
            })
            expect(count).equal(2);
            $http.flush()
        })

        afterEach(function(){
            $http.verifyNoOutstandingExpectation();
            $http.verifyNoOutstandingRequest()
        })
    })

})