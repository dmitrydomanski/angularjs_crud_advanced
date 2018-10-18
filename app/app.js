const crudApp = angular.module("crudApp", [
        'ngAnimate',
        'ui.router',
        'categories',
        'categories.bookmarks'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('crudapp', {
                url: '',
                abstract: true

            });
        $urlRouterProvider.otherwise('/');
    });