# 🚀 ByteVerse – Modern Developer Blog

ByteVerse is a modern, responsive developer and technology blog built with **Next.js 16**, **Tailwind CSS**, **React Query**, and **MockAPI**. The application provides a premium reading experience with Server-Side Rendering (SSR), dynamic routing, search functionality, SEO optimization, and a sleek dark-themed user interface.

---

## ✨ Features

- 🚀 Built with Next.js 16 (App Router)
- ⚡ Server-Side Rendering (SSR) for the homepage
- 🔗 Dynamic blog pages
- 🌐 MockAPI integration for blog data
- ⚛️ React Query for data fetching and caching
- 🔍 Search blogs by title, author, and category
- 🌙 Premium responsive dark-themed UI
- ⭐ Featured article section
- 🏷️ Trending categories
- 👨‍💻 Featured authors section
- ℹ️ About section
- 📧 Newsletter subscription section
- 📱 Fully responsive design
- 🔍 SEO metadata optimization
- ⏳ Custom loading screens
- 🚫 Custom 404 page

---

## 🛠️ Tech Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Query**
- **MockAPI**
- **Vercel**

---

## 📂 Project Structure

```text
app/
├── blog/
│   └── [id]/
│       ├── loading.tsx
│       └── page.tsx
├── signin/
│   └── page.tsx
├── globals.css
├── layout.tsx
├── loading.tsx
├── not-found.tsx
└── page.tsx

components/
├── About.tsx
├── BlogCard.tsx
├── BlogList.tsx
├── Categories.tsx
├── FeaturedAuthors.tsx
├── FeaturedBlog.tsx
├── Footer.tsx
├── Navbar.tsx
└── NewsLetter.tsx

hooks/
├── useBlogs.ts

lib/
├── api.ts

providers/
├── ReactQueryProvider.tsx

public/
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Navigate to the project:

```bash
cd YOUR_REPOSITORY
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_API_URL=YOUR_MOCKAPI_BASE_URL
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.

Deployment Steps:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variable:

```env
NEXT_PUBLIC_API_URL=YOUR_MOCKAPI_BASE_URL
```

4. Click **Deploy**.

---

## ✅ Assignment Requirements Covered

- ✔ Latest stable version of Next.js
- ✔ Server-Side Rendering (SSR)
- ✔ Dynamic Routing
- ✔ MockAPI Integration
- ✔ React Query for data fetching
- ✔ Tailwind CSS UI
- ✔ Responsive Design
- ✔ Search Functionality
- ✔ SEO Metadata
- ✔ Component-Based Architecture
- ✔ Custom Loading Screen
- ✔ Custom 404 Page

---

## 📄 License

This project was developed for educational purposes as part of the **Next.js Blog Application** assignment.