from flask import Flask
from flask_cors import CORS

from python_server.config import Config
from .routes.routes import register_blueprints

def create_app() -> Flask:
    app = Flask(__name__, instance_relative_config=True)
    CORS(app, resources={r"/api/v1/*": {"origins": ["http://localhost:5173",
                                                    "http://127.0.0.1:5173"]}}, supports_credentials=True)

    app.config.from_object(Config)
    register_blueprints(app)

    return app

app = create_app()

def start() -> None:
    app.run(host="0.0.0.0", port=6969)