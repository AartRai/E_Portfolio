# Development & Testing Checklist

## Pre-Deployment Checklist

### Frontend

- [ ] Navigation bar displays correctly
- [ ] Dark/Light mode toggle works
- [ ] All sections display (Hero, About, Skills, Projects, Contact)
- [ ] Animations play smoothly
- [ ] Responsive design works on mobile (test with DevTools)
- [ ] Images load properly
- [ ] Links in footer work
- [ ] Contact form submits successfully (check browser console)
- [ ] No console errors

### Backend

- [ ] MongoDB connection successful
- [ ] Server starts without errors
- [ ] Health check endpoint responds: `GET /api/health`
- [ ] All routes defined: projects, skills, contact
- [ ] Database collections created (projects, skills, contacts)

### API Testing

**Test with curl or Postman:**

1. **Test Backend Health:**

   ```bash
   curl http://localhost:5000/api/health
   ```

   Expected: `{"status":"Server is running"}`

2. **Get All Projects:**

   ```bash
   curl http://localhost:5000/api/projects
   ```

   Expected: Array of projects (or empty array)

3. **Get All Skills:**

   ```bash
   curl http://localhost:5000/api/skills
   ```

   Expected: Array of skills (or empty array)

4. **Submit Contact Form:**

   ```bash
   curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "subject": "Test Message",
       "message": "This is a test message"
     }'
   ```

   Expected: Success response with created message

5. **Create Project:**
   ```bash
   curl -X POST http://localhost:5000/api/projects \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Test Project",
       "description": "Test description",
       "image": "https://via.placeholder.com/600x400",
       "technologies": ["React", "Node.js"],
       "link": "https://example.com",
       "github": "https://github.com/user/repo",
       "featured": true,
       "order": 1
     }'
   ```
   Expected: Created project object with \_id

### Frontend-Backend Integration

- [ ] Projects load from API and display on page
- [ ] Skills load from API and display with progress bars
- [ ] Contact form submits and receives success message
- [ ] Animations don't conflict with data loading
- [ ] Images in projects load correctly
- [ ] Error handling works (try with wrong API URL)

### Browser Compatibility

Test in:

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance

- [ ] Page load time < 3 seconds
- [ ] Smooth scrolling (no jank)
- [ ] Animations are smooth (60 FPS)
- [ ] No layout shift while loading images
- [ ] Console shows no memory leaks (check DevTools)

## Manual Testing Steps

### 1. Home Page

```
Steps:
1. Open http://localhost:5173
2. Check hero section displays
3. Click "View My Work" - should scroll to projects
4. Click "Get In Touch" - should scroll to contact
5. Check theme toggle in navbar
```

### 2. Navigation

```
Steps:
1. Click each nav item (Home, About, Skills, Projects, Contact)
2. Verify smooth scroll to section
3. Check mobile menu on small screens
4. Verify nav is sticky/follows scroll
```

### 3. Animations

```
Steps:
1. Scroll down page
2. Observe fade-in and slide-up animations
3. Try theme toggle - transitions should be smooth
4. Hover on project cards - image should scale
```

### 4. Responsive Design

```
Browser DevTools:
1. Set viewport to mobile (375px)
2. Check text is readable
3. Check buttons are clickable (>44px)
4. Check navigation works
5. Test tablet size (768px)
6. Test desktop (1024px+)
7. Check nav, images, forms at each size
```

### 5. Contact Form

```
Steps:
1. Fill in name: "John Doe"
2. Fill in email: "john@example.com"
3. Fill in subject: "Test"
4. Fill in message: "Test message"
5. Click Send
6. Check success message appears
7. Check validation:
   - Try submit with empty fields
   - Try with invalid email
   - Verify errors show
```

### 6. Dark Mode

```
Steps:
1. Load page (check if respects system preference)
2. Click moon icon to toggle to dark
3. Verify colors change
4. Check readability
5. Refresh page - dark mode should persist
6. Check localStorage has theme value
```

### 7. Database

```
Steps:
1. Add project via API
2. Refresh page - new project should appear
3. Check MongoDB for new entries
4. Submit contact form
5. Check MongoDB for new message
6. Verify message marked as unread
```

## Performance Testing

### Lighthouse Audit

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO
4. Aim for scores > 90

### Network Testing

1. Open DevTools > Network tab
2. Reload page
3. Check: Total size, Load time, Requests
4. Verify images are optimized

### Memory Testing

1. Open DevTools > Memory tab
2. Take heap snapshot
3. Interact with page
4. Take another snapshot
5. Check memory doesn't grow excessively

## Common Issues & Fixes

### Issue: API calls return 404

**Fix:** Ensure backend is running on port 5000

### Issue: MongoDB timeout

**Fix:** Check MongoDB is running, correct connection string

### Issue: Theme not persisting

**Fix:** Check localStorage in DevTools Application tab

### Issue: Images don't load

**Fix:** Check image URLs are valid, use HTTPS URLs

### Issue: Animations janky

**Fix:** Check GPU acceleration enabled in DevTools

### Issue: Form validation not working

**Fix:** Check email regex in Contact.jsx

## Deployment Readiness

Before deploying:

- [ ] All test cases pass
- [ ] No console errors or warnings
- [ ] Environment variables set correctly
- [ ] Database connection tested
- [ ] API endpoints tested
- [ ] Responsive design verified
- [ ] Performance metrics acceptable
- [ ] Security headers configured
- [ ] CORS properly configured

## Post-Deployment Testing

After deploying to production:

- [ ] Website loads correctly
- [ ] All content displays properly
- [ ] Contact form works (messages saved)
- [ ] API endpoints accessible
- [ ] HTTPS enabled
- [ ] Custom domain working
- [ ] Mobile responsive
- [ ] Analytics tracking (if added)

---

### Test Data for Manual Testing

**Sample Project:**

```json
{
  "title": "Portfolio Website",
  "description": "A modern MERN stack portfolio with animations",
  "image": "https://images.unsplash.com/photo-1460925895917-aeb19be489c7",
  "technologies": ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  "link": "https://example.com",
  "github": "https://github.com/user/portfolio",
  "featured": true,
  "order": 1
}
```

**Sample Contact Message:**

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "Testing the portfolio",
  "message": "This is a test message to verify the contact form works properly."
}
```

Good luck! 🚀
