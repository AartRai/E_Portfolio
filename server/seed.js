import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";
import Skill from "./models/Skill.js";

dotenv.config();

const sampleProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with payment integration, product management, and user authentication using Stripe API.",
    image:
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://example-ecommerce.com",
    github: "https://github.com/user/ecommerce-platform",
    featured: true,
    order: 1,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, team collaboration features, and notification system using WebSockets.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    link: "https://example-tasks.com",
    github: "https://github.com/user/task-manager",
    featured: true,
    order: 2,
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by OpenAI API, capable of answering queries, providing recommendations, and learning from conversations.",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf8171eadf8f91f85b65f27f8ac?w=600&h=400&fit=crop",
    technologies: ["React", "Python", "OpenAI API", "Flask", "PostgreSQL"],
    link: "https://example-chat.com",
    github: "https://github.com/user/ai-chat",
    featured: true,
    order: 3,
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard with data visualization, custom reports, and integration with multiple data sources.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    link: "https://example-analytics.com",
    github: "https://github.com/user/analytics-dashboard",
    featured: false,
    order: 4,
  },
];

const sampleSkills = [
  // Frontend
  { category: "Frontend", name: "React.js", icon: "⚛️", level: 95, order: 1 },
  { category: "Frontend", name: "JavaScript", icon: "✨", level: 95, order: 2 },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    icon: "🎨",
    level: 90,
    order: 3,
  },
  { category: "Frontend", name: "HTML/CSS", icon: "🌐", level: 95, order: 4 },

  // Backend
  { category: "Backend", name: "Node.js", icon: "🚀", level: 90, order: 1 },
  { category: "Backend", name: "Express.js", icon: "🛠️", level: 90, order: 2 },
  { category: "Backend", name: "REST APIs", icon: "🔗", level: 90, order: 3 },

  // Database
  { category: "Database", name: "MongoDB", icon: "🗄️", level: 85, order: 1 },
  { category: "Database", name: "PostgreSQL", icon: "📊", level: 80, order: 2 },

  // Tools
  { category: "Tools", name: "Git", icon: "📦", level: 90, order: 1 },
  { category: "Tools", name: "Docker", icon: "🐳", level: 75, order: 2 },
  { category: "Tools", name: "VS Code", icon: "💻", level: 95, order: 3 },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
    );
    console.log("✓ Connected to MongoDB");

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log("✓ Cleared existing data");

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`✓ Inserted ${insertedProjects.length} projects`);

    // Insert sample skills
    const insertedSkills = await Skill.insertMany(sampleSkills);
    console.log(`✓ Inserted ${insertedSkills.length} skills`);

    console.log("\n✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error.message);
    process.exit(1);
  }
}

seedDatabase();
