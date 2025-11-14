# Berita Oleh Aziz

Aplikasi agregator berita dengan React, Material UI, dan Tailwind CSS. Data dari GNews API.

![React](https://img.shields.io/badge/React-18.2-blue) ![Material UI](https://img.shields.io/badge/MUI-5.14-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3-blue)

## Fitur

- Filter 9 negara (Indonesia, Malaysia, Singapura, dll)
- 7 kategori berita
- Pencarian berita
- Responsive & modern UI

## Quick Start

```bash
# Install
npm install

# Setup .env (daftar di gnews.io)
copy .env.example .env

# Jalankan
npm run dev
```

Buka: **http://localhost:5173**

## Scripts

```bash
npm run dev      # Client + Server
npm run server   # Server saja
npm run client   # Client saja
npm run build    # Build production
```

## Troubleshooting

**Port sudah digunakan?**
```bash
netstat -ano | findstr :3000
taskkill //F //PID <PID>
```

**API Limit:** 100 requests/hari (free tier)

## Tech Stack

React, Material UI, Tailwind CSS, Vite, Express, GNews API

## Dokumentasi

- [GNews API](https://gnews.io/docs/v4)
- [Material UI](https://mui.com/material-ui/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Data dari [GNews.io](https://gnews.io/)
