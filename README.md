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
