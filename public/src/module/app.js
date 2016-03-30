'use strict'; // jshint ignore:line
require('angular').module('shopApp', [require('angular-ui-router'), require('angular-ui-bootstrap')]).config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'src/components/login-page/login.html'
        })
        .state('main', {
            url: '/main',
            controller: 'MainController',
            controllerAs: 'mainCtrl',
            templateUrl: 'src/components/main-page/main.html'
        })
        .state('add', {
            url: '/additem',
            controller: 'AddItemController',
            controllerAs: 'addItemCtrl',
            templateUrl: 'src/components/add-item/add-item.html'
        })
        .state('update', {
            url: '/update',
            controller: 'UpdateItemController',
            controllerAs: 'updateItemCtrl',
            params: {
                _item: null
            },
            resolve: {
                _item: function($stateParams) {
                    return $stateParams._item;
                }
            },
            templateUrl: 'src/components/update-item/update-item.html'
        });

    $locationProvider.html5Mode(true);
}
// Constants
require('../shared/constants.js');
// Components
require('../components/main-page');
require('../components/add-item');
require('../components/update-item');
