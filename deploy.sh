#!/bin/bash

# Exit script on error
set -e

echo "🔄 Switching to main branch..."
git checkout main
git pull origin main

echo "⚙️ Running npm build..."
npm run build

echo "📤 Committing changes to main..."
git add .
git commit -m "Update main branch" || echo "✅ No changes to commit in main"
git push origin main

echo "🔄 Switching to b1 branch..."
git checkout b1

echo "🧹 Removing all existing files in b1..."
git rm -rf .

echo "📥 Restoring dist from main..."
git checkout main -- dist
mv dist/* .

echo "🗑️ Removing dist directory..."
rm -rf dist  # For Unix-based systems
# Remove-Item -Recurse -Force dist  # Uncomment for PowerShell

echo "📤 Committing and pushing changes to b1..."
git add .
git commit -m "chore: update b1 with dist content" || echo "✅ No changes to commit in b1"
git push origin b1

echo "🔄 Switching back to main branch..."
git checkout main

echo "🎉✅ Deployment completed! GitHub Pages updated."
