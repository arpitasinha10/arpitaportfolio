# Detailed Guide: Hosting Your Portfolio on GitHub Pages

## Step 1: Create a GitHub Account
1. Visit [GitHub.com](https://github.com)
2. Click the "Sign up" button in the top-right corner
3. Fill in your information:
   - Enter your email
   - Create a password
   - Choose a username
4. Verify your email address when prompted

## Step 2: Create a New Repository
1. Click the "+" icon in the top-right corner
2. Select "New repository"
3. Fill in the repository details:
   - Name it "portfolio"
   - Add a description (optional)
   - Make it Public
   - Don't initialize with README
4. Click "Create repository"

## Step 3: Push Your Code (Using GitHub Desktop)
The easiest way is to use GitHub Desktop:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and open GitHub Desktop
3. Sign in with your GitHub account
4. Click "File" > "Add Local Repository"
5. Browse to your portfolio folder
6. Add a commit message like "Initial portfolio commit"
7. Click "Publish repository"
8. Select your GitHub account and the repository you created
9. Click "Publish"

## Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select "Deploy from a branch"
   - Select "main" branch
   - Select "/docs" folder
5. Click "Save"
6. Wait a few minutes for your site to deploy

## Step 5: View Your Live Site
1. After enabling GitHub Pages, return to the "Pages" section
2. You'll see a message saying "Your site is live at..."
3. Click the link to view your portfolio
4. The URL will be: `https://[username].github.io/portfolio`

## Need Help?
If you get stuck at any point:
1. Check if you see any error messages
2. Make sure all files are in the correct folders
3. Verify that you've selected the correct branch and folder in GitHub Pages settings
4. Wait a few minutes after each change for GitHub to update

## Common Issues and Solutions
1. **Site not appearing?**
   - Check if you've pushed all files to the correct branch
   - Verify the /docs folder exists in your repository
   - Wait 5-10 minutes for changes to take effect

2. **Images not showing?**
   - Make sure image paths are relative to your project
   - Check if images are properly uploaded to the repository
   - Use forward slashes (/) in image paths

3. **Styling issues?**
   - Verify that all CSS files are properly linked
   - Check if all assets are in the correct folders
   - Use relative paths for all resources

Remember: After any changes, you need to:
1. Commit your changes
2. Push to GitHub
3. Wait a few minutes for the site to update

Need more help? Feel free to ask!
