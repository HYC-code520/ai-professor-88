# AI Tutors Platform

## Overview
A dynamic multimedia web application with advanced video streaming capabilities and responsive user experience, designed for seamless multimedia content delivery and AI-powered tutoring.

## Project Architecture
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for client-side routing
- **Backend**: Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite

## Design System
- Custom color palette: dark-navy, accent-blue, pale-blue, dark-teal
- Glass effect components with backdrop blur
- Gradient text and backgrounds
- Responsive video streaming with advanced loading states

## Recent Changes
- **2025-01-29**: Updated branding with custom logo
  - Replaced circular "AI" text logo with newlogo.png image
  - Maintained consistent 32px size and rounded appearance
  - Logo now displays across all pages via shared Header component

- **2025-01-29**: Fixed navbar consistency across all pages by implementing shared Header component
  - Replaced custom header in Chat page with shared Header component
  - Added proper spacing (pt-24) to accommodate fixed header
  - All pages now have consistent sticky navigation with glass effect
  - Login/Signup buttons positioned consistently across all pages

- **2025-01-29**: Enhanced video loading experience
  - Added 1-second initial loading overlay with transparent background
  - Implemented auto-resume functionality for video playback interruptions
  - Fixed video glitching issues with optimized event handlers
  - Added smooth opacity transitions for seamless video loading

- **2025-01-29**: Created comprehensive signup page
  - Email field (required) and optional password field
  - Terms of Service checkbox validation
  - Skip and Sign Up buttons with proper functionality
  - Consistent styling with login page

## Key Components
- **Header**: Fixed navigation bar with glass effect, consistent across all pages
- **Hero**: Video background with transparent loading overlays
- **Chat**: AI tutoring interface with conversation flow
- **Authentication**: Login and Signup pages with form validation

## User Preferences
- Prefers transparent loading overlays that don't obstruct video content
- Values consistent navigation experience across all pages
- Wants smooth, glitch-free video playback with minimal interruptions

## Technical Decisions
- Used shared Header component for consistency instead of page-specific headers
- Implemented intersection observer for video visibility management
- Applied glass effect styling pattern throughout the application
- Used fixed positioning for header with appropriate content padding