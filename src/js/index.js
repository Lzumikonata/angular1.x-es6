/**
 * Created by Witt on 2016/4/2.
 */
import 'angular'
import 'angular-route'
import route from './route'

import controller from './module/controller'
import service from './module/service'
import directive from './module/directive'
import config from './module/config'

angular.module('app', ['ngRoute', 'controller', 'service', 'directive', 'config'])

angular.element(document).ready(() =>{
    angular.bootstrap(document, ['app'])
})
