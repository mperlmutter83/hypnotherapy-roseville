import type { Metadata } from "next";
import WorkForm from "@/components/WorkForm";

export const metadata: Metadata = {
  title: "Looking for Work",
  description:
    "Looking for hypnotherapy work in Roseville? Local hypnotherapy practices are hiring. Fill out the quick form and we'll connect you — or call (415) 322-0298.",
  alternates: {
    canonical: "https://hypnotherapyroseville.com/looking-for-work",
  },
};

const STEPS = [
  {
    n: "1",
    title: "Tell us about yourself",
    body: "A quick 60-second form — no resume, no cover letter, no endless applications.",
  },
  {
    n: "2",
    title: "We connect you",
    body: "We share your details with local hypnotherapy practices that are actively hiring.",
  },
  {
    n: "3",
    title: "You hear back directly",
    body: "Interested businesses contact you by phone, usually within a few days.",
  },
];

const WORK_TYPES = [
  "Certified Hypnotherapists",
  "Smoking Cessation Specialists",
  "Weight Loss Coaching",
  "Anxiety & Stress Programs",
  "Front Desk & Client Intake",
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-purple-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Looking for Work?
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Hypnotherapy Work in Roseville
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-purple-200">
            Local hypnotherapy practices are growing and looking for dependable
            people. Tell us about yourself and we&apos;ll connect you with
            businesses that are hiring — free, fast, and no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block rounded-full bg-purple-600 px-7 py-3 font-bold text-white hover:bg-purple-700 transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href="tel:+14153220298"
              className="inline-block rounded-full border-2 border-purple-300 px-7 py-3 font-bold text-purple-300 hover:bg-purple-300/10 transition-colors"
            >
              Or Call (415) 322-0298
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-lg bg-purple-50 p-8 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-50 border-y border-purple-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            The Kind of Work Available
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Hypnotherapy practices in the Roseville area hire for a range of
            roles, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-lg border border-purple-100 bg-white px-5 py-4 text-gray-700 font-medium shadow-sm"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Apply in 60 Seconds
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Free and confidential — we&apos;ll only share your details with
              businesses that are hiring.
            </p>
            <div className="mt-8">
              <WorkForm />
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Own a hypnotherapy practice and need reliable people?{" "}
            <a
              href="tel:+14153220298"
              className="font-bold text-purple-700 underline"
            >
              Call (415) 322-0298
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
