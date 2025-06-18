# 🎬 Movie Explorer App

A clean, responsive React app that fetches and displays movie details using the OMDB API. Built with a secure Node.js backend that keeps your API key safe.

---

## 📦 Tech Stack
____________________________________________________
| Layer      | Tech                                 |
|------------|--------------------------------------|
| Frontend   | React (Vite)                         |
| Backend    | Express                              |
| Styling    | Custom CSS                           |
| Hosting    | Netlify (frontend), Render (backend) |
| API        | OMDB API                             |
-----------------------------------------------------
---

## 🚀 Features

- 🔍 Search for any movie by title
- 🖼️ View poster, year, genre, plot, actors, rating
- ⚡ Fast and mobile-friendly UI
- 🔐 API key stays secure (stored in backend)

---

## 📁 Project Structure

```
movie-explorer/
├── frontend/       # React app (Vite)
│   └── src/
│       ├── App.jsx
│       └── components/MovieCard.jsx
│
├── backend/        # Express server
│   ├── server.js
│   ├── routes/movie.js
│   └── .env        # contains OMDB_API_KEY (not committed)
```

---

## 🔐 Setup OMDB API

1. Go to https://www.omdbapi.com/apikey.aspx
2. Get your free API key
3. In `/backend/.env`, add:

```
OMDB_API_KEY=your_key_here
```

---

## 🧠 How It Works

1. User types a movie name in the search bar
2. React frontend sends request to backend like:
   ```
   GET /api/movie?title=inception
   ```
3. Backend hits OMDB API with your secret key and returns data to frontend
4. Frontend renders movie details

---

## 🧪 Development Commands

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
node server.js
```

---

## 🌐 Deployment

### Netlify (Frontend)
- Set build command: `npm run build`
- Set publish directory: `dist`

### Render (Backend)
- Connect backend GitHub repo
- Set build command: `npm install`
- Start command: `node server.js`
- Add env var: `OMDB_API_KEY = your_key_here`
