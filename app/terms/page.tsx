'use client';

import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-mist-subtle">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-lg lowercase text-text-primary">parker</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-text-secondary hover:text-text-primary transition">
              Inicio
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
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-text-primary mb-4">
              Términos de Uso
            </h1>
            <p className="text-text-secondary">
              Última actualización: 6 de noviembre, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-text-secondary text-lg">
                Al usar Parker, aceptas y te comprometes a cumplir estos Términos de Uso y la Política de Privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Responsabilidades del Usuario
              </h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Eres responsable de mantener la confidencialidad de tu cuenta iCloud</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Aceptas no usar Parker para ningún propósito ilegal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Aceptas proporcionar información financiera precisa al registrar transacciones</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Disponibilidad del Servicio
              </h2>
              <p className="text-text-secondary">
                Parker funciona localmente en tu dispositivo y en tu cuenta iCloud. Nos esforzamos por mantener un servicio continuo, pero no garantizamos disponibilidad ininterrumpida. Tus datos se sincronizan únicamente a través del servicio CloudKit de Apple.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Cambios en los Términos
              </h2>
              <p className="text-text-secondary">
                Podemos actualizar estos Términos de vez en cuando. Te notificaremos de cambios significativos publicando los Términos actualizados en la app o en nuestro sitio web. El uso continuado de Parker constituye la aceptación de los Términos actualizados.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border-subtle">
            <p className="text-sm text-text-tertiary">
              <Link href="/privacy" className="text-primary hover:text-primary-dark transition">
                Ver Política de Privacidad →
              </Link>
            </p>
          </div>
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
