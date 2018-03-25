describe.only('Alert directive', function(){

  var scope;
  var element;

  beforeEach(function(){
    angular.mock.module('App')
    angular.mock.inject(function($compile, $rootScope){
      scope = $rootScope.$new()
      element = $($compile('<alerts msgs="aa"></alerts>')(scope))
      $('body').append(element)
      scope.$digest()
    })
  });

  afterEach(function(){
    element.remove()
  })

  it('Should display alerts', function(){
    scope.aa = [{type: 'success', msg: 'Bravo'}, {type: 'success', msg: 'Bravo'}]
    scope.$digest()
    expect($('.alert', element).length).to.be.equal(2)
    expect($('.alert:first', element).text()).to.be.equal('Bravo')
  })

  it('Should have dmeo in the scope', function(){
    expect(element.isolateScope().demo).to.be.equal(1)
  })

  it('should be visible', function(){
    scope.aa = [{type: 'success', msg: 'Bravo'}]
    scope.$digest()
    expect($('.alert').is(':visible')).to.be.true
  })

});
