
import logging
from socket import create_server

import psycopg2

conn = psycopg2.connect("postgresql://chantal:xiXr56AQQTuedmwvGioyBQ@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dteacherhacks2-3291")


def user_info(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS user_info (id SERIAL NOT NULL PRIMARY KEY, userId INTEGER NOT NULL, first_name VARCHAR(100), last_name VARCHAR(100), email VARCHAR(100), schoolId INTEGER NOT NULL, createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  


def school(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS school ( id SERIAL NOT NULL PRIMARY KEY, latitude FLOAT NOT NULL, longitude FLOAT NOT NULL, createdAt TIMESTAMP NOT NULL,updatedAt TIMESTAMP NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  


def logs(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS logs (id SERIAL NOT NULL PRIMARY KEY, userId INT NOT NULL, timeIn TIMESTAMP NOT NULL, timeOut TIMESTAMP NOT NULL, createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  

def token(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS token (id SERIAL NOT NULL PRIMARY KEY, userId INTEGER NOT NULL, token VARCHAR(180) NOT NULL, createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit() 





def phrase(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS phrase ( id SERIAL NOT NULL PRIMARY KEY, school VARCHAR(100) NOT NULL, phrase VARCHAR(100) NOT NULL,  createdAt TIMESTAMP NOT NULL, updatedAt TIMESTAMP NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)



    conn.commit() 



def create_logs(conn, timeIn, timeOut, userId, createdAt, updatedAt):
    with conn.cursor() as cur:
        cur.execute(
              f"INSERT INTO logs (timeIn, timeOut, userId, createdAt, updatedAt) VALUES ('{timeIn}', '{timeOut}', '{userId}', '{createdAt}', '{updatedAt}')")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)


    conn.commit() 



def select_logs_by_id(userId, conn):
    with conn.cursor() as cur:
        cur.execute(
              f"SELECT * FROM logs WHERE userId = '{userId}' ")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)

        result = cur.fetchall()

    
        conn.commit() 
        return result


def generate_phrase(conn, school, phrase, createdAt, updatedAt):
    with conn.cursor() as cur:
        cur.execute(
            f"INSERT INTO phrase (school, phrase, createdAt, updatedAt) VALUES ('{school}', '{phrase}', '{createdAt}', '{updatedAt}')")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)

    conn.commit() 


def passphrase_by_school(school, conn):
    with conn.cursor() as cur:
        cur.execute(
              f"SELECT phrase, id FROM phrase WHERE school = '{school}'")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)

        result = cur.fetchall()
    
        conn.commit() 
        print(result)


# school(conn)
# logs(conn)
# user_info(conn)
# phrase(conn)
# token(conn)
# create_logs(timeIn='2022-03-24 04:05:06',timeOut='2022-03-24 04:05:08', userId=1 , createdAt='2022-03-24 04:05:08', updatedAt='2022-03-24 04:05:08', conn=conn)
# generate_phrase(conn, 'De La Salle - College of Saint Benilde', 'test', '2022-03-24 04:05:06', '2022-03-24 04:05:06')
# generate_phrase(conn=conn, school="De La Salle College of Saint Benilde", phrase="test", createdAt=""2022-03-24 04:05:06"", updatedAt="2022-03-24 04:05:06")

# passphrase_by_school(school='De La Salle - College of Saint Benilde', conn=conn)