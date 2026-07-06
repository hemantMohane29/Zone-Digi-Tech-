const baseBlock = 'rounded-full bg-stone-200/80 dark:bg-stone-800/80';

function SectionSkeleton({ className = '' }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className={`h-4 w-24 ${baseBlock} mb-6`} />
      <div className={`h-10 w-3/4 ${baseBlock} mb-4`} />
      <div className={`h-4 w-full max-w-2xl ${baseBlock} mb-3`} />
      <div className={`h-4 w-2/3 max-w-xl ${baseBlock} mb-8`} />
    </div>
  );
}

export default function PageSkeleton({ page = 'home' }) {
  const renderVariant = () => {
    switch (page) {
      case 'about':
        return (
          <div className="space-y-10">
            <section className="py-16">
              <SectionSkeleton />
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="h-72 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
                <div className="space-y-4">
                  <div className="h-5 w-2/3 rounded-full bg-stone-200/80 dark:bg-stone-800/80" />
                  <div className="h-4 w-full rounded-full bg-stone-200/80 dark:bg-stone-800/80" />
                  <div className="h-4 w-5/6 rounded-full bg-stone-200/80 dark:bg-stone-800/80" />
                  <div className="h-4 w-4/5 rounded-full bg-stone-200/80 dark:bg-stone-800/80" />
                  <div className="grid grid-cols-2 gap-4 pt-3">
                    <div className="h-24 rounded-2xl bg-stone-200/70 dark:bg-stone-800/70" />
                    <div className="h-24 rounded-2xl bg-stone-200/70 dark:bg-stone-800/70" />
                  </div>
                </div>
              </div>
            </section>
            <section className="grid gap-5 md:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-40 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
              ))}
            </section>
          </div>
        );
      case 'services':
        return (
          <div className="space-y-10">
            <section className="py-12">
              <SectionSkeleton />
            </section>
            <section className="grid gap-5 lg:grid-cols-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-48 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
              ))}
            </section>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-10">
            <section className="py-12">
              <SectionSkeleton />
            </section>
            <div className="flex gap-3">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-10 w-24 rounded-full bg-stone-200/70 dark:bg-stone-800/70" />
              ))}
            </div>
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-80 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
              ))}
            </section>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-8">
            <section className="py-12">
              <SectionSkeleton />
            </section>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
              <div className="space-y-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-24 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
                ))}
              </div>
              <div className="h-[420px] rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
            </div>
          </div>
        );
      case 'home':
      default:
        return (
          <div className="space-y-10">
            <section className="py-16">
              <SectionSkeleton />
              <div className="mt-8 flex gap-4">
                <div className="h-12 w-36 rounded-full bg-stone-200/70 dark:bg-stone-800/70" />
                <div className="h-12 w-36 rounded-full bg-stone-200/70 dark:bg-stone-800/70" />
              </div>
            </section>
            <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-32 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
              ))}
            </section>
            <section className="grid gap-5 lg:grid-cols-2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="h-48 rounded-3xl bg-stone-200/70 dark:bg-stone-800/70" />
              ))}
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 dark:bg-[#0a0a0f] sm:px-6 lg:px-8" aria-busy="true" aria-label="Loading page content">
      <div className="mx-auto max-w-7xl">{renderVariant()}</div>
    </div>
  );
}
