export default function McMasterSmartParkingSite() {
  const lots = [
    { name: "Lot A", status: "Available", spots: 24, walk: "6 min", window: "8:00–10:00" },
    { name: "Lot B", status: "Limited", spots: 6, walk: "4 min", window: "8:30–10:30" },
    { name: "Remote Overflow", status: "Open", spots: 53, walk: "Shuttle", window: "All day" },
  ];

  const features = [
    {
      title: "Reservation dashboard",
      text: "Students can view lots by time window, compare walking time, and secure a space before arriving on campus.",
    },
    {
      title: "Priority rule engine",
      text: "Accessibility users, carpools, and schedule-sensitive users get protected access windows that improve fairness and policy alignment.",
    },
    {
      title: "Real-time lot status",
      text: "Availability updates reduce circling time and help drivers choose the right lot on the first attempt.",
    },
    {
      title: "Remote overflow option",
      text: "Overflow capacity can be linked into the same booking flow for peak periods without requiring immediate new construction.",
    },
  ];

  const metrics = [
    { label: "Reliability", value: "High" },
    { label: "Search time", value: "Lower" },
    { label: "Affordability", value: "Better than new garage" },
    { label: "Deployment speed", value: "Pilot-ready" },
  ];

  const steps = [
    "Choose your arrival window",
    "Compare lots and reserve a space",
    "Receive permit confirmation and lot guidance",
    "Check live status on the way to campus",
    "Use overflow routing if central lots fill",
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">McMaster Parking</div>
            <div className="text-lg font-bold">Smart Reservation Pilot</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#solution" className="hover:text-black">Solution</a>
            <a href="#features" className="hover:text-black">Features</a>
            <a href="#preview" className="hover:text-black">Preview</a>
            <a href="#impact" className="hover:text-black">Impact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
            Designed from the chosen course-report concept
          </div>
          <h1 className="max-w-xl text-4xl font-black tracking-tight md:text-6xl">
            Reserve parking before you arrive.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
            This website mockup represents the report’s selected solution: a digital-first parking reservation and permit-management system for McMaster commuters focused on reliability, fairness, and faster deployment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#preview" className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
              View app preview
            </a>
            <a href="#features" className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5">
              Explore features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-wide text-neutral-500">{metric.label}</div>
                <div className="mt-2 text-sm font-semibold">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="preview" className="relative">
          <div className="absolute -left-4 top-8 h-40 w-40 rounded-full bg-neutral-200 blur-3xl" />
          <div className="absolute -right-4 bottom-0 h-48 w-48 rounded-full bg-neutral-300 blur-3xl" />
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-neutral-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-neutral-400">Today</div>
                  <div className="mt-1 text-2xl font-bold">8:30 AM Arrival</div>
                </div>
                <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm">Permit Active</div>
              </div>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <div className="text-sm text-neutral-300">Recommended lot</div>
                <div className="mt-2 text-2xl font-bold">Lot A</div>
                <div className="mt-1 text-sm text-neutral-300">24 spaces left • 6 min walk • Reserved until 10:00 AM</div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {lots.map((lot) => (
                <div key={lot.name} className="rounded-2xl border border-neutral-200 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold">{lot.name}</div>
                      <div className="mt-1 text-sm text-neutral-600">{lot.window} • {lot.walk}</div>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                      {lot.status}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-neutral-500">Available spaces</div>
                    <div className="text-lg font-bold">{lot.spots}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Why this concept was chosen</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                A faster, lower-disruption alternative to construction-heavy parking expansion.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
                The selected concept improves parking predictability using existing infrastructure instead of depending on a major garage build. It focuses on booking certainty, better allocation rules, clearer communication, and data-driven lot management.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="text-sm font-semibold">Best fit for the report goals</div>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  Supports affordability, reliability, space efficiency, and operational feasibility while staying realistic for a pilot rollout.
                </p>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="text-sm font-semibold">Built for phased deployment</div>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  The digital core can launch first, while sensors, signage, or remote overflow partnerships can be layered in later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Core features</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">The website mirrors the refined prototype in the report.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1">
              <div className="text-lg font-bold">{feature.title}</div>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">User journey</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">From uncertainty to confirmed access.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-300">
              The design is centered on reducing circling, improving fairness, and giving commuter students better information before they leave for campus.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-900">
                  {index + 1}
                </div>
                <div className="pt-1 text-sm leading-7 text-neutral-200">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Administrative dashboard</div>
            <h3 className="mt-3 text-2xl font-black tracking-tight">Parking Services visibility built in.</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-neutral-100 p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500">Reserved today</div>
                <div className="mt-2 text-3xl font-black">842</div>
              </div>
              <div className="rounded-2xl bg-neutral-100 p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500">Overflow activations</div>
                <div className="mt-2 text-3xl font-black">37</div>
              </div>
              <div className="rounded-2xl bg-neutral-100 p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500">Average search reduction</div>
                <div className="mt-2 text-3xl font-black">31%</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              This section reflects the report’s emphasis on operational manageability, data collection, and phased rollout. Parking Services can monitor demand, tune allocation rules, and decide when to activate overflow capacity.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Pilot outcomes</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-700">
              <p>• Lower uncertainty for commuter students</p>
              <p>• Better support for accessibility and carpool priorities</p>
              <p>• Less circling and clearer lot communication</p>
              <p>• Faster implementation than a garage-first approach</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>Concept website inspired by the selected McMaster smart parking reservation solution.</div>
          <div>Built as a clean prototype for presentation and iteration.</div>
        </div>
      </footer>
    </div>
  );
}
