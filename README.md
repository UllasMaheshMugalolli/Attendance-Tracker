# 🎓 Smart Attendance Tracker & Planner

An intelligent, calendar-driven attendance tracking system designed for university students to maintain and project their attendance accurately.

## 📋 Problem Statement

University students struggle to monitor attendance due to:
- ❌ Irregular holidays and late announcements
- ❌ Varying class schedules across weekdays
- ❌ Traditional calculators that ignore real-life variables
- ❌ Confusion about maintaining 75% attendance threshold

## ✨ Solution

A smart attendance planner that:
- ✅ Tracks attendance automatically day-by-day
- ✅ Allows manual editing of attendance status
- ✅ Dynamically manages holidays
- ✅ Calculates required future attendance for 75% threshold
- ✅ Provides "What-If" scenario projections

## 🏗️ Project Structure

```
Attendance_Tracker/
├── frontend/          # Next.js frontend application
└── backend/           # Node.js + Express + MongoDB backend (coming soon)
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: JavaScript
- **Styling**: TailwindCSS 4 (Zinc theme)
- **UI Library**: Shadcn UI
- **Charts**: Recharts
- **Calendar**: React Calendar
- **State Management**: Zustand
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB (Mongoose ORM)
- **API**: RESTful APIs

## 🔧 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Attendance_Tracker
```

2. **Setup Frontend**
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

3. **Setup Backend** (Coming Soon)
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## 📱 Features

### Core Features
- 📚 **Smart Subject Setup** - Configure subjects with weekday-based timetables
- 📅 **Automatic Daily Tracking** - Auto-generate attendance records
- 🗓️ **Dynamic Holiday Management** - Add/edit/remove holidays anytime
- 📊 **Attendance Calculation** - Real-time 75% threshold monitoring
- 🎯 **Interactive Calendar** - Color-coded view with inline editing
- 📈 **Dashboard & Analytics** - Charts, warnings, and progress tracking
- 🔮 **What-If Simulator** - Project future attendance scenarios

### Advanced Features
- 📄 Reports & Export (PDF/Excel)
- 🔔 Smart Alerts & Notifications
- 📱 Mobile Responsive Design
- 💾 Auto-save & Local Storage Backup

## 🎨 Color Coding

- 🟢 **Green** - Present / Safe (≥85%)
- 🔴 **Red** - Absent / Critical (<75%)
- 🟡 **Yellow** - Warning (75-84%)
- ⚪ **Gray** - Holiday


## 👥 Contributors

Built with ❤️ for university students

## 📄 License

MIT

---

**Status**: 🚧 In Development

