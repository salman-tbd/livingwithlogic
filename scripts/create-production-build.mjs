import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Creating production build folder...\n');

const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'production-build');
const nextDir = path.join(projectRoot, '.next');
const publicDir = path.join(projectRoot, 'public');

// Clean and create production-build directory
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDir, { recursive: true });

console.log('✅ Created production-build directory');

// Copy standalone build
const standaloneDir = path.join(nextDir, 'standalone');
if (fs.existsSync(standaloneDir)) {
  copyDir(standaloneDir, buildDir);
  console.log('✅ Copied standalone application files');
} else {
  console.error('❌ Standalone build not found. Make sure you run this after npm run build');
  process.exit(1);
}

// Copy static files
const staticDir = path.join(nextDir, 'static');
const buildStaticDir = path.join(buildDir, '.next', 'static');
if (fs.existsSync(staticDir)) {
  fs.mkdirSync(path.join(buildDir, '.next'), { recursive: true });
  copyDir(staticDir, buildStaticDir);
  console.log('✅ Copied static assets');
}

// Copy public files
if (fs.existsSync(publicDir)) {
  const buildPublicDir = path.join(buildDir, 'public');
  copyDir(publicDir, buildPublicDir);
  console.log('✅ Copied public assets');
}

// Create production package.json
const originalPackage = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
const productionPackage = {
  name: originalPackage.name,
  version: originalPackage.version,
  private: true,
  scripts: {
    start: "node server.js"
  },
  dependencies: {
    // Only include runtime dependencies needed for standalone build
    next: originalPackage.dependencies.next
  },
  engines: {
    node: ">=18.0.0"
  }
};

fs.writeFileSync(
  path.join(buildDir, 'package.json'),
  JSON.stringify(productionPackage, null, 2)
);
console.log('✅ Created production package.json');

// Create startup script
const startupScript = `#!/bin/bash

# Living with Logic - Production Startup Script
echo "🚀 Starting Living with Logic application..."

# Set production environment
export NODE_ENV=production
export PORT=\${PORT:-3000}

# Start the application
echo "Starting on port $PORT"
node server.js
`;

fs.writeFileSync(path.join(buildDir, 'start.sh'), startupScript);
fs.chmodSync(path.join(buildDir, 'start.sh'), '755');
console.log('✅ Created startup script (start.sh)');

// Create Windows batch file
const windowsScript = `@echo off
REM Living with Logic - Production Startup Script (Windows)
echo Starting Living with Logic application...

REM Set production environment
set NODE_ENV=production
set PORT=%PORT%
if "%PORT%"=="" set PORT=3000

REM Start the application
echo Starting on port %PORT%
node server.js
`;

fs.writeFileSync(path.join(buildDir, 'start.bat'), windowsScript);
console.log('✅ Created Windows startup script (start.bat)');

// Create .env.production template
const envTemplate = `# Living with Logic - Production Environment Variables
NODE_ENV=production
PORT=3000

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Living with Logic"

# Add your production environment variables here
# DATABASE_URL=
# API_KEY=
# EMAIL_SERVICE_KEY=
`;

fs.writeFileSync(path.join(buildDir, '.env.production.example'), envTemplate);
console.log('✅ Created environment template');

// Create README for deployment
const deploymentReadme = `# Living with Logic - Production Deployment

This folder contains the complete production build of the Living with Logic website.

## Quick Start

### Option 1: Node.js (Recommended)
\`\`\`bash
# Linux/macOS
./start.sh

# Windows
start.bat

# Or directly
node server.js
\`\`\`

### Option 2: PM2 (Process Manager)
\`\`\`bash
npm install -g pm2
pm2 start server.js --name "living-with-logic"
pm2 save
pm2 startup
\`\`\`

### Option 3: Docker
\`\`\`bash
# Build image
docker build -t living-with-logic .

# Run container
docker run -p 3000:3000 living-with-logic
\`\`\`

## Environment Configuration

1. Copy \`.env.production.example\` to \`.env.production\`
2. Update the variables with your production values
3. Restart the application

## Server Requirements

- **Node.js**: 18.0.0 or higher
- **Memory**: 512MB minimum (1GB recommended)
- **Disk**: 100MB for application files
- **Port**: 3000 (configurable via PORT environment variable)

## File Structure

\`\`\`
production-build/
├── server.js              # Main application server
├── package.json           # Production dependencies
├── start.sh              # Linux/macOS startup script
├── start.bat             # Windows startup script
├── .env.production.example # Environment template
├── Dockerfile            # Docker configuration
├── public/               # Static assets
├── .next/                # Next.js build files
└── README.md            # This file
\`\`\`

## Deployment Platforms

### Traditional VPS/Dedicated Server
1. Upload this entire folder to your server
2. Install Node.js 18+
3. Run \`./start.sh\` or \`node server.js\`

### Cloud Platforms
- **Vercel**: Use the original source code (recommended for Next.js)
- **Netlify**: Use static export mode
- **Railway**: Upload this folder
- **DigitalOcean App Platform**: Upload this folder
- **AWS/Google Cloud/Azure**: Use with containerization

### Process Managers
- **PM2**: \`pm2 start server.js\`
- **Forever**: \`forever start server.js\`
- **systemd**: Create a service file

## Performance Tips

1. **Reverse Proxy**: Use Nginx or Apache for static file serving
2. **CDN**: Configure CloudFlare or AWS CloudFront
3. **Caching**: Enable browser caching for static assets
4. **Monitoring**: Set up application monitoring
5. **SSL**: Configure HTTPS certificates

## Support

For deployment issues:
- Check the logs: \`pm2 logs\` or console output
- Verify Node.js version: \`node --version\`
- Check port availability: \`netstat -tlnp | grep 3000\`
- Review environment variables

Built with ❤️ by Living with Logic
`;

fs.writeFileSync(path.join(buildDir, 'README.md'), deploymentReadme);
console.log('✅ Created deployment README');

// Create Dockerfile
const dockerfile = `FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package.json
COPY package.json ./
RUN npm ci --only=production && npm cache clean --force

# Production image
FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]
`;

fs.writeFileSync(path.join(buildDir, 'Dockerfile'), dockerfile);
console.log('✅ Created Dockerfile');

// Create .dockerignore
const dockerignore = `node_modules
npm-debug.log
.env.local
.env.production.example
README.md
start.sh
start.bat
`;

fs.writeFileSync(path.join(buildDir, '.dockerignore'), dockerignore);
console.log('✅ Created .dockerignore');

console.log('\n🎉 Production build created successfully!');
console.log('\n📁 Location: production-build/');
console.log('\n🚀 To deploy:');
console.log('   1. Copy the production-build/ folder to your server');
console.log('   2. Run: cd production-build && node server.js');
console.log('   3. Visit: http://localhost:3000');
console.log('\n📖 See production-build/README.md for detailed instructions');

// Helper function to copy directories recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
