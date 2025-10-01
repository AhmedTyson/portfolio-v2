# Ahmed Elsayed Portfolio v2

A modern, fully-featured portfolio website built with Next.js 14, Payload CMS 3.0, and TypeScript. Features a powerful drag-and-drop content management system for easy portfolio updates.

## ✨ Features

- **🎨 Modern Design**: Clean, responsive design with dark/light mode
- **📱 Mobile-First**: Fully responsive across all devices
- **🚀 Performance**: Built with Next.js 14 and optimized for speed
- **📝 Content Management**: Drag-and-drop CMS with Payload CMS
- **🔍 SEO Optimized**: Built-in SEO with meta tags and structured data
- **🎯 TypeScript**: Full type safety throughout the application
- **🎨 Tailwind CSS**: Utility-first CSS framework
- **📊 Analytics**: Google Analytics and GTM integration
- **🌐 Blog System**: Built-in blog with rich text editing
- **💼 Project Showcase**: Dynamic project portfolio with galleries
- **🛠️ Skills Management**: Organized skill categories with proficiency levels
- **📄 Experience Timeline**: Professional experience and education
- **📬 Contact Form**: Contact form with email integration

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **CMS**: Payload CMS 3.0
- **Database**: PostgreSQL
- **File Storage**: UploadThing
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- PostgreSQL database
- UploadThing account (for file uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AhmedTyson/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables in `.env.local`:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `PAYLOAD_SECRET`: A secure random string for Payload CMS
   - `UPLOADTHING_TOKEN`: Your UploadThing API token

4. **Database setup**
   ```bash
   npm run payload migrate
   ```

5. **Create admin user**
   ```bash
   npm run payload create-first-user
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📝 Content Management

### Admin Dashboard

Access the admin panel at `/admin` to manage your portfolio content:

1. **Projects**: Add/edit your projects with images, descriptions, and tech stacks
2. **Skills**: Organize your skills by categories with proficiency levels
3. **Experience**: Manage your work experience, education, and achievements
4. **Blog**: Write and publish blog posts with rich text editing
5. **About**: Update your bio, profile image, and contact information
6. **Settings**: Configure site-wide settings, SEO, and theme preferences

### Drag & Drop Features

- Reorder projects, skills, and experience entries
- Upload and organize media files
- Rich text editing with image embedding
- Real-time preview of changes

## 🎨 Customization

### Theme Configuration

Customize colors and styling in:
- `tailwind.config.ts`: Tailwind theme configuration
- `src/app/globals.css`: Custom CSS variables and styles
- Admin panel → Settings → Theme: Dynamic theme configuration

### Content Structure

Modify content types in `src/collections/` to add new fields or change existing ones.

### Components

Reusable components are located in `src/components/` with separate folders for:
- `ui/`: Base UI components
- `sections/`: Page sections
- Custom portfolio components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Analytics

Add Google Analytics or GTM by updating environment variables:
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ahmed Elsayed**
- GitHub: [@AhmedTyson](https://github.com/AhmedTyson)
- LinkedIn: [Ahmed Elsayed](https://linkedin.com/in/ahmed-elsayed-8b9bba28a)
- Portfolio: [ahmedtyson.github.io](https://ahmedtyson.github.io/Ahmed.Elsayed.dev/)

## 🙏 Acknowledgments

- [Payload CMS](https://payloadcms.com/) for the amazing headless CMS
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ Star this repository if you found it helpful!