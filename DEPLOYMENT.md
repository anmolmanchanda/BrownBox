# Deployment Instructions for Vercel

## 🚀 Your project has been pushed to GitHub!

Repository: https://github.com/anmolmanchanda/BrownBox

## Deploy to Vercel (Recommended Method)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository: `anmolmanchanda/BrownBox`
5. Configure your project:
   - Framework Preset: Next.js (should be auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

6. Add Environment Variables (click "Environment Variables"):
   ```
   # Add these if you have actual values, otherwise deployment will work with placeholders
   NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   DATABASE_URL=your-database-url
   NEXTAUTH_SECRET=generate-a-secret-key
   RESEND_API_KEY=your-resend-key
   WHATSAPP_API_KEY=your-whatsapp-key
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. First, login to Vercel:
   ```bash
   vercel login
   ```

2. Then deploy:
   ```bash
   vercel --prod
   ```

3. Follow the prompts:
   - Link to existing project? No (first time)
   - What's your project name? BrownBox
   - In which directory is your code located? ./
   - Want to override the settings? No

### Option 3: Deploy via GitHub Integration

1. Go to https://vercel.com/new
2. Connect your GitHub account if not already connected
3. Import `anmolmanchanda/BrownBox`
4. Deploy with default settings

## 🎉 After Deployment

Your site will be available at:
- Production: `https://brownbox.vercel.app` (or your custom domain)
- Preview: Each PR will get a preview URL

## 📝 Important Notes

1. The application will work without the environment variables, showing placeholder data
2. To enable full functionality, add real API keys for:
   - Shopify Storefront API
   - Email service (Resend/SendGrid)
   - WhatsApp integration
   - Analytics

3. Custom Domain (Optional):
   - Go to your Vercel project settings
   - Navigate to "Domains"
   - Add your custom domain

## 🔄 Automatic Deployments

Once connected, Vercel will automatically deploy:
- Production deployment on every push to `main` branch
- Preview deployments for every pull request

## 📊 Performance Monitoring

After deployment, monitor your site:
- Vercel Analytics: Built-in analytics dashboard
- Speed Insights: Core Web Vitals monitoring
- Real User Metrics: Actual user performance data

## 🆘 Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify environment variables are set correctly
4. Check that the build works locally: `npm run build`

## 🔗 Useful Links

- GitHub Repository: https://github.com/anmolmanchanda/BrownBox
- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment