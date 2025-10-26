import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Navbar />

      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Build & Grow with Creators
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-8">
          Creoflow helps creators monetize, manage, and scale their audience — all from one dashboard.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/login" className="inline-block">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
          </Link>
          <a href="#features" className="inline-block">
            <button className="border border-slate-300 px-6 py-3 rounded-md text-slate-700 hover:bg-slate-100">
              Learn more
            </button>
          </a>
        </div>
      </section>

      <section id="features" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">What you can do</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="mb-4">
              <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.333-2 4-2 6 0s2 4 0 6-4 2-6 0-2-4 0-6zM6 16l4 4" /></svg>
            </div>
            <h3 className="font-semibold mb-2">Monetization</h3>
            <p className="text-sm text-slate-600">Connect payment providers and start charging subscribers in minutes.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <div className="mb-4">
              <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6 4-4 8 8" /></svg>
            </div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-slate-600">Track audience growth, revenue, and engagement with simple dashboards.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <div className="mb-4">
              <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.866-3.134 7-7 7m14-7c0 3.866-3.134 7-7 7" /></svg>
            </div>
            <h3 className="font-semibold mb-2">Integrations</h3>
            <p className="text-sm text-slate-600">Easy integrations with payment gateways, email tools and analytics platforms.</p>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Ready to grow?</h3>
          <p className="text-slate-600 mb-6">Create your free account and start building your creator business today.</p>
          <Link href="/login">
            <button className="bg-sky-600 text-white px-6 py-3 rounded-md">Create account</button>
          </Link>
        </div>
      </section>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Creoflow · <Link href="/about">About</Link> · <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}