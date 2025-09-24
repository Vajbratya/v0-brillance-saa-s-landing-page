"use client"

export default function PricingSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Pricing Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              API Empresarial
            </div>
          </div>

          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Integre nossa API de laudos radiológicos
          </div>

          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Solução empresarial para hospitais e clínicas que precisam de integração robusta e escalável.
            <br />
            Preços personalizados baseados no volume e necessidades específicas.
          </div>
        </div>
      </div>

      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center py-16">
        <div className="flex flex-col justify-center items-center gap-8 max-w-md">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#37322F] mb-4">API de Laudos Radiológicos</h3>
            <p className="text-[#605A57] text-base leading-7">
              Integração completa com sistemas hospitalares, processamento em lote, APIs RESTful e suporte técnico
              dedicado.
            </p>
          </div>

          <div className="px-8 py-4 bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2a241f] transition-colors">
            <div className="text-[#FBFAF9] text-base font-medium font-sans">Consultar Vendas</div>
          </div>
        </div>
      </div>
    </div>
  )
}
