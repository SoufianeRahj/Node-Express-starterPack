# Node-Express-starterPack
Basic Express application on Node with error handling middleware and utility class

This application includes squeleton for CRUD operation on a resource and its subresource.
The data is not persisted anyware, the route handlers only returns an empty response with the right status code.
This squeleton also includes a global error handling middleware and an Error utility class.

The logging in the application is done via morgan in dev env only for the moment.
The security of the application is managed through the following libs: 
- helmet
- hpp
- xss-clean
- express-rate-limit
