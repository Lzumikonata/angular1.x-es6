/**
 * Created by Witt on 2016/4/3.
 */
const route = $routeProvider => {
    $routeProvider
        .when('/index', {
            templateUrl: './src/sub/home.html',
            controller: 'HomeController as home'
        })
        .otherwise({
            templateUrl: './src/sub/home.html',
            controller: 'HomeController as home'
        });
}
route.$inject = ['$routeProvider']

export default route