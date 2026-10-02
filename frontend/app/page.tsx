export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-80 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pt-28">

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900 px-4 py-2 text-sm font-semibold text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Welcome to Mind-Mesh
          </div>

          {/* Main heading */}
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Think better.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Work smarter.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-200">
            A modern cognitive workspace designed to help you organize ideas,
            collaborate with your team, and manage your work from one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/dashboard"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Open Dashboard
            </a>

            <a
              href="/login"
              className="rounded-xl border border-white/20 bg-slate-900 px-6 py-3 font-bold text-white transition hover:border-white/30 hover:bg-slate-800"
            >
              Get Started
            </a>

          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          {/* Organize */}
          <div className="rounded-2xl border border-white/15 bg-slate-900 p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/15 text-xl font-bold text-cyan-300">
              ✦
            </div>

            <h3 className="text-xl font-bold text-white">
              Organize
            </h3>

            <p className="mt-3 font-medium leading-7 text-slate-200">
              Keep your ideas, projects, and important information organized
              inside one connected workspace.
            </p>

          </div>

          {/* Collaborate */}
          <div className="rounded-2xl border border-white/15 bg-slate-900 p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/15 text-xl font-bold text-blue-300">
              ◈
            </div>

            <h3 className="text-xl font-bold text-white">
              Collaborate
            </h3>

            <p className="mt-3 font-medium leading-7 text-slate-200">
              Bring your team together and create a shared space for
              collaboration and productivity.
            </p>

          </div>

          {/* Manage */}
          <div className="rounded-2xl border border-white/15 bg-slate-900 p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/15 text-xl font-bold text-violet-300">
              ◆
            </div>

            <h3 className="text-xl font-bold text-white">
              Manage
            </h3>

            <p className="mt-3 font-medium leading-7 text-slate-200">
              Get a clear view of your workspace and manage your projects and
              tasks efficiently.
            </p>

          </div>

        </div>
      </section>
    </div>
  );
}