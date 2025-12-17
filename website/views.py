from flask import Blueprint, render_template, request, redirect, url_for, jsonify, flash
views = Blueprint('views', __name__)
from . import mail, Message
# from .models import ContactSubmission

@views.route("/")
def home():
    return render_template('index.html')

@views.route("/#contact")

@views.route("/create-form", methods=['GET', 'POST'])
def send_email():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message(
            subject='Contact Me Form Submission',
            sender='Portfolio@mcbeehive.org',
            recipients=['yibro.i2001@gmail.com']
        )
        
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)
        flash('Message sent successfully!', 'success')
    return render_template('index.html')
