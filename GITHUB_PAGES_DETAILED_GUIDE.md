# Visual Guide: Publishing Your Portfolio with GitHub Desktop

## Step 1: Setting Up GitHub Desktop
1. Open GitHub Desktop
2. If you haven't signed in:
   - Click "Sign in to GitHub.com"
   - Enter your GitHub username and password
   - Complete any two-factor authentication if prompted

## Step 2: Creating Your Repository
1. After signing in, click "Create a New Repository on your hard drive"
2. Fill in the repository details:
   - Name: `portfolio`
   - Description: "My professional portfolio website"
   - Local path: Choose where to save on your computer
   - Make sure "Initialize with a README" is unchecked
   - Click "Create Repository"

## Step 3: Publishing Your Repository
1. After creating, click "Publish repository" at the top
2. Make sure:
   - Keep "Keep this code private" unchecked (must be public for GitHub Pages)
   - Repository name is `portfolio`
   - Click "Publish Repository"

## Step 4: Adding Your Portfolio Files
1. Copy all your portfolio files into the repository folder on your computer
2. In GitHub Desktop, you'll see all your files listed as changes
3. At the bottom, enter a message like "Initial portfolio commit"
4. Click "Commit to main"
5. Click "Push origin" to upload to GitHub

## Step 5: Enabling GitHub Pages
1. Go to your repository on GitHub.com
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/docs" folder
   - Click "Save"

## Step 6: Viewing Your Site
1. Wait a few minutes for GitHub to build your site
2. Your portfolio will be available at:
   `https://[your-username].github.io/portfolio`

## Need Help?
- If any step isn't working, feel free to ask for more detailed guidance
- Remember: Changes can take a few minutes to appear on your live site
- Make sure all files are in the correct folders before publishing

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