## Filestructure: 

+-- bin
    +-- www.js ( server config )
+-- config
|   +-- mongodb.js ( mongodb config )
|   +-- util.js ( env vars configs )
+-- controllers ( controller middleware for specific routes )
+-- middlewares ( reusable middleware functions )
|   +-- errorHandler.js
|   +-- index.js
|   +-- rateLimiter.js
+-- models ( mongodb schemas )
|   +-- admin.js
|   +-- application.js
|   +-- company.js
+-- routes
|   +-- index.js
|   +-- api ( api routes )
+-- utils ( reusable utility functions )
|   +-- validationTools
|       +-- joiValidation.js
|   +-- customError.js
|   +-- customResponse.js
+-- app.js ( application config )
