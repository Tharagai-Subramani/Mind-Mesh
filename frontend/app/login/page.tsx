export default function Login() {
  return (
    <div className="relative flex min-h-[calc(100vh-145px)] items-center justify-center overflow-hidden bg-slate-950 px-6 py-16">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Login card */}
      <div className="w-full max-w-md rounded-3xl border border-white/15 bg-slate-900 p-8 shadow-2xl shadow-black/30">

        {/* Logo and heading */}
        <div className="mb-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-500/25">
            M
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Welcome back
          </h2>

          <p className="mt-2 text-sm font-medium text-slate-200">
            Sign in to continue to your Mind-Mesh workspace.
          </p>

        </div>

        {/* Login form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-white"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-white"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/20 bg-slate-950 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          {/* Sign in button */}
          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
          >
            Sign In
          </button>

        </form>

        {/* Footer message */}
        <p className="mt-6 text-center text-xs font-medium text-slate-300">
          Authentication will be connected in the next phase.
        </p>

      </div>
    </div>
  );
}