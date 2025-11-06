export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            🎓 Smart Attendance Tracker
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
            Track, analyze, and plan your attendance intelligently
          </p>
        </header>

        <main className="grid gap-6">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Welcome! 👋
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Your attendance tracker is being set up. Here's what you can do:
            </p>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>✅ Set up your subjects and class schedule</li>
              <li>📅 Track attendance automatically</li>
              <li>🎯 Maintain 75% attendance threshold</li>
              <li>📊 View analytics and projections</li>
              <li>🗓️ Manage holidays dynamically</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                📚 Subjects
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Configure your subjects and weekly schedule
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                📊 Dashboard
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                View attendance stats and warnings
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                📅 Calendar
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Track daily attendance and holidays
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
