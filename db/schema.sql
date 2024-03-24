DROP DATABASE IF EXISTS booklist_db;
CREATE DATABASE booklist_db;

\c booklist_db;

CREATE TABLE book(
    id INTEGER PRIMARY KEY NOT NULL, 
    olid VARCHAR,
    ocls VARCHAR,
    title VARCHAR,
    author VARCHAR,
    pages INTEGER,
    year INTEGER
)