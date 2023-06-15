# SmidgeEksamen
Smidge eksamen

# Set up av docker
## Setup databasen
```
docker run --name munchMoment-mysqlserver -e MYSQL_ROOT_PASSWORD=MadridGang69 -p 3306:3306 -d mysql:latest
```
Docker -> munchMoment-mysqlserver -> terminal

```
mysql -p
MadridGang69
Create Database 
```

# How to Test the Application
The application can be tested both locally and from the cloud (Azure). The experience of using the app from the cloud can be a bit “laggy”, so we recommend testing it locally.
## Test in cloud
When entering the website it can take a few minutes for the servers to start.
https://munchmoment-win.azurewebsites.net/
## Test locally
* Set up database
    * You will need a MySql database at localhost:3306, with a user “root” and password “MadridGang69”
    * docker run --name munchMoment-mysqlserver -e MYSQL_ROOT_PASSWORD=MadridGang69 -p 3306:3306 -d mysql:latest
    * Then create a database called munch_moment
    * If using docker, go to terminal for the container
    ```
    mysql -p
    MadrigGang69
    Create Database munch_moment;
  ```

    * Tables and data will be created and filled with some example data automatically when starting the server.
* build the frontend
  * go to the “frontend” directory and run
  * npm install
  * npm run build
  * Then you can start the java server and go to localhost:8080
  * You can package the server to a jar file, but should not be needed
