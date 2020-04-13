create database if not exists eca_database;

create user if not exists 'eca_user'@'localhost' identified by 'eca_password';

grant all on eca_database.* to 'eca_user'@'localhost';
