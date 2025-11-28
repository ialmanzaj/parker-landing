'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <p className="text-sm text-text-secondary font-medium mb-4 uppercase tracking-wide">
                Finanzas personales simplificadas
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-text-primary leading-tight">
                Controla tu dinero en tres números.
              </h1>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed">
              Registra gastos en segundos, sigue tu presupuesto mensual y entiende tu dinero al instante. Sin hojas de cálculo, sin complicaciones.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <a
                href="https://apps.apple.com/us/app/parker-finanzas-personales/id6754345637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-primary-dark transition w-fit shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Descargar gratis
              </a>
            </div>
          </div>

          <div className="relative h-[600px]">
            <div className="relative h-full flex items-center justify-center">
              <div className="w-72 h-full rounded-3xl bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-white p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-gray-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-black" />
                      <div className="w-1 h-1 rounded-full bg-black" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-4 pt-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-xs font-semibold text-gray-900">$9.1K</span>
                          <span className="text-xs text-gray-500">mes</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-3">Este mes</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-xs font-semibold text-gray-900">$6.2K</span>
                          <span className="text-xs text-gray-500">semana</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-3">Esta semana</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-xs font-semibold text-gray-900">$5.4K</span>
                          <span className="text-xs text-gray-500">hoy</span>
                        </div>
                        <div className="text-xs text-gray-600">Hoy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-background relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Grid de testimonios */}
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                quote: "Finalmente una app de finanzas que no me estresa al usarla.",
                username: "@maria_designs"
              },
              {
                quote: "La simplicidad de Parker cambió completamente mi relación con el dinero.",
                username: "@carlos_dev"
              },
              {
                quote: "Tres números. Eso es todo lo que necesito para estar al día.",
                username: "@ana_marketing"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm border border-border-ultra-subtle p-10">
                {/* Estrellas grises */}
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-gray-300 fill-gray-300" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote en serif */}
                <blockquote className="font-serif text-xl font-semibold text-text-primary mb-4 leading-snug">
                  "{item.quote}"
                </blockquote>

                {/* Username */}
                <p className="text-sm text-text-tertiary">
                  {item.username}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-text-primary">
              Lo que Parker ofrece
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Todo lo que necesitas para entender tu dinero en tres números clave.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {[
              { title: "Tres números clave", icon: '📊', description: 'Control centrado en hoy, semana y mes' },
              { title: "Registro rápido", icon: '⚡', description: 'Captura tus gastos en segundos cada día' },
              { title: "Historial completo", icon: '📜', description: 'Revisa toda tu contabilidad personal' },
              { title: "Categorías con emojis", icon: '📁', description: 'Organiza tus gastos de forma visual y clara' },
              { title: "Personalización total", icon: '🎨', description: 'Crea categorías y presupuestos a tu medida' },
              { title: "Presupuesto mensual", icon: '📈', description: 'Sigue tu presupuesto y mantén el control' },
              { title: "Widgets rápidos", icon: '🏠', description: 'Registra gastos sin abrir la app' },
              { title: "Multimoneda", icon: '💱', description: 'Soporte para varias monedas locales' },
              { title: "Sincronización segura", icon: '☁️', description: 'Tu dinero sincronizado en iCloud automáticamente' },
              { title: "Gastos compartidos", icon: '👨‍👩‍👧', description: 'Control personal o compartido en familia' },
              { title: "Análisis de gastos", icon: '💡', description: 'Entiende en qué se va realmente tu dinero' },
              { title: "Protege tu ahorro", icon: '💰', description: 'Mantén tus finanzas personales bajo control' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl border border-border-subtle hover:border-border-medium hover:shadow-md transition-all cursor-pointer bg-white shadow-sm"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-text-primary mb-1">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 px-8">
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
