# 🎓 Smart Attendance Tracker - Frontend

A modern, intelligent attendance tracking and planning application built with Next.js.

## 🚀 Features

- **Smart Subject Setup** - Configure subjects with weekday-based schedules
- **Automatic Daily Tracking** - Auto-generate attendance records
- **Dynamic Holiday Management** - Add/edit/remove holidays on the fly
- **Attendance Calculation** - Real-time 75% threshold monitoring
- **Interactive Calendar** - Color-coded calendar view with inline editing
- **Dashboard & Analytics** - Charts, progress bars, and "At Risk" warnings
- **What-If Simulator** - Project future attendance scenarios
- **Responsive Design** - Mobile-first approach with modern UI

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Styling**: TailwindCSS 4 with Zinc color scheme
- **UI Components**: Shadcn UI
- **Charts**: Recharts
- **Calendar**: React Calendar
- **State Management**: Zustand with persistence
- **Date Utilities**: date-fns
- **HTTP Client**: Axios

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   └── ui/                 # Shadcn UI components
├── services/               # API service layer
│   └── api.js              # Axios configuration
├── store/                  # Zustand state management
│   └── attendanceStore.js  # Global state
├── utils/                  # Utility functions
│   ├── dateUtils.js        # Date manipulation helpers
│   └── attendanceUtils.js  # Attendance calculations
├── .env.local              # Environment variables
└── package.json
```

## 🔧 Installation & Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Create `.env.local` file:**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Smart Attendance Tracker
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

- **Base Color**: Zinc (modern, tech-forward with cool tones)
- **Typography**: Geist font family
- **Status Colors**:
  - 🟢 Green: Safe attendance (≥85%)
  - 🟡 Yellow: Warning (75-84%)
  - 🔴 Red: Critical (<75%)
  - ⚪ Gray: Holidays

## 🔗 API Integration

Backend API: `http://localhost:5000/api`

### Key Endpoints:
- `GET/POST /subjects` - Subject management
- `GET/POST /holidays` - Holiday management
- `GET/PUT /attendance` - Attendance records
- `GET /calculate` - Real-time calculations

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚧 Development Status

✅ Project setup complete
✅ Basic structure & utilities created
⏳ UI components in development
⏳ Backend API integration pending

## 📄 License

MIT
