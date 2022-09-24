import logging
from typing import Counter
from flask import Flask
from flask import render_template # to render our html page
from flask import request # to get user input from form
from flask import Flask, session, redirect, url_for, escape, request

import hashlib # included in Python library, no need to install
import psycopg2 # for database connection
import db

app = Flask(__name__)
app.secret_key = "27eduCBA09"
conn = psycopg2.connect("postgresql://chantal:onehacks2022@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Donehacks-backend-2776")
