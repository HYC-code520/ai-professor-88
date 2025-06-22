# AI Tutors - Fair-trade AI Platform

A modern web application that provides on-demand mentorship from world-class experts through AI-powered digital twins. Sky rocket your business and life goals with real-time guidance from the best minds in entrepreneurship.

## 🌟 Features

- **Interactive Chat Interface**: Engage with Professor Jeremy Kagan's digital twin for entrepreneurship guidance
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS for a seamless user experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Conversations**: Dynamic chat interface with typing indicators and message history
- **Professional Branding**: Consistent blue gradient theme throughout the application

## 🚀 Live Demo

Experience the platform by chatting with Professor Jeremy Kagan at `/entrepreneur-chat`

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Wouter** - Lightweight React router
- **TanStack Query** - Data fetching and caching
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **TypeScript** - Type-safe server-side code
- **Drizzle ORM** - TypeScript ORM
- **Express Session** - Session management
- **Passport.js** - Authentication middleware

### Development
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS transformation tool
- **Drizzle Kit** - Database migration tool

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-tutors-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Configure your environment variables
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🏗 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schema definitions
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Dark Navy**: Primary background color
- **Accent Blue**: Primary brand color for CTAs and highlights
- **Pale Blue**: Secondary text and accent color
- **Dark Teal**: Gradient accent color

### Typography
- **Gradient Text**: Used for main headings with blue gradient
- **Glass Effect**: Subtle transparency effects throughout UI
- **Hover Glow**: Interactive elements with blue glow on hover

## 💬 Chat Features

- **Professor Jeremy Kagan**: Digital twin of NYU Stern entrepreneurship professor
- **Auto-greeting**: Conversation starts with personalized welcome message
- **Typing Indicators**: Realistic chat experience with loading animations
- **Message History**: Persistent conversation throughout session
- **Mobile Optimized**: Touch-friendly interface for mobile devices

## 🌐 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Required environment variables for production:
- Database connection settings
- Session secret keys
- Any external API keys

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 About Professor Jeremy Kagan

Digital twin trained on:
- Audio chats and conversations
- Academic textbooks and papers
- Lecture slides and presentations
- Recorded lectures and seminars

Specializing in entrepreneurship, business strategy, and startup guidance.

## 📞 Support

For questions or support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for the future of AI-powered education and mentorship.