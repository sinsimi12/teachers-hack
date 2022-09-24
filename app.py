import logging
import flask
from typing import Counter
from flask import Flask
from flask import render_template # to render our html page
from flask import request # to get user input from form
from flask import Flask, session, redirect, url_for, escape, request

import hashlib # included in Python library, no need to install
import psycopg2 # for database connection
import db

app = Flask(__name__)
conn = psycopg2.connect("postgresql://chantal:teachershack2@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?options=--cluster%3Dteacherhacks2-3291&sslmode=verify-full&sslrootcert=%2Fhome%2Fchantal%2F.postgresql%2Froot.crt")



app.route("/logs")
def select_logs_by_id():
     userId = flask.request.args.get('userId')
     result = db.select_logs_by_id(conn, userId=userId)

     jresult = {
            'activity': result[0],
            # 'category': result[1]
        }

     print(jresult)