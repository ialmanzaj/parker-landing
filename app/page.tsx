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
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-mist-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-center relative">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl lowercase text-white font-semibold">parker</span>
          </Link>

          <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center gap-3 sm:gap-6">
            <a
              href="https://apps.apple.com/us/app/parker-expense-tracker-budget/id6754345637"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white text-primary text-xs sm:text-sm font-medium hover:bg-gray-100 transition shadow-sm"
            >
              <span className="hidden sm:inline">Descargar Parker</span>
              <span className="sm:hidden">Descargar</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1">
            <div>
              <p className="text-xs sm:text-sm text-white/70 font-medium mb-3 sm:mb-4 uppercase tracking-wide">
                Expense Tracker & Presupuesto
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Controla tu dinero viendo a dónde se va.
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Visualiza tus gastos en tiempo real. Categoriza automáticamente, sincroniza con iCloud y toma control de tu dinero de forma simple y visual.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <a
                href="https://apps.apple.com/us/app/parker-expense-tracker-budget/id6754345637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white text-primary text-sm sm:text-base font-semibold hover:bg-gray-100 transition w-fit shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Descargar
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <Image
              src="/dashboard.png"
              alt="Parker Dashboard"
              width={800}
              height={1600}
              className="w-[240px] sm:w-[290px] md:w-[340px] lg:w-[390px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              <div key={i} className="bg-white/10 rounded-3xl shadow-sm border border-white/20 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
                {/* Estrellas */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-white/40 fill-white/40" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote en serif */}
                <blockquote className="font-serif text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 leading-snug">
                  "{item.quote}"
                </blockquote>

                {/* Username */}
                <p className="text-sm text-white/60">
                  {item.username}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Lo que Parker ofrece
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
              Todas las herramientas que necesitas para controlar tus gastos y ver a dónde va tu dinero.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: "Hoy, Semana, Mes", icon: '📊', description: 'Visualiza tu gasto en tres períodos clave' },
              { title: "Registro rápido", icon: '⚡', description: 'Captura gastos en segundos' },
              { title: "Categorías visuales", icon: '📁', description: 'Organiza con emojis para fácil identificación' },
              { title: "Historial detallado", icon: '📜', description: 'Revisa todas tus transacciones' },
              { title: "Presupuesto mensual", icon: '📈', description: 'Define y sigue tus límites de gasto' },
              { title: "Widget en Home", icon: '🏠', description: 'Registra gastos sin abrir la app' },
              { title: "Apple Pay tracking", icon: '💳', description: 'Sincroniza automáticamente tus pagos' },
              { title: "Multimoneda", icon: '💱', description: 'Soporte para múltiples monedas' },
              { title: "iCloud Sync", icon: '☁️', description: 'Sincronización automática en todos tus dispositivos' },
              { title: "Notas en gastos", icon: '📝', description: 'Agrega detalles a cada transacción' },
              { title: "Gráficos por categoría", icon: '📊', description: 'Visualiza dónde va tu dinero' },
              { title: "Control total", icon: '💰', description: 'Mantén tus finanzas bajo control' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 sm:p-8 rounded-3xl border border-white/20 hover:border-white/40 hover:shadow-md transition-all cursor-pointer bg-white/10 shadow-sm backdrop-blur-sm"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base text-white mb-1">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-xs sm:text-sm text-white/70">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12">
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links</h3>
              <ul className="space-y-2 text-xs sm:text-sm opacity-80">
                <li><a href="/" className="hover:opacity-100 transition">Inicio</a></li>
                <li><a href="/privacy" className="hover:opacity-100 transition">Política de Privacidad</a></li>
                <li><a href="/terms" className="hover:opacity-100 transition">Términos de Servicio</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h3>
              <ul className="space-y-2 text-xs sm:text-sm opacity-80">
                <li><a href="https://apps.apple.com/us/app/parker-expense-tracker-budget/id6754345637" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">App iOS</a></li>
                <li><a href="mailto:support@parker.app" className="hover:opacity-100 transition">support@parker.app</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm opacity-75 mb-2 sm:mb-3 font-semibold">
              Descarga Parker hoy y toma control de tus finanzas personales
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
