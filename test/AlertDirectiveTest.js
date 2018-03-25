describe('#AlertDirective',function() {
    var scope;
    var element;
    beforeEach(function () {
        angular.mock.module('App');
        angular.mock.inject(function ($compile, $rootScope) {
            scope = $rootScope.$new();
            element = $($compile('<alerts msgs="messages"></alerts>')(scope));
            $('body').append(element);
            scope.$digest()
        })
    });
    afterEach(function(){
        element.remove()
    });
   it('should display alerts',function(){
       scope.messages = [
           {
               type: 'success',
               msg : 'Bravo'
           },
           {
               type: 'alert',
               msg : 'Bravo 2'
           }
       ];
       scope.$digest();
       expect($('.alert',element).length).equal(2)
       expect($('.alert:first',element).text()).equal('Bravo')
   });
   it('should have demo in scope',function(){
       expect(element.isolateScope().demo).equal(1)
   });
    it('should be visible',function(){
        scope.messages = [
            {
                type: 'success',
                msg : 'Bravo'
            }
        ];
        scope.$digest();
        expect($('.alert',element).is(':visible')).true
    })
});