'use strict';

describe('Service: testProvider', function () {

  // instantiate service
  var testProvider,
    init = function () {
      inject(function (_testProvider_) {
        testProvider = _testProvider_;
      });
    };

  // load the service's module
  beforeEach(module('clientApp'));

  it('should do something', function () {
    init();

    expect(!!testProvider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (testProviderProvider) {
      testProviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(testProvider.greet()).toEqual('Lorem ipsum');
  });

});
