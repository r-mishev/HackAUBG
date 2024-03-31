import pyrebase
from flask import Flask
from flask_cors import CORS

from python_server.config import Config
from joblib import dump
from python_server.routes.routes import register_blueprints

config = {
    "apiKey": "AIzaSyDnvtPLTwv9Jpji0x2Bb3AXDPR5NjI6czs",
    "authDomain": "backend-bucket.firebaseapp.com",
    "projectId": "backend-bucket",
    "storageBucket": "backend-bucket.appspot.com",
    "messagingSenderId": "973662970757",
    "appId": "1:973662970757:web:6bde919ad90f66f1ea1aec",
    "measurementId": "G-LC7M1F4PLN",
    "databaseURL": "https://backend-bucket-default-rtdb.europe-west1.firebasedatabase.app"
}

firebase = pyrebase.initialize_app(config)
storage =  firebase.storage()
dump(storage, 'storage.joblib')

def create_app() -> Flask:
    app = Flask(__name__, instance_relative_config=True)
    CORS(app, resources={r"/api/v1/*": {"origins": ["http://localhost:5173",
                                                    "http://127.0.0.1:5173"]}}, supports_credentials=True)

    app.config.from_object(Config)
    register_blueprints(app)

    return app

app = create_app()

def start() -> None:
    app.run(host="0.0.0.0", port=8080)
