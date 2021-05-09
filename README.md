Step 1 : Install Visual Studio Code editor and Node.js

Step 2 : Create an account on MongoDB atlas. In MongoDB atlas, go to cluster; then go to connect after that select connect your application. From there copy the URL and replace this URL from mongodb.connect (in server.js file in service-backend folder)

Step 3 : Install node-modules in root directory

         Command : npm install node-modules
         
Step 4 : Install node-modules in service-backend folder(Change directory cd src/service-backend)

         Command : npm install node-modules

Step 5 : Now open project folder in Command Prompt or Git Bash (keep open MongoDB atlas in background)
         
Step 6 : Install nodemon globally

         Command : npm install -g nodemon
         
Step 7 : Now change the directory
              
         Command : cd src/service-backend
         
Step 8 : Run server.js file
         
         Command : nodemon server.js

Step 9 : Go to root directory and run react app in Visual Studio terminal
         
         Command : npm start

