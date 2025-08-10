import os
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'dev-secret-key')

# Database config:
DATABASE_URL = os.environ.get('DATABASE_URL')
# Render gives "postgres://" but SQLAlchemy needs "postgresql://"
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

if DATABASE_URL:
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
else:
    # Fallback to local SQLite for quick testing
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///algogenix_dev.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# Contact model to store form submissions
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    message = db.Column(db.Text, nullable=False)
    date_submitted = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Contact {self.id} {self.email}>"
    
# Create tables after models are defined
with app.app_context():
    db.create_all()
    

# Load projects from a simple in-memory list for demonstration.
# You can replace this with dynamic content or a database table.
projects = [
    {
        "name": "AI Chatbot",
        "description": "GPT-powered conversational assistant integrated into web and messaging platforms.",
        "image": "/static/images/project1.svg"
    },
    {
        "name": "E-commerce Platform",
        "description": "Full-stack e-commerce platform with secure payments and admin dashboard.",
        "image": "/static/images/project2.svg"
    },
    {
        "name": "Portfolio Website",
        "description": "Modern, responsive portfolio sites with smooth animations and CMS integration.",
        "image": "/static/images/project3.svg"
    }
]

@app.context_processor
def inject_now():
    return {'current_year': datetime.now().year}

@app.route('/')
def index():
    return render_template('index.html', projects=projects)

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    if not name or not email or not message:
        flash('Please fill all fields before submitting.', 'error')
        return redirect(url_for('index') + '#contact')

    # Save to DB
    new_contact = Contact(name=name, email=email, message=message)
    db.session.add(new_contact)
    db.session.commit()

    flash('Thank you — your message has been received!', 'success')
    return redirect(url_for('index') + '#contact')

if __name__ == '__main__':
    # Create DB tables if they don't exist (safe for local dev)
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)