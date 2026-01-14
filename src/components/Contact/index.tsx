const Contact = () => {
  return (
    <section
      id="contacto"
      className="relative z-10 py-10"
    >
      <div className="container">
        <div className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-b from-[#0B1220] to-[#050914] p-10 md:p-14 overflow-hidden">

          {/* Glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              filter: "blur(60px)",
              background:
                "radial-gradient(circle at top, rgba(53,92,255,0.18), transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <p className="mb-2 text-xs tracking-widest text-blue-500">
              SIGUIENTE PASO
            </p>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              ¿Qué pasaría si hoy tomas la decisión correcta?
            </h2>

            <p className="mb-8 text-body-color">
              Cuéntanos en qué punto estás. Nosotros te ayudamos a definir
              el siguiente paso con claridad y sin improvisar.
            </p>

            <ul className="mb-10 space-y-2 text-sm text-body-color">
              <li>🚀 Necesito desarrollar una app o sistema</li>
              <li>🌐 Mi web ya no representa mi negocio</li>
              <li>📈 Quiero escalar y ordenar mis procesos</li>
              <li>🤔 Aún no lo tengo claro, necesito guía</li>
            </ul>

            <form className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="mb-2 block text-sm text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm text-white">
                  Correo
                </label>
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white">
                  Cuéntanos tu situación
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe brevemente qué necesitas o qué problema quieres resolver"
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-500"
                >
                  Quiero claridad antes de avanzar →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
