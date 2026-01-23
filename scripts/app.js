var myApp = angular.module('AnnasPortfolio', ['ngResource', 'ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider) {
    var hpfPulseState = {
        name: 'hpfPulse',
        url: '',
        templateUrl: 'templates/hpfPulse.html'
    };

    var stitchCounterState = {
        name: 'stitchCounter',
        url: '',
        templateUrl: 'templates/stitchCounter.html'
    };

    var crochetCentralState = {
        name: 'crochetCentral',
        url: '/crochet_central',
        templateUrl: 'templates/crochetCentral.html'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'templates/about.html'
    };

    $stateProvider.state(hpfPulseState);
    $stateProvider.state(stitchCounterState);
    $stateProvider.state(crochetCentralState);
    $stateProvider.state(aboutState);
});