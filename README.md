# 🎮 CoopRadar (WIP)

> Discover cooperative games you can enjoy with your friends — across multiple platforms.

## 🧩 About the Project

**CoopRadar** is a platform designed to help players quickly find and explore cooperative (co-op) video games, filtered by platform, genre, number of players, and more. The motivation comes from a real problem: my friend and I often struggle to find good co-op games we can enjoy together.

The platform is currently under active development and aims to evolve into a robust search and recommendation engine for multiplayer gaming experiences.

## 🚀 Core Features (planned)

- 🔍 **Search** co-op games by platform, genre, rating, release date, and more.
- 🧠 **Smart recommendations** based on previously played games (powered by AI).
- 🎮 **Game details** with links to Steam, Epic, Xbox, etc.
- ❤️ **Favorites and history** per user.
- 🤝 **Friend matching** to suggest games everyone in your groups.

## 🏗️ Architecture Overview

| Component                  | Technology    | Purpose                                 |
|---------------------------|---------------|-----------------------------------------|
| Main API Backend          | NestJS        | Core REST API for games, users, search  |
| Recommendation Service    | FastAPI  | AI-based recommendation engine         |
| Game Data Provider        | IGDB API      | Source of game metadata                 |
| Database                  | PostgreSQL    | Persistence for users, games, favorites |
| Caching     | Redis         | API response caching and task queues    |

## 🧠 Why this project matters

- Built around a real-world use case.
- Combines Node.js and Python in a microservice architecture.
- Integrates external APIs and structured search logic.
- Incorporates machine learning for recommendations.
- Designed to grow in complexity: ideal to showcase senior-level thinking.

## 🛠️ Development Status

This project is currently in early development. Core endpoints for game browsing and user management are in progress.

✅ Authentication  
⬜️ Initial IGDB integration  
⬜️ Favorites / history  
⬜️ AI microservice  
⬜️ Recommendation engine  
⬜️ Frontend (planned)


