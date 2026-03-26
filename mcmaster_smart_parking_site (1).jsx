import { motion } from "framer-motion";
import { CalendarDays, CarFront, CheckCircle2, ChevronRight, Clock3, MapPinned, ShieldCheck, Sparkles, BarChart3, Users, Route, BellRing } from "lucide-react";

const lots = [
  {
    name: "Lot A",
    tag: "Best match",
    status: "24 spots left",
    walk: "6 min walk",
    price: "$8.50",
    fill: "72% full",
  },
  {
    name: "Lot B",
    tag: "Closest",
    status: "6 spots left",
    walk: "4 min walk",
    price: "$9.25",
    fill: "91% full",
  },
  {
    name: "Remote Overflow",
    tag: "Budget",
    status: "53 spots left",
    walk: "Shuttle access",
    price: "$5.00",
    fill: "38% full",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Timed reservations",
    text: "Drivers book around their class schedule, secure a spot in advance, and avoid the uncertainty of peak arrival windows.",
  },
  {
    icon: ShieldCheck,
    title: "Priority access rules",
    text: "Accessibility users, carpools, and schedule-sensitive commuters can receive protected allocation windows that align with campus policy.",
  },
  {
    icon: Route,
    title: "Live capacity guidance",
    text: "Real-time lot updates reduce circling and redirect users earlier when a preferred lot is approaching capacity.",
  },
  {
    icon: BarChart3,
    title: "Operations analytics",
    text: "Parking Services can monitor demand, tune allocation logic, and activate overflow resources using live operational data.",
  },
];

const stats = [
  { label: "Search time reduction", value: "31%" },
  { label: "Pilot-ready rollout", value: "Fast" },
  { label: "Infrastructure disruption", value: "Low" },
  { label: "Daily reservation confidence", value: "High" },
];

const journey = [
  {
    title: "Plan around your schedule",
    text: "Select your arrival window, destination, and any eligibility preferences before leaving for campus.",
  },
  {
    title: "Reserve with confidence",
    text: "Compare lots by walking time, remaining capacity, and price, then reserve the option that best fits your day.",
  },
  {
    title: "Arrive with live guidance",
    text: "Receive active permit confirmation, entry details, and overflow rerouting if conditions change.",
  },
];

const dashboardStats = [
  { label: "Reserved today", value: "842" },
  { label: "Overflow activations", value: "37" },
  { label: "Peak occupancy", value: "94%" },
  { label: "Support tickets", value: "12" },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300 backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

export default function McMasterSmartParkingSite() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_26%),linear-gradient(180deg,#07111f_0%,#0b1220_34%,#eef2ff_34%,#f8fafc_100%)] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 shadow-lg shadow-violet-900/30">
              <CarFront className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">McMaster Parking</div>
              <div className="text-sm font-semibold text-white">Smart Reservation Platform</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#product" className="transition hover:text-white">Product</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#operations" className="transition hover:text-white">Operations</a>
            <a href="#impact" className="transition hover:text-white">Impact</a>
          </nav>

          <div className="hidden md:block">
            <button className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
              Request pilot
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <SectionLabel>Designed from the chosen report solution</SectionLabel>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Campus parking that feels reserved, predictable, and modern.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
                A production-style concept site for a digital-first McMaster parking system built around advance reservations, real-time lot visibility, equitable allocation rules, and operational control for Parking Services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5">
                  Explore the product
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">
                  View student experience
                </button>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12 + index * 0.06 }}
                    className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-xl"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                    <div className="mt-2 text-lg font-bold text-white">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-sky-400/30 blur-3xl" />

              <div className="relative rounded-[34px] border border-white/10 bg-white/8 p-3 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07111d] text-white">
                  <div className="border-b border-white/10 bg-white/5 px-5 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Student dashboard</div>
                        <div className="mt-1 text-2xl font-bold">Good morning, Landon</div>
                      </div>
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm font-semibold text-emerald-300">
                        Permit active
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 p-5">
                    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 p-5 shadow-lg shadow-indigo-950/30">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Recommended lot</div>
                            <div className="mt-2 text-3xl font-black">Lot A</div>
                            <div className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                              Reserved for your 8:30 AM arrival with a short walk to campus core and healthy remaining capacity.
                            </div>
                          </div>
                          <div className="rounded-2xl bg-white/15 px-3 py-2 text-sm font-semibold text-white">Until 10:00 AM</div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm">
                          <div className="rounded-2xl bg-white/15 px-3 py-2">24 spots left</div>
                          <div className="rounded-2xl bg-white/15 px-3 py-2">6 min walk</div>
                          <div className="rounded-2xl bg-white/15 px-3 py-2">$8.50 permit</div>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                          <Clock3 className="h-4 w-4" />
                          Today’s trip
                        </div>
                        <div className="mt-4 space-y-4">
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Arrival window</div>
                            <div className="mt-1 text-lg font-semibold text-white">8:30–10:00 AM</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Destination</div>
                            <div className="mt-1 text-lg font-semibold text-white">Engineering buildings</div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Alerts</div>
                            <div className="mt-1 text-sm text-slate-300">Overflow available if occupancy spikes before arrival.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {lots.map((lot) => (
                        <div
                          key={lot.name}
                          className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08] sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                              <MapPinned className="h-5 w-5 text-slate-200" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <div className="text-base font-semibold text-white">{lot.name}</div>
                                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                                  {lot.tag}
                                </span>
                              </div>
                              <div className="mt-1 text-sm text-slate-400">{lot.walk} • {lot.fill}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 sm:gap-6">
                            <div>
                              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Availability</div>
                              <div className="mt-1 text-sm font-semibold text-white">{lot.status}</div>
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Price</div>
                              <div className="mt-1 text-sm font-semibold text-white">{lot.price}</div>
                            </div>
                            <button className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                              Reserve
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="bg-slate-950 text-white shadow-[0_18px_60px_rgba(15,23,42,0.34)]">
              <div className="p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Why this solution wins</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                  A premium user experience without the cost and delay of garage-first expansion.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  The chosen concept improves parking reliability by making existing supply easier to access, better allocated, and more transparent. It emphasizes fairness, deployment speed, and lower disruption while still supporting future system growth.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold">Digital-first rollout</div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Launch the reservation core first, then layer in signage, automation, or sensor integrations over time.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold">Policy-ready operations</div>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Supports priority allocation logic, overflow routing, and administrative oversight within one platform.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-6">
              <Card>
                <div className="p-8 md:p-10">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Experience principles</div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      "Predictable morning arrivals",
                      "Lower campus circling",
                      "Fairer access rules",
                      "Clear overflow options",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <CheckCircle2 className="h-5 w-5 text-slate-700" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <div className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                      <BellRing className="h-5 w-5 text-violet-700" />
                    </div>
                    <div className="mt-4 text-lg font-bold">Smart notifications</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Users get reservation confirmation, arrival reminders, and overflow guidance before congestion becomes a problem.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
                      <Users className="h-5 w-5 text-sky-700" />
                    </div>
                    <div className="mt-4 text-lg font-bold">Equity-aware access</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Priority logic helps the platform better serve accessibility needs and campus commuting realities.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Core platform capabilities</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">A cleaner, more intuitive commuter experience.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The site now reads like a modern SaaS product page while still matching the report’s selected solution and prototype direction.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Card className="h-full bg-white">
                    <div className="p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-5 text-xl font-bold text-slate-950">{feature.title}</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <Card className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-[0_18px_60px_rgba(15,23,42,0.36)]">
              <div className="p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">User journey</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight">From uncertain parking to confident arrival.</h2>
                <div className="mt-8 space-y-5">
                  {journey.map((item, index) => (
                    <div key={item.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-base font-semibold">{item.title}</div>
                        <p className="mt-1 text-sm leading-7 text-slate-300">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-8 py-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Mobile reservation flow</div>
                <div className="mt-2 text-2xl font-black text-slate-950">Fast enough for daily use</div>
              </div>
              <div className="grid gap-4 p-8 md:grid-cols-2">
                {[
                  { label: "1", title: "Choose time window", text: "Book around your first class, lab, or campus appointment." },
                  { label: "2", title: "Compare options", text: "See price, walk time, and current capacity in one place." },
                  { label: "3", title: "Confirm permit", text: "Receive instant reservation confirmation and directions." },
                  { label: "4", title: "Adapt if conditions change", text: "Use overflow routing or alternate lot suggestions automatically." },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-semibold text-slate-400">Step {item.label}</div>
                    <div className="mt-2 text-lg font-bold text-slate-950">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="operations" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="overflow-hidden bg-white">
              <div className="border-b border-slate-200 bg-slate-50 px-8 py-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Parking Services dashboard</div>
                <div className="mt-2 text-2xl font-black text-slate-950">Administrative visibility built in</div>
              </div>
              <div className="p-8">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {dashboardStats.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                      <div className="mt-2 text-3xl font-black text-slate-950">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="text-sm font-semibold text-slate-950">Live control panel</div>
                    <div className="mt-4 space-y-4">
                      {[
                        "Activate remote overflow at demand threshold",
                        "Adjust protected access windows for priority groups",
                        "Monitor occupancy by lot and arrival block",
                        "Export pilot metrics for planning decisions",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-700" />
                          <p className="text-sm leading-7 text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-sky-500 p-6 text-white shadow-lg shadow-violet-900/20">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Operational outcome</div>
                    <div className="mt-3 text-2xl font-black">Less guesswork, better utilization.</div>
                    <p className="mt-3 text-sm leading-7 text-white/85">
                      The platform supports evidence-based decisions instead of relying on static permits and reactive overflow communication.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-950 text-white shadow-[0_18px_60px_rgba(15,23,42,0.34)]">
              <div className="p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Why it feels production-ready</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight">Polished enough to present like a real startup product.</h2>
                <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300">
                  <p>This version uses a stronger visual hierarchy, premium gradients, layered glassmorphism, richer spacing, and more realistic product content.</p>
                  <p>It now looks less like a class wireframe and more like a launch-ready concept page for a campus mobility platform.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Card className="overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-violet-950 text-white shadow-[0_20px_80px_rgba(15,23,42,0.38)]">
            <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Impact</div>
                <h2 className="mt-3 text-4xl font-black tracking-tight">A smarter commuting experience for students, and a better operating model for campus.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  This concept aligns with the report’s decision to prioritize a scalable, lower-cost, lower-disruption parking solution that can still feel meaningfully innovative to end users.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Reduced circling and frustration",
                  "Improved parking confidence before travel",
                  "Better priority handling and fairness",
                  "Phased implementation with measurable results",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
