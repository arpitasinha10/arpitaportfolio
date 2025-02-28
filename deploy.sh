#!/bin/bash
# Build script for GitHub Pages deployment

# Build the project
npm run build

# Move the built files to docs folder for GitHub Pages
rm -rf docs
mv dist/public docs

# Create .nojekyll file to prevent Jekyll processing
touch docs/.nojekyll

echo "Build completed! Your site is ready for GitHub Pages."
echo "Next steps:"
echo "1. Push these changes to your GitHub repository"
echo "2. Go to repository Settings > Pages"
echo "3. Select 'main' branch and '/docs' folder"
echo "4. Click Save and your site will be live in a few minutes!"
