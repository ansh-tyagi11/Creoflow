import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className=" text-white flex flex-col">
            <section className="container mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-16">

                <div className="lg:w-1/2 backdrop-blur-2xl bg-white/10 border border-white/40 shadow-2xl rounded-3xl p-10 text-center lg:text-left" style={{ boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                        Empower your creativity.
                        Earn from your biggest fans.
                    </h1>
                    <p className="text-lg text-white mb-6 max-w-xl">
                        Creoflow helps creators build sustainable income through memberships,
                        exclusive content, and fan communities — everything you need to create, share, and get paid.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <Link href="/login" className="inline-block">
                            <button className="bg-white/25 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/40 transition-all shadow-md">
                                Start your page
                            </button>
                        </Link>
                        <a href="#how-it-works" className="inline-block">
                            <button className="border border-white/85 px-6 py-3 rounded-full text-white/90 hover:bg-white/20 transition-all shadow-sm">
                                Learn how it works
                            </button>
                        </a>
                    </div>

                    <div className="mt-6 text-sm text-white">
                        No setup fees · Keep your brand · Get paid directly
                    </div>
                </div>

                <div className="lg:w-1/2 backdrop-blur-2xl bg-white/10 border border-white/40 rounded-3xl p-10 shadow-xl text-center" style={{ boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}>
                    <div className="text-lg font-semibold mb-2 text-white/90">
                        Creator Dashboard Preview
                    </div>
                    <div className="text-sm text-white/70">
                        Manage memberships · Share posts · Track earnings
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-16" >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-12 drop-shadow-lg">
                        How Creoflow Works
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "1. Create your page",
                                desc: "Customize your creator profile with content, tiers, and your unique brand.",
                            },
                            {
                                title: "2. Offer memberships",
                                desc: "Fans subscribe to support you monthly and unlock exclusive perks.",
                            },
                            {
                                title: "3. Earn consistently",
                                desc: "Receive payments directly through Stripe or Razorpay — no middlemen.",
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="p-6 backdrop-blur-lg bg-white/10 border border-white/40 rounded-2xl shadow-md hover:shadow-lg hover:transition ease-in-out duration-300 hover:translate-y-[-3px]" style={{ boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}>
                                <h3 className="font-semibold mb-2 text-white">{step.title}</h3>
                                <p className="text-sm text-white/90">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-12 drop-shadow-lg">
                        Tools built for creators
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Flexible Memberships",
                                desc: "Offer multiple tiers and rewards — from exclusive posts to personal shoutouts.",
                            },
                            {
                                title: "Fan Community",
                                desc: "Connect with your supporters through posts, polls, and direct messages.",
                            },
                            {
                                title: "Creator Analytics",
                                desc: "Track your growth and revenue in real-time to plan your next move.",
                            },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="p-6 backdrop-blur-lg bg-white/10 border border-white/40 rounded-2xl shadow-md hover:shadow-lg hover:transition ease-in-out duration-300 hover:translate-y-[-3px]" style={{ boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}>
                                <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                                <p className="text-sm text-white/90">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 text-white text-center backdrop-blur-xl bg-white/10 border-t border-white/40" style={{ boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}>
                <h3 className="text-2xl font-semibold mb-2">
                    Turn your passion into a paycheck.
                </h3>
                <p className="mb-6 text-white/80 max-w-2xl mx-auto">
                    Join thousands of creators who trust Creoflow to monetize their content and connect with their audience.
                </p>
                <Link href="/login">
                    <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all" style={{ boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4)' }}>
                        Start your creator journey
                    </button>
                </Link>
            </section>
        </main>
    );
}
