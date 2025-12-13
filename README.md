# Fullstack Music Player

A modern, minimalist music player web application built with Next.js, featuring user authentication, music upload, playlist management, and a sleek audio player interface.

## Features

- 🔐 **Authentication**: Sign up and sign in with Better Auth
- 🎵 **Music Upload**: Upload audio files with cover images to Supabase Storage
- 📱 **Music Player**: Full-featured audio player with controls
- 📋 **Playlist Management**: Create and manage playlists
- 🎨 **Modern UI**: Clean, minimalist design with Tailwind CSS and Shadcn UI
- 🔄 **Real-time Updates**: Zustand state management for seamless UX
- 🗄️ **Database**: PostgreSQL with Drizzle ORM

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL, Drizzle ORM
- **Storage**: Supabase Storage
- **State Management**: Zustand
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Supabase recommended)
- Supabase project with Storage enabled

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO].git
cd fullstack-music-player
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your environment variables:
```env
DATABASE_URL="your_supabase_database_url"
SUPABASE_URL="your_supabase_project_url"
SUPABASE_KEY="your_supabase_anon_key"
SUPABASE_SECRET_KEY="your_supabase_service_role_key"
GOOGLE_CLIENT_ID="your_google_client_id" # Optional
GOOGLE_CLIENT_SECRET="your_google_client_secret" # Optional
```

4. Set up the database:
```bash
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

The application uses the following database tables:

- `users`: User accounts
- `songs`: Music tracks with metadata
- `playlists`: User-created playlists
- `playlist_songs`: Many-to-many relationship between playlists and songs

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Protected pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   └── widgets/          # Custom widgets
├── lib/                  # Utility libraries
│   ├── drizzle/          # Database schema & client
│   ├── stores/           # Zustand stores
│   └── supabase/         # Supabase client
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Drizzle migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations

## Features Overview

### Authentication
- Email/password sign up and sign in
- Google OAuth (optional)
- Protected routes with middleware
- Session management

### Music Management
- Upload audio files (MP3, WAV, etc.)
- Upload cover images
- View and manage uploaded songs
- Delete songs

### Playlist Management
- Create custom playlists
- Add/remove songs from playlists
- View playlist contents

### Audio Player
- Play/pause controls
- Volume control
- Progress bar with seeking
- Previous/next track navigation
- Shuffle and repeat modes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
