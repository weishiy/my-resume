#!/usr/bin/env bash
set -e

echo "🧭 Ensure on main"
git checkout main

echo "📦 Build"
npm install
npm run build

echo "🔀 Switch to b1"
git checkout b1

echo "🧹 Clean tracked files"
# Only remove tracked files to avoid Windows file lock issues
git rm -r --cached . >/dev/null 2>&1 || true
git ls-files -z | xargs -0 rm -f 2>/dev/null || true

# Fallback: try to clean the root directory (excluding .git)
rm -rf ./* .[^.]* 2>/dev/null || true

echo "📤 Copy dist to root"
git checkout main -- dist
shopt -s dotglob
mv dist/* .
rm -rf dist

echo "✅ Commit & push"
git add .
git commit -m "deploy: update b1 with latest dist"
git push origin b1

echo "↩️ Back to main"
git checkout main
echo "🎉 Done"
