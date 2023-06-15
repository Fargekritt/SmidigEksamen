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