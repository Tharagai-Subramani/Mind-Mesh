export default function Dashboard() {
  return (
    <div className="relative overflow-hidden bg-slate-950">

      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-0 top-80 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />

      {/* Dashboard content */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-sm font-bold text-cyan-300">
            Cognitive Workspace
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
            Dashboard
          </h2>

          <p className="mt-3 font-medium leading-7 text-slate-200">
            Welcome to your Mind-Mesh workspace. Manage your projects,
            tasks, and team from one place.
          </p>

        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Projects */}
          <div className="rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

            <p className="text-sm font-bold text-slate-200">
              Projects
            </p>

            <p className="mt-3 text-4xl font-bold text-white">
              0
            </p>

            <p className="mt-2 text-sm font-medium text-slate-400">
              Active projects
            </p>

          </div>

          {/* Tasks */}
          <div className="rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">

            <p className="text-sm font-bold text-slate-200">
              Tasks
            </p>

            <p className="mt-3 text-4xl font-bold text-white">
              0
            </p>

            <p className="mt-2 text-sm font-medium text-slate-400">
              Pending tasks
            </p>

          </div>

          {/* Team members */}
          <div className="rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">

            <p className="text-sm font-bold text-slate-200">
              Team Members
            </p>

            <p className="mt-3 text-4xl font-bold text-white">
              0
            </p>

            <p className="mt-2 text-sm font-medium text-slate-400">
              Workspace members
            </p>

          </div>

        </div>

        {/* Workspace */}
        <div className="mt-8 rounded-2xl border border-white/15 bg-slate-900 p-8 shadow-xl shadow-black/20">

          <h3 className="text-xl font-bold text-white">
            Your Workspace
          </h3>

          <p className="mt-2 max-w-2xl font-medium leading-7 text-slate-200">
            Your projects, tasks, and collaboration features will appear
            here once the backend and authentication are connected.
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            Create Project
          </button>

        </div>

      </section>
    </div>
  );
}