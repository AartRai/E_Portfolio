# Portfolio ePortfolio - Setup & Development Guide

## Project Overview

Your personal portfolio website has been built using the MERN stack with the following modern features:

### ✨ Key Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Smooth Animations** - Framer Motion for page transitions and interactions
- **Dynamic Content** - Projects and skills loaded from MongoDB
- **Contact Form** - Functional form with MongoDB storage
- **Admin API** - REST endpoints for managing portfolio content
- **Modern UI** - Tailwind CSS with custom animations
- **Scroll Animations** - Elements animate as they come into view

## Quick Start Guide

### Prerequisites

Make sure you have installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Step 1: Install Dependencies

**Frontend:**

```bash
cd /Users/deepakrai/Desktop/port
npm install
```

**Backend:**

```bash
cd server
npm install
```

### Step 2: Configure Environment Variables

**Backend (.env):**

```bash
cd server
cp .env.example .env
```

Then edit `server/.env` with your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
Replace MONGODB_URI with:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

**Frontend (.env.local):** (Already created)

```
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start MongoDB

**For Local MongoDB:**

```bash
# In a new terminal window
mongod
```

**For MongoDB Atlas:**

- No local setup needed, just ensure your IP is whitelisted

### Step 4: Seed Sample Data (Optional)

```bash
cd server
npm run seed
```

This will populate your database with sample projects and skills.

### Step 5: Start the Development Servers

**Terminal 1 - Backend Server:**

```bash
cd /Users/deepakrai/Desktop/port/server
npm run dev
```

You should see:

```
✓ MongoDB connected successfully
🚀 Server running on http://localhost:5000
```

**Terminal 2 - Frontend Server:**

```bash
cd /Users/deepakrai/Desktop/port
npm run dev
```

You should see:

```
VITE v8.0.0  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Step 6: Open in Browser

Navigate to: **http://localhost:5173**

## Project Structure

```
port/
├── src/                           # Frontend React app
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with dark mode
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills with progress bars
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer with social links
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark mode state
│   ├── hooks/
│   │   ├── useTheme.js         # Theme hook
│   │   └── useInView.js        # Intersection observer hook
│   ├── utils/
│   │   └── api.js              # Axios API configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind CSS
│
├── server/                        # Backend Express app
│   ├── models/
│   │   ├── Project.js          # Project schema
│   │   ├── Skill.js            # Skill schema
│   │   └── Contact.js          # Contact message schema
│   ├── routes/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── contact.js
│   ├── controllers/
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── contactController.js
│   ├── server.js               # Express server
│   ├── seed.js                 # Database seeding
│   ├── .env                    # Server config
│   └── package.json
│
├── package.json                # Frontend deps
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .env.local
└── README.md
```

## Available Commands

### Frontend

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Backend

```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start with node
npm run seed     # Populate database with sample data
```

## API Documentation

### Projects Endpoints

**Get All Projects**

```
GET /api/projects
```

**Get Featured Projects**

```
GET /api/projects/featured
```

**Get Single Project**

```
GET /api/projects/:id
```

**Create Project**

```
POST /api/projects
Content-Type: application/json

{
  "title": "Project Name",
  "description": "Project description",
  "image": "https://image-url.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "link": "https://project-link.com",
  "github": "https://github.com/user/repo",
  "featured": true,
  "order": 1
}
```

**Update Project**

```
PATCH /api/projects/:id
```

**Delete Project**

```
DELETE /api/projects/:id
```

### Skills Endpoints

**Get All Skills**

```
GET /api/skills
```

**Get Skills by Category**

```
GET /api/skills/category/:category
Categories: Frontend, Backend, Database, Tools, Other
```

**Create Skill**

```
POST /api/skills

{
  "category": "Frontend",
  "name": "React",
  "icon": "⚛️",
  "level": 90,
  "order": 1
}
```

**Update/Delete Skills**

```
PATCH /api/skills/:id
DELETE /api/skills/:id
```

### Contact Endpoints

**Submit Contact Form**

```
POST /api/contact

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss your services..."
}
```

**Get All Messages** (Admin)

```
GET /api/contact
```

**Mark as Read** (Admin)

```
PATCH /api/contact/:id/read
```

**Delete Message** (Admin)

```
DELETE /api/contact/:id
```

## Customization Guide

### Adding a Project

1. **Via MongoDB directly:**
   - Open MongoDB Compass or Atlas Dashboard
   - Navigate to your portfolio database
   - Go to Projects collection
   - Insert a new document with the required fields

2. **Via API (using Postman/curl):**
   ```bash
   curl -X POST http://localhost:5000/api/projects \
     -H "Content-Type: application/json" \
     -d '{
       "title": "My Awesome Project",
       "description": "A detailed description...",
       "image": "https://...",
       "technologies": ["React", "Node.js"],
       "link": "https://...",
       "github": "https://...",
       "featured": true,
       "order": 1
     }'
   ```

### Updating Personal Information

1. **About Section** - Edit `src/components/About.jsx`
2. **Contact Info** - Update `src/components/Footer.jsx`
3. **Social Links** - Modify links in Footer component
4. **Resume** - Add a resume file and link in Contact section

### Changing Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
  },
},
```

### Adding New Animations

In `src/components/YourComponent.jsx`:

```javascript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content here
</motion.div>;
```

## Troubleshooting

### MongoDB Connection Error

**Error:** `"MongoDB connection error"`

**Solution:**

1. Ensure MongoDB is running: `mongod`
2. Check connection string in `.env`
3. Verify database name: `portfolio`
4. For Atlas, check IP whitelist

### Port Already in Use

**Error:** `"Port 5000 already in use"`

**Solution:**

```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### CORS Error

**Error:** `"Access to XMLHttpRequest blocked by CORS"`

**Solution:**

1. Check `CLIENT_URL` in server `.env`
2. Ensure it matches your frontend URL
3. Verify CORS is enabled in `server.js`

### Dependencies Issue

**Error:** `"Module not found"`

**Solution:**

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Deployment

### Deploy Frontend (Vercel)

1. Push code to GitHub
2. Go to vercel.com, sign up/in
3. Click "New Project"
4. Select your GitHub repository
5. Set environment variable:
   ```
   VITE_API_URL=https://your-backend-url/api
   ```
6. Click "Deploy"

### Deploy Backend (Railway/Heroku)

1. Create account on railway.app
2. Connect your GitHub repository
3. Set environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   CLIENT_URL=https://your-frontend-url
   NODE_ENV=production
   ```
4. Deploy

### Database (MongoDB Atlas)

1. Go to mongodb.com
2. Create free cluster
3. Get connection string
4. Add IP whitelist
5. Use string in deployment

## Performance Tips

✅ Images are lazy-loaded
✅ Use Tailwind CSS for styling (less code)
✅ Code is split by components
✅ Animations use GPU acceleration
✅ Database queries are optimized

## Next Steps

1. **Customize Content:**
   - Update your bio in About section
   - Add your real projects
   - Update skills based on your experience

2. **Add Your Information:**
   - Replace placeholder images
   - Update social media links
   - Add your contact information

3. **Configure Email Notifications (Optional):**
   - Set up Nodemailer for contact form emails
   - Add environment variables for email config

4. **Deploy to Production:**
   - Follow deployment guides above
   - Set up custom domain
   - Enable HTTPS

## Need Help?

- Check MongoDB documentation: docs.mongodb.com
- React docs: react.dev
- Tailwind CSS: tailwindcss.com
- Express.js: expressjs.com
- Framer Motion: framer.com/motion

---

**Happy coding! 🚀**
