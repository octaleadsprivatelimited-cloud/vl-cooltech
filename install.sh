#!/bin/bash

# ApplianceCares.in Website Installation Script
echo "🚀 Setting up ApplianceCares.in Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local file if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# ApplianceCares.in Environment Variables
NEXT_PUBLIC_SITE_URL=https://appliancecares.in
NEXT_PUBLIC_PHONE=+917780225280
NEXT_PUBLIC_EMAIL=info@appliancecares.in
NEXT_PUBLIC_ADDRESS=Pragathi Nagar, Hyderabad, TG
EOF
    echo "✅ .env.local file created"
fi

# Create public directory structure
echo "📁 Creating public directory structure..."
mkdir -p public/images
mkdir -p public/icons

# Create favicon files (placeholder)
echo "🎨 Creating favicon files..."
touch public/favicon.ico
touch public/apple-touch-icon.png
touch public/favicon-32x32.png
touch public/favicon-16x16.png
touch public/site.webmanifest

echo "✅ Public directory structure created"

# Run build to check for errors
echo "🔨 Running build check..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo ""
echo "🎉 ApplianceCares.in website setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Customize the content in the components and pages"
echo "4. Deploy to Vercel, Netlify, or your preferred hosting platform"
echo ""
echo "📞 Contact Information:"
echo "Phone: +91 77802 25280"
echo "Email: info@appliancecares.in"
echo "Location: Pragathi Nagar, Hyderabad, TG"
echo ""
echo "🚀 Happy coding!"
