import os 
from flask import Flask
from os import path
from flask_mail import Mail, Message

mail = Mail()

def create_app():
    app = Flask(__name__)
    from .views import views
    app.config['DEBUG'] = True

    # mail config
    app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
    app.config['MAIL_PORT'] = os.environ.get('MAIL_PORT')
    app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USE_SSL'] = False
    app.config['SECRET_KEY'] = os.urandom(24)
    
    # initialise extensions
    mail.init_app(app)

    # Register blueprints
    app.register_blueprint(views, url_prefix="/")

    return app


    