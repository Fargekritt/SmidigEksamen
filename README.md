# SmidgeEksamen
Smidge eksamen

# Set up av docker

## Om port 3306 er ledig
```
docker run --name munchMoment-mysqlserver -e MYSQL_ROOT_PASSWORD=MadridGang69 -p 3306:3306 -d mysql:latest
```

## Sette opp databasen
Docker -> munchMoment-mysqlserver -> terminal

```
mysql -p
MadridGang69
Create Database 
```