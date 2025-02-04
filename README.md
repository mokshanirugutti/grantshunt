
# Grants Management System

A modern web application that helps organizations discover and manage grant opportunities. The platform provides personalized grant recommendations based on organization profiles and streamlines the grant search process.

## Features

- 🔍 Smart grant search with filtering options
- 👥 Organization profile management
- 💡 Personalized grant recommendations
- 🌙 Dark/Light theme support
- 📱 Responsive design
- 🔒 Secure authentication
- ⚡ Fast and modern tech stack

## Tech Stack

### Frontend
- React 18.3 with TypeScript
- Vite for fast development and building
- TailwindCSS for styling
- NextUI & Shadcn UI for components
- React Router for navigation
- Axios for API requests
- Framer Motion for animations
- Lottie for interactive animations

### Backend
- Django 4.2
- Django REST Framework for API
- PostgreSQL database
- Django CORS Headers for cross-origin requests
- Django Seed for development data

## Getting Started

### Prerequisites
- Node.js (v16+)
- Python 3.8+
- PostgreSQL

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv env

# Activate virtual environment
source env/bin/activate  # On Windows use: env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Environment Variables

Frontend `.env`:
```env
VITE_API_URL=http://localhost:8000
```

Backend `.env`:
```env
DJANGO_SECRET_KEY=
DJANGO_DEBUG=
DB_ENGINE=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

## API Endpoints

- `POST /register/` - Organization registration
- `POST /login/` - Organization login
- `GET /grants/` - List all grants
- `GET /grants/<id>/` - Get specific grant details

