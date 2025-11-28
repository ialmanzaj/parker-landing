'use client';

import Link from 'next/link';

export default function Mission() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-mist-subtle">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-lg lowercase text-text-primary">parker</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/mission" className="text-sm text-text-secondary hover:text-text-primary transition">
              Misión
            </Link>
            <a
              href="https://apps.apple.com/us/app/parker-finanzas-personales/id6754345637"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition shadow-sm"
            >
              Descargar Parker
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Intro */}
          <section className="space-y-6">
            <h1 className="text-5xl font-bold text-text-primary">
              Nuestra Misión
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Ayudar a miles de personas a tomar control de sus finanzas personales y vivir sin estrés financiero.
            </p>
          </section>

          {/* Problem */}
          <section className="space-y-6 border-t border-border-subtle pt-12">
            <h2 className="text-3xl font-bold text-text-primary">
              El Problema
            </h2>
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                En este momento, hay millones de personas frustrandes con sus finanzas. No saben cuánto gastan, dónde se va su dinero, o si están en el camino correcto.
              </p>
              <p>
                Quieren cambiar, quieren entender mejor su situación financiera, pero no saben por dónde empezar. Las hojas de cálculo son complicadas. Las apps de banca tradicionales no entienden lo que realmente necesitan. Y los consejeros financieros son caros y no personalizados.
              </p>
              <p>
                En un mundo moderno lleno de distracciones, donde el miedo a perder oportunidades es más fuerte que nunca, la mayoría de personas se quedan atrapadas en la ignorancia financiera, desperdiciando dinero que podrían estar ahorrando o invirtiendo.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="space-y-6 border-t border-border-subtle pt-12">
            <h2 className="text-3xl font-bold text-text-primary">
              Nuestra Solución
            </h2>
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                Parker nace con una idea simple pero poderosa: <strong>las finanzas personales no tienen que ser complicadas</strong>.
              </p>
              <p>
                No necesitas hojas de cálculo complejas. No necesitas aplicaciones bancarias confusas. Lo que necesitas es claridad: tres números que te digan exactamente dónde estás hoy, esta semana, y este mes.
              </p>
              <p>
                Diseñamos Parker pensando en ti. En alguien que quiere entender su dinero en segundos. En alguien que no quiere jerga bancaria o complejidad innecesaria. En alguien que merece una herramienta que se sienta natural de usar, como revisar tus notas.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section className="space-y-6 border-t border-border-subtle pt-12">
            <h2 className="text-3xl font-bold text-text-primary">
              Nuestra Visión
            </h2>
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                Vivimos en un mundo increíblemente rápido. Es el mejor momento para cambiar tus finanzas personales, pero también es el momento con mayores consecuencias para quienes se quedan sin hacer nada.
              </p>
              <p>
                Nuestro objetivo es simple: crear el sistema más simple y útil para ayudar a miles de personas a tomar control de sus finanzas personales. No solo ayudarte a crear un plan, sino ser una herramienta confiable en toda tu jornada, identificando pequeñas mejoras y patrones que te ayuden a crecer.
              </p>
              <p>
                Estamos comprometidos a construir interfaces hermosas, sistemas robustos y experiencias intuitivas que hagan que entender tu dinero sea tan fácil como revisar tus notificaciones.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="space-y-6 border-t border-border-subtle pt-12">
            <div className="bg-white rounded-3xl shadow-sm border border-border-subtle p-12">
              <p className="text-xl font-semibold text-text-primary mb-4">
                La pregunta es simple:
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                ¿De qué lado de la historia quieres estar? ¿Los que tomaron control de sus finanzas, o los que dejaron pasar la oportunidad?
              </p>
              <a
                href="https://apps.apple.com/us/app/parker-finanzas-personales/id6754345637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-primary-dark transition shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Comienza hoy
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 mb-12">
            <div>
              <h3 className="font-semibold mb-4 text-base">Links</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/" className="hover:opacity-100 transition">Inicio</a></li>
                <li><a href="/mission" className="hover:opacity-100 transition">Misión</a></li>
                <li><a href="/privacy" className="hover:opacity-100 transition">Política de Privacidad</a></li>
                <li><a href="/terms" className="hover:opacity-100 transition">Términos de Servicio</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">Contacto</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="https://apps.apple.com/us/app/parker-finanzas-personales/id6754345637" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">App iOS</a></li>
                <li><a href="mailto:support@parker.app" className="hover:opacity-100 transition">support@parker.app</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-75 mb-3 font-semibold">
              Descarga Parker hoy y toma control de tus finanzas personales
            </p>
            <p className="text-sm opacity-70 mb-4">
              Gratis • Sin registro • Sin anuncios • Sin complicaciones
            </p>
            <p className="text-xs opacity-60">
              © 2025 Parker. Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
