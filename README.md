# My Personal Resume Project

This project is deployed and live on GitHub Pages. You can view it here: [My Personal Resume](https://weishiy.github.io/my-resume/).

## Project Overview

- **Technologies Used:** React, CSS, Vite
- **Features:**
  - **Projects:** A section displaying my personal and professional projects.
  - **Skills:** A list of my technical skills and soft skills.
  - **Experience:** A summary of my experience.
  - **Contact:** A contact form for visitors to reach out to me.

## Inspiration

This project was created by following a YouTube tutorial that demonstrates how to build a responsive portfolio website using React and CSS. The tutorial covers everything from structuring the project to deploying it.

You can watch the tutorial here: [YouTube Tutorial Link](https://www.youtube.com/watch?v=YQCDUJ6hhNY)

## Deployment

The website is deployed on GitHub Pages using the `b1` branch. Only the content from the `dist` folder is pushed to the `b1` branch for deployment. The `dist` folder itself is not included, only its contents are moved to the root of the branch. This approach is slightly different from the tutorial.

### Deployment Steps

1. **Switch to the `b1` branch:**
   ```bash
   git checkout b1
   ```

2. **Clear all existing files on the `b1` branch:**
   ```bash
   git rm -rf .
   ```

3. **Copy the content of the `dist` folder from the `main` branch:**
   ```bash
   git checkout main -- dist
   mv dist/* .
   Remove-Item -Recurse -Force dist  # If using PowerShell, or rm -rf dist in Unix-based systems.
   ```

4. **Commit the changes and push to `b1` branch:**
   ```bash
   git add .
   git commit -m "chore: update b1 with dist content"
   git push origin b1
   ```

5. **Verify the deployment:**
   Visit [My Personal Resume](https://weishiy.github.io/my-resume/) to ensure the changes are reflected.

## Author

**Shiyan Wei**

- **GitHub:** [@weishiy](https://github.com/weishiy)
