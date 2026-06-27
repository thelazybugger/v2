export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
            Cookie Policy
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            How Manova Softs uses cookies on this site.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300 leading-relaxed">
            We use cookies to improve performance, personalize your experience,
            and analyze engagement with our pages.
          </p>
        </header>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20 space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              What are cookies?
            </h2>
            <p className="mt-4 leading-relaxed">
              Cookies are small text files stored by your browser to remember
              preferences and help our site load faster.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">
              How we use them
            </h2>
            <p className="mt-4 leading-relaxed">
              We use cookies for analytics, session management, and to deliver a
              consistent browsing experience.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Managing cookies
            </h2>
            <p className="mt-4 leading-relaxed">
              You can manage or disable cookies through your browser settings.
              Disabling cookies may affect how some site features behave.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
