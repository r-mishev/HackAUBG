from flask import Flask

blueprints = []

def register_blueprints(app: Flask) -> None:
    for blueprint in blueprints:
        app.register_blueprint(blueprint, url_prefix="/api/v1")