import logging
import flask
from typing import Counter
from flask import Flask
from flask import render_template # to render our html page
from flask import request # to get user input from form
from flask import Flask, session, redirect, url_for, escape, request, jsonify
from datetime import datetime


import hashlib # included in Python library, no need to install
import psycopg2 # for database connection
import db

app = Flask(__name__)
conn = psycopg2.connect("postgresql://chantal:xiXr56AQQTuedmwvGioyBQ@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dteacherhacks2-3291")

# User register route
@app.route('/register')
def register_user():
    return "Hello World"

# User login route
@app.route('/login')
def login_user():
    return

# Read logs:id route 
@app.route('/logs/<int:userId>')
def get_logs_by_id(userId):
    results = db.select_logs_by_id(userId, conn)
    response = []
    for result in results:
        log = {
            'id': result[0],
            'userId': result[1],
            'timeIn': result[2],
            'timeOut': result[3],
            'createdAt': result[4],
            'updatedAt': result[5]
        }
        response.append(log)

    return { 'response': response }


# 
@app.route('/teachers/<school>')
def get_teachers_by_school(school):
    return

@app.route('/phrase/<school>', methods = ['GET', 'POST'])
def phrase_by_school(school):
    if request.method == 'GET':
        return
    if request.method == 'POST':
        return

@app.route('/stats')
def get_stats():
    return
   
# Create log route
@app.route("/api/activity", methods=["POST", "GET"])
def placeholder():
    


    if flask.request.method == "POST":
        now = datetime.now()
        id =  request.args.get('userId')
        timeIn =  request.args.get('timeIn')
        timeOut =  request.args.get('timeOut')
        data = request.data
        print(id)
        print(timeIn)
        print(timeOut)
        print(data)
        createdAt = now.strftime("%d/%m/%Y %H:%M:%S")
        updatedAt = now.strftime("%d/%m/%Y %H:%M:%S")
        if timeIn is not None and timeOut is not None:
            db.create_logs(conn, userId=id, timeIn=timeIn, timeOut=timeOut, createdAt='2022-03-24 04:05:08', updatedAt='2022-03-24 04:05:08')


        # log = {
        #     'userId': id,
        #     'timeIn': timeIn,
        #     'timeOut': timeOut,
        #     createdAt: createdAt,
        #     updatedAt: updatedAt
        # }
       
        
        return "ok"







#curl -X POST http://localhost:5000/api/activity -H 'Content-Type: application/json' -d  '{"userId":1" , "timeIn":"2022-03-24 04:05:06", "timeOut":"2022-03-24 04:05:06"}'