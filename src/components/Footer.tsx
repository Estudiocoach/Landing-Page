import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';

type FooterModal = 'privacy' | 'terms' | 'login' | null;

export interface FooterProps {
  onLoginClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLoginClick }) => {
  const [modal, setModal] = useState<FooterModal>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null);

  const handleOpenLogin = () => {
    if (onLoginClick) {
      onLoginClick();
      return;
    }
    setLoginFeedback(null);
    setModal('login');
  };

  const handleCloseModal = () => {
    setModal(null);
    setLoginFeedback(null);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginFeedback('Ingresa tu email y contraseña para continuar.');
      return;
    }
    setLoginFeedback(
      'Este acceso se vinculará automáticamente con el modal y la sesión de tu proyecto principal.'
    );
  };

  return (
    <>
      <footer className="bg-[#0A0A0A] text-[#9CA3AF] py-10 border-t border-neutral-900 text-[14px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-lg font-black tracking-tight text-white">
              Estudio Coach
            </span>
            <span aria-hidden="true">|</span>
            <span>Estudio Coach © 2026</span>
            <span aria-hidden="true">|</span>
            <span>Agentes Inmobiliarios &amp; Consultores de Negocios</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={handleOpenLogin}
              className="inline-flex items-center gap-1.5 font-semibold text-neutral-200 hover:text-white transition-colors cursor-pointer"
            >
              <Lock className="h-3.5 w-3.5 text-[#0056FF]" aria-hidden="true" />
              <span>Ingresar al Sistema</span>
            </button>
            <button
              type="button"
              onClick={() => setModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              type="button"
              onClick={() => setModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
      </footer>

      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 text-[#111827] shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200">
              <h3 className="font-display text-xl font-black">
                {modal === 'login'
                  ? 'Ingresar al Sistema'
                  : modal === 'privacy'
                    ? 'Política de Privacidad'
                    : 'Términos de Servicio'}
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Cerrar"
                className="p-1 text-neutral-500 hover:text-[#111827] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {modal === 'login' ? (
              <form onSubmit={handleLoginSubmit} noValidate className="space-y-4">
                <p className="text-sm text-[#4B5563]">
                  Accede a tu panel de Estudio Coach. En tu proyecto principal puedes conectar este botón directamente con tu modal de sesión existente mediante la prop{' '}
                  <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded text-[#111827]">
                    onLoginClick
                  </code>
                  .
                </p>

                {loginFeedback && (
                  <div className="rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-xs font-medium text-[#0044CC]">
                    {loginFeedback}
                  </div>
                )}

                <div>
                  <label htmlFor="footer-login-email" className="block text-xs font-bold text-[#111827] mb-1.5">
                    Email
                  </label>
                  <input
                    id="footer-login-email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="usuario@estudiocoach.com"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="footer-login-password" className="block text-xs font-bold text-[#111827] mb-1.5">
                    Contraseña
                  </label>
                  <input
                    id="footer-login-password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#0056FF] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2.5 text-sm font-semibold text-[#4B5563] hover:text-[#111827] cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0056FF] px-5 py-2.5 text-sm font-bold text-white rounded-lg hover:bg-[#0044CC] transition-colors cursor-pointer"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            ) : (
              <>
                <p className="text-sm leading-relaxed text-[#4B5563]">
                  {modal === 'privacy'
                    ? 'Estudio Coach utiliza los datos comerciales proporcionados exclusivamente para evaluar tu negocio, verificar disponibilidad de alianza y coordinar la conversación solicitada. No compartimos ni comercializamos información de nuestros clientes con terceros.'
                    : 'Las alianzas estratégicas de Estudio Coach están sujetas a verificación de exclusividad y cupos disponibles para mantener la excelencia en el servicio para agentes inmobiliarios, consultores de negocios y marcas personales.'}
                </p>
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="bg-[#0056FF] px-5 py-2.5 text-sm font-bold text-white rounded-lg hover:bg-[#0044CC] cursor-pointer"
                  >
                    Entendido
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
