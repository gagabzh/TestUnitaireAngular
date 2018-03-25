describe('Social', function(){

  var Social;
  var $http;
  var url = "http://grafikart.fr";

  beforeEach(function(){
    angular.mock.module('App')
    angular.mock.inject(function(_Social_, $httpBackend){
      Social = _Social_
      $http = $httpBackend
    })
  })

  afterEach(function(){
    $http.verifyNoOutstandingExpectation();
    $http.verifyNoOutstandingRequest();
  })

  describe('#getTwitterCount', function(){

    it("Should have a getTwitterCount method", function(){
      expect(Social.getTwitterCount).to.be.a('function')
    })

    it("Should call JSONP", function(){
      $http.expectJSONP(Social.twitterAPI + url).respond(false)
      Social.getTwitterCount(url)
      $http.flush()
    })

    it("Should return count", function(){
      count = 0;
      $http.expectJSONP(Social.twitterAPI + url).respond({count: 2})
      Social.getTwitterCount(url).then(function(c){
        count = c
      })
      $http.flush()
      expect(count).to.be.equal(2)
    })

  });

})
