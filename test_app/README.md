# Jon Doe - Coffee Artist Portfolio

A beautiful, responsive portfolio website for Jon Doe, a professional coffee artist and barista. Built with Node.js, Express, and Handlebars.

## Features

- **Modern Design**: Clean, coffee-themed design with Bootstrap 5
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Lightweight and optimized for performance
- **Docker Ready**: Containerized for easy deployment

## Local Development

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Docker Instructions

### Building the Docker Image

1. Build the Docker image:
   ```bash
   docker build -t jon-doe-portfolio .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 jon-doe-portfolio
   ```

3. Open your browser and visit `http://localhost:3000`

### Docker Compose (Optional)

Create a `docker-compose.yml` file:
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

Then run:
```bash
docker-compose up -d
```

## Project Structure

```
jon-doe-portfolio/
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── home.handlebars
│   ├── about.handlebars
│   ├── gallery.handlebars
│   └── contact.handlebars
├── server.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: Handlebars
- **Frontend**: HTML5, CSS3, Bootstrap 5
- **Icons**: Font Awesome
- **Containerization**: Docker

## Customization

To customize the portfolio for different users:

1. Edit the `portfolioData` object in `server.js`
2. Update the CSS variables in `public/css/style.css` for color scheme
3. Modify the Handlebars templates in the `views/` directory

## License

MIT License - feel free to use this template for your own portfolio projects!
