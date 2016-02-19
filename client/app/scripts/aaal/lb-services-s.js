(function(window, angular, undefined) {'use strict';

    var urlBase = '/api';
    var authHeader = 'authorization';

    function getHost(url) {
        var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
        return m ? m[1] : null;
    }

    var urlBaseHost = getHost(urlBase) || location.host;

    /**
     * @ngdoc overview
     * @name lbServices
     * @module
     * @description
     *
     * The `lbServices` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module('lbServices', ['ngResource']);

    /**
     * @ngdoc object
     * @name lbServices.User
     * @header lbServices.User
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `User` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
      'User',
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + '/Users/:id',
        {'id': '@id'},
      {

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__findById__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Find a related item by id for accessTokens.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for accessTokens
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'prototype$__findById__accessTokens': {
              params: {
                  'fk': '@fk'
              },
              url: urlBase + '/Users/:id/accessTokens/:fk',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__destroyById__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Delete a related item by id for accessTokens.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for accessTokens
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          'prototype$__destroyById__accessTokens': {
              params: {
                  'fk': '@fk'
              },
              url: urlBase + '/Users/:id/accessTokens/:fk',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__updateById__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Update a related item by id for accessTokens.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for accessTokens
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'prototype$__updateById__accessTokens': {
              params: {
                  'fk': '@fk'
              },
              url: urlBase + '/Users/:id/accessTokens/:fk',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__get__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Queries accessTokens of User.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `filter` – `{object=}` - 
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'prototype$__get__accessTokens': {
              isArray: true,
              url: urlBase + '/Users/:id/accessTokens',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__create__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Creates a new instance in accessTokens of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'prototype$__create__accessTokens': {
              url: urlBase + '/Users/:id/accessTokens',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__delete__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Deletes all accessTokens of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          'prototype$__delete__accessTokens': {
              url: urlBase + '/Users/:id/accessTokens',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$__count__accessTokens
           * @methodOf lbServices.User
           *
           * @description
           *
           * Counts accessTokens of User.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          'prototype$__count__accessTokens': {
              url: urlBase + '/Users/:id/accessTokens/count',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#create
           * @methodOf lbServices.User
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'create': {
              url: urlBase + '/Users',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#createMany
           * @methodOf lbServices.User
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'createMany': {
              isArray: true,
              url: urlBase + '/Users',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#upsert
           * @methodOf lbServices.User
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'upsert': {
              url: urlBase + '/Users',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#exists
           * @methodOf lbServices.User
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          'exists': {
              url: urlBase + '/Users/:id/exists',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#findById
           * @methodOf lbServices.User
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'findById': {
              url: urlBase + '/Users/:id',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#find
           * @methodOf lbServices.User
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'find': {
              isArray: true,
              url: urlBase + '/Users',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#findOne
           * @methodOf lbServices.User
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'findOne': {
              url: urlBase + '/Users/findOne',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#updateAll
           * @methodOf lbServices.User
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          'updateAll': {
              url: urlBase + '/Users/update',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#deleteById
           * @methodOf lbServices.User
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'deleteById': {
              url: urlBase + '/Users/:id',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#count
           * @methodOf lbServices.User
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          'count': {
              url: urlBase + '/Users/count',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#prototype$updateAttributes
           * @methodOf lbServices.User
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `User` object.)
           * </em>
           */
          'prototype$updateAttributes': {
              url: urlBase + '/Users/:id',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#createChangeStream
           * @methodOf lbServices.User
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          'createChangeStream': {
              url: urlBase + '/Users/change-stream',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#login
           * @methodOf lbServices.User
           *
           * @description
           *
           * Login a user with username/email and password.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
           *   Default value: `user`.
           *
           *  - `rememberMe` - `boolean` - Whether the authentication credentials
           *     should be remembered in localStorage across app/browser restarts.
           *     Default: `true`.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The response body contains properties of the AccessToken created on login.
           * Depending on the value of `include` parameter, the body may contain additional properties:
           * 
           *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
           * 
           *
           */
          'login': {
              params: {
                  include: 'user'
              },
              interceptor: {
                  response: function(response) {
                      var accessToken = response.data;
                      LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                      LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                      LoopBackAuth.save();
                      return response.resource;
                  }
              },
              url: urlBase + '/Users/login',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#logout
           * @methodOf lbServices.User
           *
           * @description
           *
           * Logout a user with access token.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          'logout': {
              interceptor: {
                  response: function(response) {
                      LoopBackAuth.clearUser();
                      LoopBackAuth.clearStorage();
                      return response.resource;
                  }
              },
              url: urlBase + '/Users/logout',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#confirm
           * @methodOf lbServices.User
           *
           * @description
           *
           * Confirm a user registration with email verification token.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `uid` – `{string}` - 
           *
           *  - `token` – `{string}` - 
           *
           *  - `redirect` – `{string=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          'confirm': {
              url: urlBase + '/Users/confirm',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#resetPassword
           * @methodOf lbServices.User
           *
           * @description
           *
           * Reset password for a user with email.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          'resetPassword': {
              url: urlBase + '/Users/reset',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.User#getCurrent
           * @methodOf lbServices.User
           *
           * @description
           *
           * Get data of the currently logged user. Fail with HTTP result 401
           * when there is no user logged in.
           *
           * @param {function(Object,Object)=} successCb
           *    Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *    `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           */
          'getCurrent': {
              url: urlBase + '/Users' + '/:id',
              method: 'GET',
              params: {
                  id: function() {
                      var id = LoopBackAuth.currentUserId;
                      if (id == null) id = '__anonymous__';
                      return id;
                  },
              },
              interceptor: {
                  response: function(response) {
                      LoopBackAuth.currentUserData = response.data;
                      return response.resource;
                  }
              },
              __isGetCurrentUser__: true
          }
      }
    );



      /**
       * @ngdoc method
       * @name lbServices.User#updateOrCreate
       * @methodOf lbServices.User
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R['updateOrCreate'] = R['upsert'];

      /**
       * @ngdoc method
       * @name lbServices.User#update
       * @methodOf lbServices.User
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R['update'] = R['updateAll'];

      /**
       * @ngdoc method
       * @name lbServices.User#destroyById
       * @methodOf lbServices.User
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R['destroyById'] = R['deleteById'];

      /**
       * @ngdoc method
       * @name lbServices.User#removeById
       * @methodOf lbServices.User
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `User` object.)
       * </em>
       */
      R['removeById'] = R['deleteById'];

      /**
       * @ngdoc method
       * @name lbServices.User#getCachedCurrent
       * @methodOf lbServices.User
       *
       * @description
       *
       * Get data of the currently logged user that was returned by the last
       * call to {@link lbServices.User#login} or
       * {@link lbServices.User#getCurrent}. Return null when there
       * is no user logged in or the data of the current user were not fetched
       * yet.
       *
       * @returns {Object} A User instance.
       */
      R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
      };

      /**
       * @ngdoc method
       * @name lbServices.User#isAuthenticated
       * @methodOf lbServices.User
       *
       * @returns {boolean} True if the current user is authenticated (logged in).
       */
      R.isAuthenticated = function() {
          return this.getCurrentId() != null;
      };

      /**
       * @ngdoc method
       * @name lbServices.User#getCurrentId
       * @methodOf lbServices.User
       *
       * @returns {Object} Id of the currently logged-in user or null.
       */
      R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
      };

      /**
      * @ngdoc property
      * @name lbServices.User#modelName
      * @propertyOf lbServices.User
      * @description
      * The name of the model represented by this $resource,
      * i.e. `User`.
      */
      R.modelName = 'User';


      return R;
  }]);

    /**
     * @ngdoc object
     * @name lbServices.TestModel
     * @header lbServices.TestModel
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `TestModel` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
      'TestModel',
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + '/TestModels/:id',
        {'id': '@id'},
      {

          /**
           * @ngdoc method
           * @name lbServices.TestModel#create
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'create': {
              url: urlBase + '/TestModels',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#createMany
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'createMany': {
              isArray: true,
              url: urlBase + '/TestModels',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#upsert
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'upsert': {
              url: urlBase + '/TestModels',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#exists
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          'exists': {
              url: urlBase + '/TestModels/:id/exists',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#findById
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'findById': {
              url: urlBase + '/TestModels/:id',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#find
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'find': {
              isArray: true,
              url: urlBase + '/TestModels',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#findOne
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'findOne': {
              url: urlBase + '/TestModels/findOne',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#updateAll
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          'updateAll': {
              url: urlBase + '/TestModels/update',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#deleteById
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'deleteById': {
              url: urlBase + '/TestModels/:id',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#count
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          'count': {
              url: urlBase + '/TestModels/count',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#prototype$updateAttributes
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `TestModel` object.)
           * </em>
           */
          'prototype$updateAttributes': {
              url: urlBase + '/TestModels/:id',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.TestModel#createChangeStream
           * @methodOf lbServices.TestModel
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          'createChangeStream': {
              url: urlBase + '/TestModels/change-stream',
              method: 'POST'
          },
      }
    );



      /**
       * @ngdoc method
       * @name lbServices.TestModel#updateOrCreate
       * @methodOf lbServices.TestModel
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `TestModel` object.)
       * </em>
       */
      R['updateOrCreate'] = R['upsert'];

      /**
       * @ngdoc method
       * @name lbServices.TestModel#update
       * @methodOf lbServices.TestModel
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R['update'] = R['updateAll'];

      /**
       * @ngdoc method
       * @name lbServices.TestModel#destroyById
       * @methodOf lbServices.TestModel
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `TestModel` object.)
       * </em>
       */
      R['destroyById'] = R['deleteById'];

      /**
       * @ngdoc method
       * @name lbServices.TestModel#removeById
       * @methodOf lbServices.TestModel
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `TestModel` object.)
       * </em>
       */
      R['removeById'] = R['deleteById'];


      /**
      * @ngdoc property
      * @name lbServices.TestModel#modelName
      * @propertyOf lbServices.TestModel
      * @description
      * The name of the model represented by this $resource,
      * i.e. `TestModel`.
      */
      R.modelName = 'TestModel';


      return R;
  }]);

    /**
     * @ngdoc object
     * @name lbServices.AnotherModel
     * @header lbServices.AnotherModel
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `AnotherModel` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
      'AnotherModel',
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + '/AnotherModels/:id',
        {'id': '@id'},
      {

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#create
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'create': {
              url: urlBase + '/AnotherModels',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#createMany
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'createMany': {
              isArray: true,
              url: urlBase + '/AnotherModels',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#upsert
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'upsert': {
              url: urlBase + '/AnotherModels',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#exists
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          'exists': {
              url: urlBase + '/AnotherModels/:id/exists',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#findById
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'findById': {
              url: urlBase + '/AnotherModels/:id',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#find
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'find': {
              isArray: true,
              url: urlBase + '/AnotherModels',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#findOne
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'findOne': {
              url: urlBase + '/AnotherModels/findOne',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#updateAll
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          'updateAll': {
              url: urlBase + '/AnotherModels/update',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#deleteById
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'deleteById': {
              url: urlBase + '/AnotherModels/:id',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#count
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          'count': {
              url: urlBase + '/AnotherModels/count',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#prototype$updateAttributes
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AnotherModel` object.)
           * </em>
           */
          'prototype$updateAttributes': {
              url: urlBase + '/AnotherModels/:id',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.AnotherModel#createChangeStream
           * @methodOf lbServices.AnotherModel
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          'createChangeStream': {
              url: urlBase + '/AnotherModels/change-stream',
              method: 'POST'
          },
      }
    );



      /**
       * @ngdoc method
       * @name lbServices.AnotherModel#updateOrCreate
       * @methodOf lbServices.AnotherModel
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AnotherModel` object.)
       * </em>
       */
      R['updateOrCreate'] = R['upsert'];

      /**
       * @ngdoc method
       * @name lbServices.AnotherModel#update
       * @methodOf lbServices.AnotherModel
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R['update'] = R['updateAll'];

      /**
       * @ngdoc method
       * @name lbServices.AnotherModel#destroyById
       * @methodOf lbServices.AnotherModel
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AnotherModel` object.)
       * </em>
       */
      R['destroyById'] = R['deleteById'];

      /**
       * @ngdoc method
       * @name lbServices.AnotherModel#removeById
       * @methodOf lbServices.AnotherModel
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AnotherModel` object.)
       * </em>
       */
      R['removeById'] = R['deleteById'];


      /**
      * @ngdoc property
      * @name lbServices.AnotherModel#modelName
      * @propertyOf lbServices.AnotherModel
      * @description
      * The name of the model represented by this $resource,
      * i.e. `AnotherModel`.
      */
      R.modelName = 'AnotherModel';


      return R;
  }]);

    /**
     * @ngdoc object
     * @name lbServices.Beer
     * @header lbServices.Beer
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Beer` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
      'Beer',
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + '/Beers/:id',
        {'id': '@id'},
      {

          /**
           * @ngdoc method
           * @name lbServices.Beer#create
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'create': {
              url: urlBase + '/Beers',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#createMany
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'createMany': {
              isArray: true,
              url: urlBase + '/Beers',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#upsert
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'upsert': {
              url: urlBase + '/Beers',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#exists
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          'exists': {
              url: urlBase + '/Beers/:id/exists',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#findById
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'findById': {
              url: urlBase + '/Beers/:id',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#find
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'find': {
              isArray: true,
              url: urlBase + '/Beers',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#findOne
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'findOne': {
              url: urlBase + '/Beers/findOne',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#updateAll
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          'updateAll': {
              url: urlBase + '/Beers/update',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#deleteById
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'deleteById': {
              url: urlBase + '/Beers/:id',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#count
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          'count': {
              url: urlBase + '/Beers/count',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#prototype$updateAttributes
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Beer` object.)
           * </em>
           */
          'prototype$updateAttributes': {
              url: urlBase + '/Beers/:id',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.Beer#createChangeStream
           * @methodOf lbServices.Beer
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          'createChangeStream': {
              url: urlBase + '/Beers/change-stream',
              method: 'POST'
          },
      }
    );



      /**
       * @ngdoc method
       * @name lbServices.Beer#updateOrCreate
       * @methodOf lbServices.Beer
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Beer` object.)
       * </em>
       */
      R['updateOrCreate'] = R['upsert'];

      /**
       * @ngdoc method
       * @name lbServices.Beer#update
       * @methodOf lbServices.Beer
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R['update'] = R['updateAll'];

      /**
       * @ngdoc method
       * @name lbServices.Beer#destroyById
       * @methodOf lbServices.Beer
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Beer` object.)
       * </em>
       */
      R['destroyById'] = R['deleteById'];

      /**
       * @ngdoc method
       * @name lbServices.Beer#removeById
       * @methodOf lbServices.Beer
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Beer` object.)
       * </em>
       */
      R['removeById'] = R['deleteById'];


      /**
      * @ngdoc property
      * @name lbServices.Beer#modelName
      * @propertyOf lbServices.Beer
      * @description
      * The name of the model represented by this $resource,
      * i.e. `Beer`.
      */
      R.modelName = 'Beer';


      return R;
  }]);

    /**
     * @ngdoc object
     * @name lbServices.Toys
     * @header lbServices.Toys
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Toys` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
      'Toys',
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + '/Toys/:id',
        {'id': '@id'},
      {

          /**
           * @ngdoc method
           * @name lbServices.Toys#create
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'create': {
              url: urlBase + '/Toys',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#createMany
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'createMany': {
              isArray: true,
              url: urlBase + '/Toys',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#upsert
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'upsert': {
              url: urlBase + '/Toys',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#exists
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` - 
           */
          'exists': {
              url: urlBase + '/Toys/:id/exists',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#findById
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'findById': {
              url: urlBase + '/Toys/:id',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#find
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'find': {
              isArray: true,
              url: urlBase + '/Toys',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#findOne
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'findOne': {
              url: urlBase + '/Toys/findOne',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#updateAll
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The number of instances updated
           */
          'updateAll': {
              url: urlBase + '/Toys/update',
              method: 'POST'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#deleteById
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'deleteById': {
              url: urlBase + '/Toys/:id',
              method: 'DELETE'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#count
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` - 
           */
          'count': {
              url: urlBase + '/Toys/count',
              method: 'GET'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#prototype$updateAttributes
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Toys` object.)
           * </em>
           */
          'prototype$updateAttributes': {
              url: urlBase + '/Toys/:id',
              method: 'PUT'
          },

          /**
           * @ngdoc method
           * @name lbServices.Toys#createChangeStream
           * @methodOf lbServices.Toys
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` - 
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` - 
           */
          'createChangeStream': {
              url: urlBase + '/Toys/change-stream',
              method: 'POST'
          },
      }
    );



      /**
       * @ngdoc method
       * @name lbServices.Toys#updateOrCreate
       * @methodOf lbServices.Toys
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Toys` object.)
       * </em>
       */
      R['updateOrCreate'] = R['upsert'];

      /**
       * @ngdoc method
       * @name lbServices.Toys#update
       * @methodOf lbServices.Toys
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * The number of instances updated
       */
      R['update'] = R['updateAll'];

      /**
       * @ngdoc method
       * @name lbServices.Toys#destroyById
       * @methodOf lbServices.Toys
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Toys` object.)
       * </em>
       */
      R['destroyById'] = R['deleteById'];

      /**
       * @ngdoc method
       * @name lbServices.Toys#removeById
       * @methodOf lbServices.Toys
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Toys` object.)
       * </em>
       */
      R['removeById'] = R['deleteById'];


      /**
      * @ngdoc property
      * @name lbServices.Toys#modelName
      * @propertyOf lbServices.Toys
      * @description
      * The name of the model represented by this $resource,
      * i.e. `Toys`.
      */
      R.modelName = 'Toys';


      return R;
  }]);


    module
  .factory('LoopBackAuth', function() {
      var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
      var propsPrefix = '$LoopBack$';

      function LoopBackAuth() {
          var self = this;
          props.forEach(function(name) {
              self[name] = load(name);
          });
          this.currentUserData = null;
      }

      LoopBackAuth.prototype.save = function() {
          var self = this;
          var storage = this.rememberMe ? localStorage : sessionStorage;
          props.forEach(function(name) {
              save(storage, name, self[name]);
          });
      };

      LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
          this.accessTokenId = accessTokenId;
          this.currentUserId = userId;
          this.currentUserData = userData;
      };

      LoopBackAuth.prototype.clearUser = function() {
          this.accessTokenId = null;
          this.currentUserId = null;
          this.currentUserData = null;
      };

      LoopBackAuth.prototype.clearStorage = function() {
          props.forEach(function(name) {
              save(sessionStorage, name, null);
              save(localStorage, name, null);
          });
      };

      return new LoopBackAuth();

      // Note: LocalStorage converts the value to string
      // We are using empty string as a marker for null/undefined values.
      function save(storage, name, value) {
          var key = propsPrefix + name;
          if (value == null) value = '';
          storage[key] = value;
      }

      function load(name) {
          var key = propsPrefix + name;
          return localStorage[key] || sessionStorage[key] || null;
      }
  })
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
        return {
            'request': function(config) {

                // filter out external requests
                var host = getHost(config.url);
                if (host && host !== urlBaseHost) {
                    return config;
                }

                if (LoopBackAuth.accessTokenId) {
                    config.headers[authHeader] = LoopBackAuth.accessTokenId;
                } else if (config.__isGetCurrentUser__) {
                    // Return a stub 401 error for User.getCurrent() when
                    // there is no user logged in
                    var res = {
                        body: {error: {status: 401}},
                        status: 401,
                        config: config,
                        headers: function() { return undefined; }
                    };
                    return $q.reject(res);
                }
                return config || $q.when(config);
            }
        };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#setAuthHeader
       * @methodOf lbServices.LoopBackResourceProvider
       * @param {string} header The header name to use, e.g. `X-Access-Token`
       * @description
       * Configure the REST transport to use a different header for sending
       * the authentication token. It is sent in the `Authorization` header
       * by default.
       */
      this.setAuthHeader = function(header) {
          authHeader = header;
      };

      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#setUrlBase
       * @methodOf lbServices.LoopBackResourceProvider
       * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
       * @description
       * Change the URL of the REST API server. By default, the URL provided
       * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
       */
      this.setUrlBase = function(url) {
          urlBase = url;
          urlBaseHost = getHost(urlBase) || location.host;
      };

      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#getUrlBase
       * @methodOf lbServices.LoopBackResourceProvider
       * @description
       * Get the URL of the REST API server. The URL provided
       * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
       */
      this.getUrlBase = function() {
          return urlBase;
      };

      this.$get = ['$resource', function($resource) {
          return function(url, params, actions) {
              var resource = $resource(url, params, actions);

              // Angular always calls POST on $save()
              // This hack is based on
              // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
              resource.prototype.$save = function(success, error) {
                  // Fortunately, LoopBack provides a convenient `upsert` method
                  // that exactly fits our needs.
                  var result = resource.upsert.call(this, {}, this, success, error);
                  return result.$promise || result;
              };
              return resource;
          };
      }];
  });

})(window, window.angular);
