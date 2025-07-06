const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for Jon Doe's portfolio
const portfolioData = {
  name: "Jon Doe",
  title: "Coffee Artist & Barista",
  bio: "Passionate coffee artist with 8+ years of experience crafting exceptional coffee experiences. Specializing in latte art, specialty brewing methods, and creating unique coffee blends.",
  contact: {
    email: "jon.doe@coffeeartist.com",
    phone: "+1 (555) 123-4567",
    location: "Seattle, WA"
  },
  skills: [
    "Latte Art",
    "Espresso Brewing",
    "Coffee Roasting",
    "Cupping & Tasting",
    "Coffee Bean Sourcing",
    "Customer Service"
  ],
  experience: [
    {
      title: "Senior Barista",
      company: "Artisan Coffee Co.",
      period: "2020 - Present",
      description: "Lead barista creating specialty drinks and training new team members in advanced brewing techniques."
    },
    {
      title: "Coffee Roaster",
      company: "Mountain Peak Roasters",
      period: "2018 - 2020",
      description: "Developed custom roasting profiles for single-origin beans and created signature blends."
    },
    {
      title: "Barista",
      company: "Downtown Café",
      period: "2016 - 2018",
      description: "Served high-quality coffee drinks and developed expertise in latte art and customer service."
    }
  ],
  gallery: [
    {
      title: "Rosetta Latte Art",
      description: "Classic rosetta pattern in a cappuccino"
    },
    {
      title: "Heart Design",
      description: "Perfect heart shape in a cortado"
    },
    {
      title: "Tulip Creation",
      description: "Multi-layered tulip latte art"
    },
    {
      title: "Custom Roast",
      description: "Single-origin Ethiopian beans, medium roast"
    }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.render('home', { 
    title: 'Jon Doe - Coffee Artist',
    ...portfolioData
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About - Jon Doe',
    ...portfolioData
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { 
    title: 'Gallery - Jon Doe',
    ...portfolioData
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact - Jon Doe',
    ...portfolioData
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the portfolio`);
});

module.exports = app;
