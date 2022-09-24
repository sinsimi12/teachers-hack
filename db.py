
import logging

import psycopg2

conn = psycopg2.connect("postgresql://chantal:teachershack2@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?options=--cluster%3Dteacherhacks2-3291&sslmode=verify-full&sslrootcert=%2Fhome%2Fchantal%2F.postgresql%2Froot.crt")


def user(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS user_info (id SERIAL NOT NULL PRIMARY KEY, userId INTEGER NOT NULL, first_name VARCHAR(100), last_name VARCHAR(100), email VARCHAR(100), schoolId INTEGER NOT NULL, createdAt DATE NOT NULL, updatedAt DATE NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  


def school(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS school ( id SERIAL NOT NULL PRIMARY KEY, latitude FLOAT NOT NULL, longitude FLOAT NOT NULL, createdAt DATE NOT NULL,updatedAt DATE NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  


def logs(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS logs (id SERIAL NOT NULL PRIMARY KEY, userId INT NOT NULL, timeIn DATE NOT NULL, timeOut DATE NOT NULL, createdAt DATE NOT NULL, updatedAt DATE NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  

def token(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS token (id SERIAL NOT NULL PRIMARY KEY, userId INTEGER NOT NULL, token VARCHAR(180) NOT NULL, createdAt DATE NOT NULL, updatedAt DATE NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit() 





def phrase(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS phrase ( id SERIAL NOT NULL PRIMARY KEY, school VARCHAR(100) NOT NULL, phrase VARCHAR(100) NOT NULL,  createdAt DATE NOT NULL, updatedAt DATE NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       


school(conn)
logs(conn)
user(conn)
phrase(conn)
token(conn)