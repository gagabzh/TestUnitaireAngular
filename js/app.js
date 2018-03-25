var app = angular.module('App',[]);

app.factory('Social',function($http,$q){
    return {
        twitterAPI: 'http://urls.api.twitter.com/1/urls/count.json?callback=angular.callbacks._0&url=',
        getTwitterCount : function(url){
            q = $q.defer();
            $http.jsonp(this.twitterAPI + url).then(function(result){
                q.resolve(result.data.count)
            });
            return q.promise

        }
    }
});
app.controller('ImagesCtrl',function($scope,Social){
    $scope.images = [];
    $scope.deleteImage = function(image){
        $scope.images.splice($scope.images.indexOf(image),1)
    };
    $scope.getTwitter = function(url){
        Social.getTwitterCount(url).then(function(count){
            $scope.twitter = count
        },function(){$scope.twitter = 0})
    }
});
app.directive('alerts',function(){
    return {
        restrict:'E',
        template: '<div>' +
            '<div class="alert" ng-repeat="message in messages">{{message.msg}}</div>' +
            '</div>',
        scope:{
            messages: '=msgs'
        },
        link:function (scope,element,attrs) {
            scope.demo = 1;
        }

    }
})