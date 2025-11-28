'use client';

import Link from 'next/link';

export default function Privacy() {
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
              Política de Privacidad
            </h1>
            <p className="text-text-secondary">
              Última actualización: 6 de noviembre, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Almacenamiento de Datos y Privacidad
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Tus Datos te Pertenecen
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Todos tus datos financieros (transacciones, cuentas, categorías) se almacenan exclusivamente en tu cuenta iCloud</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Parker nunca almacena tus datos en nuestros servidores</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>No tenemos acceso a tu información financiera</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Tus datos permanecen completamente privados y bajo tu control</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Qué Recopilamos
                  </h3>
                  <p className="text-text-secondary mb-3">
                    Recopilamos únicamente analíticas de uso no personal y agregadas para mejorar Parker:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Rastreo de eventos de la app (uso de funciones, crashes)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Tipo de dispositivo y versión de iOS</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Métricas generales de rendimiento</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Servicios de Terceros
                  </h3>
                  <p className="text-text-secondary mb-3">
                    Parker utiliza:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span><strong>CloudKit</strong>: Servicio de Apple para sincronizar tus datos de iCloud</span>
                    </li>
                  </ul>
                  <p className="text-text-secondary mt-3">
                    Estos servicios pueden recopilar información técnica según sus respectivas políticas de privacidad, pero ningún dato financiero es compartido con ellos.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Tus Derechos
              </h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span><strong>Acceso</strong>: Controlas todos tus datos almacenados en iCloud</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span><strong>Eliminar</strong>: Puedes eliminar cualquier transacción, cuenta o categoría en cualquier momento</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span><strong>Exportar</strong>: Tus datos permanecen en formato estándar de iCloud</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Contacto
              </h2>
              <p className="text-text-secondary">
                Si tienes preguntas sobre esta Política de Privacidad, por favor contáctanos en:
              </p>
              <p className="text-text-secondary mt-3">
                <strong>Email</strong>: <a href="mailto:support@parkerai.app" className="text-primary hover:text-primary-dark transition">support@parkerai.app</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Cambios en Esta Política
              </h2>
              <p className="text-text-secondary">
                Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos de cambios materiales publicando la nueva política en la app. El uso continuado de Parker significa que aceptas cualquier cambio.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border-subtle">
            <p className="text-sm text-text-tertiary">
              <Link href="/terms" className="text-primary hover:text-primary-dark transition">
                Ver Términos de Uso →
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
