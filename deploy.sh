#!/bin/bash

# Exit script if any command fails
set -e

# Switch to main branch
git checkout main
git pull origin main

# Commit all changes in main
git add .
git commit -m "Update main branch"
git push origin main

# Run build process
npm run build

# Ensure all build changes are committed before switching branches
git add dist
git commit -m "Save build changes before switching to b1"

# Switch to b1 branch
git checkout b1
git pull origin b1

# Remove all old files in b1 branch (except .git)
find . -mindepth 1 ! -regex '^./\.git\(/.*\)?' -delete

# Copy new build files from dist to the root of b1
cp -r dist/* .

# Ensure all new files are staged and committed
git add .
git commit -m "Deploy GitHub Pages"
git push origin b1

# Switch back to main branch
git checkout main

echo "✅ Deployment completed! GitHub Pages updated."
