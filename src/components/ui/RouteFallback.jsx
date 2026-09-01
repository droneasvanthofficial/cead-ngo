/**
 * Shown while a lazily-loaded route is fetched. Deliberately quiet — a skeleton
 * in the shape of a page header, so the transition reads as loading rather than
 * as a flash of empty screen.
 */
export default function RouteFallback() {
  return (
    <div role="status" aria-live="polite" className="min-h-screen bg-canvas">
      <span className="sr-only">Loading page…</span>

      {/* Header block */}
      <div className="bg-forest-900">
        <div className="container-page py-14 sm:py-16 lg:py-20">
          <div className="max-w-prose animate-pulse space-y-4">
            <div className="h-3 w-32 rounded bg-cream/10" />
            <div className="h-9 w-full max-w-md rounded bg-cream/10" />
            <div className="h-4 w-full max-w-sm rounded bg-cream/10" />
          </div>
        </div>
      </div>

      {/* Body block */}
      <div className="container-page py-section">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-40 rounded bg-cream-darker" />
          <div className="h-8 w-full max-w-lg rounded bg-cream-darker" />
          <div className="space-y-3 pt-4">
            <div className="h-3 w-full max-w-2xl rounded bg-cream-dark" />
            <div className="h-3 w-full max-w-xl rounded bg-cream-dark" />
            <div className="h-3 w-full max-w-md rounded bg-cream-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
