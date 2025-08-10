# 🚀 Algogenix

**Full-Stack Web Application with Flask, PostgreSQL, and Render Deployment**

Algogenix is a modern full-stack web application showcasing portfolio projects and featuring a fully functional contact form that stores submissions in a PostgreSQL database. Deployed using **Render** with a free-tier setup, the app demonstrates scalable architecture and seamless database integration.

---

## 📌 Features

* **Modern UI** with responsive design.
* **Contact Form**: Securely stores form submissions in PostgreSQL.
* **Portfolio Section**: Displays featured projects dynamically.
* **Deployed on Render** with auto-redeploy from GitHub.
* **Persistent Database**: Hosted on Render’s PostgreSQL instance and viewable in TablePlus.

---

## 🛠 Tech Stack

### **Frontend**

* HTML5, CSS3, JavaScript
* Bootstrap (Responsive UI components)
* Custom animations and styles

### **Backend**

* Python 3.x
* Flask (Web framework)
* Jinja2 (Templating engine)

### **Database**

* PostgreSQL (Hosted on Render)
* SQLAlchemy ORM (Flask-SQLAlchemy for DB operations)

### **Deployment & Tools**

* Render (Web service hosting + PostgreSQL database)
* Gunicorn (WSGI HTTP Server for production)
* TablePlus (GUI database management tool)
* Git & GitHub (Version control and deployment integration)

---

## 📂 Project Structure

```
Algogenix/
│
├── app.py                # Main Flask application
├── requirements.txt      # Python dependencies
├── Procfile              # Render deployment entry point
├── templates/            # HTML templates (Jinja2)
├── static/               # CSS, JS, images
├── README.md             # Project documentation
└── ...
```

---

## ⚙️ Setup & Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/algogenix.git
   cd algogenix
   ```

2. **Create a virtual environment & install dependencies**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set environment variables**

   ```bash
   export FLASK_SECRET_KEY="your_secret_key"
   export DATABASE_URL="your_postgresql_url"
   ```

4. **Run the app**

   ```bash
   flask run
   ```

---

## 🌐 Deployment

* **Platform**: Render
* **Database**: Render PostgreSQL (external connection via TablePlus)
* Automatic redeploys triggered on push to `main` branch in GitHub.

---

## 📸 Screenshots

*(Add app screenshots here)*

---

## 👩‍💻 Author

**Algogenix Team** — Building innovative web solutions.

---


______________________________________________________________________________________________


# AlgoGenix — Portfolio Website

This is a modern, dark-themed portfolio website for AlgoGenix built with Flask (Python) and a PostgreSQL-compatible database.
The project includes:
- Responsive frontend (HTML/CSS/JS)
- Flask backend with a Contact model to store form submissions
- Example projects and placeholder images

LIVE AT - https://algogenix.onrender.com

## Files & Structure

```
AlgoGenix/
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/*.svg
├── templates/
│   ├── base.html
│   └── index.html
├── app.py
├── requirements.txt
└── README.md
```

## Quick start (local development)

1. Create a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate    # macOS / Linux
   venv\Scripts\activate     # Windows (PowerShell)
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. (Optional) Configure environment variables:
   - `DATABASE_URL` — set to your PostgreSQL URI for production, e.g.
     `postgresql://user:pass@host:5432/algogenix_db`
   - `FLASK_SECRET_KEY` — a secret for session signing

   If `DATABASE_URL` is not set, the app will use a local SQLite database `algogenix_dev.db` for easy testing.

4. Initialize the database and run:
   ```bash
   python app.py
   ```

5. Open your browser at `http://127.0.0.1:5000`

## Deploying to production
- Set `DATABASE_URL` to your managed PostgreSQL database.
- Use a production WSGI server (gunicorn/uwsgi) and set `FLASK_SECRET_KEY`.
- Consider platforms like Render, Railway, or any provider that supports Python + PostgreSQL.

## Notes
- Replace placeholder images in `static/images` with your real project thumbnails.
- Add real project entries in `app.py` or extend the app to load projects from the database.
