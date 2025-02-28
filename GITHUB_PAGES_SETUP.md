# Hosting Your Portfolio on GitHub Pages

Follow these steps to host your portfolio for free:

## 1. Create a GitHub Account
- Go to [GitHub.com](https://github.com) and sign up for a free account if you haven't already
- Verify your email address

## 2. Create a New Repository
- Click the "+" icon in the top right corner
- Select "New repository"
- Name it `portfolio` or `<your-username>.github.io`
- Make it Public
- Click "Create repository"

## 3. Push Your Code
```bash
# Initialize git in your project
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/<your-username>/<repository-name>.git

# Push your code
git push -u origin main
```

## 4. Enable GitHub Pages
- Go to your repository on GitHub
- Click "Settings"
- Scroll to "Pages" section
- Under "Source", select:
  - Branch: main
  - Folder: /docs
- Click "Save"

## 5. Access Your Site
- Wait a few minutes for GitHub to build your site
- Your portfolio will be available at:
  - `https://<your-username>.github.io/<repository-name>` (if repository is named `portfolio`)
  - `https://<your-username>.github.io` (if repository is named `<your-username>.github.io`)

## Additional Tips
- Keep your repository public to use GitHub Pages for free
- Any changes you push to main branch will automatically update your site
- It might take a few minutes for changes to appear after pushing

Need help? Feel free to ask!
