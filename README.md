# Personal ePortfolio Website - MERN Stack

A modern, responsive personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring Tailwind CSS for styling and Framer Motion for smooth animations.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion and scroll-based animations
- **Dynamic Content**: Projects and skills loaded from MongoDB
- **Contact Form**: Functional contact form storing messages in MongoDB
- **Admin API**: REST API for managing projects and skills
- **Modern UI**: Clean, professional design with interactive elements
- **SEO Friendly**: Optimized for search engines

## Tech Stack

**Frontend:**

- React.js 19
- Tailwind CSS 3
- Framer Motion 10
- Axios for API calls
- Lucide React for icons
- Vite as build tool

**Backend:**

- Node.js
- Express.js 4
- MongoDB with Mongoose
- CORS enabled

## Project Structure

```
port/
├── src/                          # Frontend React application
│   ├── components/               # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/                  # React Context
│   │   └── ThemeContext.jsx      # Dark mode context
│   ├── hooks/                    # Custom hooks
│   │   ├── useTheme.js
│   │   └── useInView.js
│   ├── utils/                    # Utility functions
│   │   └── api.js               # API configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                # Tailwind CSS
│
├── server/                       # Backend Node/Express
│   ├── models/                   # MongoDB models
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Contact.js
│   ├── routes/                   # Express routes
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── contact.js
│   ├── controllers/              # Request handlers
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── contactController.js
│   ├── server.js                 # Express server entry point
│   ├── .env.example              # Environment variables example
│   └── package.json
│
├── package.json                  # Frontend dependencies
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .env.local                    # Frontend environment variables
└── README.md
```

## Quick Start

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Frontend Setup

1. Install frontend dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to server directory:

```bash
cd server
```

2. Install backend dependencies:

```bash
npm install
```

3. Create `.env` file:

```bash
cp .env.example .env
```

4. Update `.env` with your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

5. Start the backend server:

```bash
npm run dev  # Uses nodemon for auto-reload
```

The backend will be running at `http://localhost:5000`

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill
- `PATCH /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact

- `GET /api/contact` - Get all messages
- `POST /api/contact` - Submit contact form
- `PATCH /api/contact/:id/read` - Mark message as read
- `DELETE /api/contact/:id` - Delete message

## Available Scripts

### Frontend

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Backend

```bash
npm run dev      # Start with nodemon
npm start        # Start with node
```

## Customization

### Adding Projects

Make a POST request to `/api/projects`:

```javascript
{
  "title": "Project Name",
  "description": "Project description",
  "image": "image-url",
  "technologies": ["React", "Node.js"],
  "link": "https://project-link.com",
  "github": "https://github.com/user/repo",
  "featured": true,
  "order": 1
}
```

### Adding Skills

```javascript
{
  "category": "Frontend",  // Frontend, Backend, Database, Tools, Other
  "name": "React",
  "icon": "⚛️",
  "level": 90,
  "order": 1
}
```

## Deployment

### Frontend (Vercel/Netlify)

1. Push to GitHub
2. Connect repository to Vercel/Netlify
3. Set `VITE_API_URL` environment variable
4. Deploy

### Backend (Heroku/Railway)

1. Deploy Node.js server
2. Set environment variables
3. Connected MongoDB Atlas

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
