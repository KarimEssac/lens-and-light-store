import { TRUST_BADGES } from '@/lib/constants';

export default function TrustBadges() {
  return (
    <section className="px-6 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {TRUST_BADGES.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              {badge.icon}
            </span>
            <div>
              <p className="font-bold text-sm">{badge.title}</p>
              <p className="text-xs text-gray-500">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}