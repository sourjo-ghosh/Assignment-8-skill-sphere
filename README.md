# 🎓 SkillSphere

**A minimalist online learning platform focused on clarity and cognitive ease.**

SkillSphere empowers learners with quality education and skill development — without distractions. Built with a low-stimulus, clean UI philosophy so learners can focus purely on their academic growth.

🔗 **Live Demo:** [skill-sphere-steel.vercel.app](https://skill-sphere-steel.vercel.app)

---

## ✨ Features

- 🏠 **Home Page** — Hero section with course highlights and expert instructor showcase
- 📚 **Course Catalog** — Browse curated courses across Development, Data Science, AI, and UX Design
- 👤 **User Authentication** — Login & Signup powered by [Better Auth](https://better-auth.com)
- 🧑‍💼 **User Profile** — Personalized profile page for learners
- 📖 **Learning Resources** — Evidence-based study techniques (Pomodoro, Active Recall, etc.)
- 🎨 **Minimalist UI** — Designed for maximum focus and reduced cognitive load

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) |
| **Runtime** | React 19 |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **UI Components** | [HeroUI](https://heroui.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Authentication** | [Better Auth](https://better-auth.com) |
| **Database** | MongoDB |
| **Icons** | React Icons |
| **Notifications** | React Toastify |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 📁 Project Structure

```
skill-sphere/
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── page.js     # Home page
│   │   ├── courses/    # Course listing page
│   │   ├── user-profile/
│   │   └── auth/
│   │       ├── login/
│   │       └── signup/
│   └── components/     # Reusable UI components
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sourjo-ghosh/Assignment-8-skill-sphere.git
cd Assignment-8-skill-sphere
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌐 Pages & Routes

| Route | Description |
|---|---|
| `/` | Home page with hero, featured courses, and instructors |
| `/courses` | Full course catalog |
| `/user-profile` | Authenticated user profile |
| `/auth/login` | Login page |
| `/auth/signup` | Registration page |

---

## 📦 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add environment variables in the Vercel dashboard
4. Deploy 🚀

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 👨‍💻 Author

**Sourjo Ghosh**

- GitHub: [@sourjo-ghosh](https://github.com/sourjo-ghosh)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ using Next.js & Tailwind CSS</p>