# Monkey See — Demo Target Site

A clean Next.js 16 + Tailwind v4 marketing website designed to test **SitePortal** end-to-end.

## Quick Setup (3 Steps)

1. **Push to a new GitHub repository**:
   ```bash
   cd demo-site
   git init
   git add .
   git commit -m "Initial Monkey See site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/monkey-see-demo.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Import the repo in Vercel and click **Deploy**.
   - In **Vercel Project Settings → Deployment Protection**, disable Standard Protection for **Preview Deployments** if you want the preview iframe inside SitePortal to render directly without Vercel auth prompts.
   - Note your **Vercel Project ID** (under Project Settings → General) and live URL (e.g. `https://monkey-see-demo.vercel.app`).

3. **Connect in SitePortal Admin**:
   - Open SitePortal → **Admin → Add Website**, enter your GitHub Owner, Repo, Live URL, and Vercel Project ID.
   - Open the workspace and ask:
     > *"Change the header to say Monkey Monkey instead of Monkey See"*
