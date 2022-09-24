from collections import defaultdict

import json
import time
import random
import logging
import os
from argparse import ArgumentParser, RawTextHelpFormatter
import logging

import psycopg2
from psycopg2.errors import SerializationFailure

conn = psycopg2.connect("postgresql://chantal:teachershack2@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?options=--cluster%3Dteacherhacks2-3291&sslmode=verify-full&sslrootcert=%2Fhome%2Fchantal%2F.postgresql%2Froot.crt")




def user_info(conn):
    with conn.cursor() as cur:
        cur.execute(
             "CREATE TABLE IF NOT EXISTS user_info ( id SERIAL NOT NULL PRIMARY KEY, latitude FLOAT NOT NULL, longitude FLOAT NOT NULL, createdAt DATE NOT NULL,updatedAt DATE NOT NULL)")
      
        logging.debug("user_info(): status message: %s",
                      cur.statusmessage)
       
    
    conn.commit()  





user_info(conn)