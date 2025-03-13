#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Switch to the main branch
git checkout main
git pull origin main

# Add and commit all changes in the main branch
git add .
git commit -m "Update main branch"
git push origin main

# Run the build process
npm run build

# Commit build changes before switching branches
git add dist/index.html
git commit -m "Save build changes before switching to b1"

# Switch to the b1 branch
git checkout b1
git pull origin b1

# Remove all existing files in the b1 branch
rm -rf *

# Copy all files from the dist folder to the current directory
cp -r ../dist/* .

# Add and commit changes for GitHub Pages deployment
git add .
git commit -m "Deploy GitHub Pages"
git push origin b1

# Switch back to the main branch
git checkout main

echo "✅ Deployment completed! GitHub Pages has been updated."
