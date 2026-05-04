import React from 'react';
import { FiClock, FiBookOpen, FiZap } from 'react-icons/fi';

const StudyTips = () => {
  return (
    <section className="w-full bg-[#E1E2ED]/50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <article className="rounded-4xl bg-slate-100 p-5 shadow-sm ring-1 ring-slate-200/70">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-200 text-slate-700 shadow-sm">
              <FiBookOpen size={24} />
            </div>
            <h2 className="mt-8 text-3xl font-semibold text-slate-900">
              Learning Resources
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Maximize your retention and minimize stress with our evidence-based study techniques and time management frameworks.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors duration-300 hover:text-sky-800"
            >
              Access Library
              <span aria-hidden="true">→</span>
            </a>
          </article>

          <div className="grid gap-6">
            <article className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-700 shadow-sm">
                <FiClock size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Pomodoro Technique
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Break your work into focused 25-minute intervals separated by short breaks to maintain peak cognitive function without burnout.
              </p>
            </article>

            <article className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-700 shadow-sm">
                <FiZap size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Active Recall
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Shift from passive reading to active self-testing. This method strengthens neural pathways and significantly improves long-term memory.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyTips;