/**
 * Created by Witt on 2016/4/7.
 */
import route from '../route'


angular.module('config', [])
    .config(route)
    .config($httpProvider => $httpProvider.defaults.headers.common['Authorization'] = 'Token')