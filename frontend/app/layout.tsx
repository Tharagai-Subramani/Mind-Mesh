import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind-Mesh | Cognitive Workspace",
  description:
    "A modern cognitive workspace for organizing, collaborating and managing ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

            {/* Logo */}
            <a href="/" className="group">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                  M
                </div>

                <div>
                  <h1 className="text-lg font-bold text-white">
                    Mind-Mesh
                  </h1>

                  <p className="text-xs font-medium text-slate-300">
                    Cognitive Workspace
                  </p>
                </div>

              </div>
            </a>

            {/* Navigation */}
            <nav className="hidden items-center gap-2 sm:flex">

              <a
                href="/"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Home
              </a>

              <a
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Login
              </a>

              <a
                href="/dashboard"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Dashboard
              </a>

            </nav>

          </div>
        </header>

        {/* Main content */}
        <main className="min-h-[calc(100vh-145px)]">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm font-medium text-slate-300">
            © 2026 Mind-Mesh. Cognitive Workspace.
          </div>
        </footer>

      </body>
    </html>
  );
}