import React, { useState } from 'react';
import { X } from 'lucide-react';

type LegalModal = 'privacy' | 'terms' | null;

export const Footer: React.FC = () => {
  const [modal, setModal] = useState<LegalModal>(null);

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
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 text-[#111827] shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
              <h3 className="font-display text-xl font-black">
                {modal === 'privacy' ? 'Política de Privacidad' : 'Términos de Servicio'}
              </h3>
              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Cerrar"
                className="p-1 text-neutral-500 hover:text-[#111827] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-[#4B5563]">
              {modal === 'privacy'
                ? 'Estudio Coach utiliza los datos comerciales proporcionados exclusivamente para evaluar tu negocio, verificar disponibilidad de alianza y coordinar la conversación solicitada. No compartimos ni comercializamos información de nuestros clientes con terceros.'
                : 'Las alianzas estratégicas de Estudio Coach están sujetas a verificación de exclusividad y cupos disponibles para mantener la excelencia en el servicio para agentes inmobiliarios, consultores de negocios y marcas personales.'}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="bg-[#0056FF] px-5 py-2.5 text-sm font-bold text-white rounded-lg hover:bg-[#0044CC] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
