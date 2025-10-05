"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Qual o ROI esperado ao implementar a API de Laudos IA?",
    answer:
      "Nossos clientes hospitalares reportam redução de 40% nos custos operacionais de radiologia, aumento de 300% na velocidade de diagnósticos e ROI positivo em 90 dias. A automação elimina retrabalho e otimiza a produtividade médica.",
  },
  {
    question: "Como é o processo de implementação em ambiente hospitalar?",
    answer:
      "Implementação completa em 48 horas com zero downtime. Nossa equipe técnica gerencia toda integração com sistemas PACS, RIS e HIS existentes. Incluímos treinamento da equipe e suporte 24/7 durante a transição.",
  },
  {
    question: "A solução atende às regulamentações de saúde brasileiras?",
    answer:
      "Sim, nossa plataforma é 100% compliance com LGPD, CFM e ANVISA. Certificações ISO 27001, criptografia de nível hospitalar e auditorias regulares garantem máxima segurança para dados médicos sensíveis.",
  },
  {
    question: "Que tipo de suporte oferecemos para administradores hospitalares?",
    answer:
      "Suporte técnico 24/7, gerente de conta dedicado, SLA de 99.9% de uptime, monitoramento proativo e relatórios executivos mensais com métricas de performance e ROI para apresentação à diretoria.",
  },
  {
    question: "A solução escala para redes hospitalares grandes?",
    answer:
      "Absolutamente. Nossa arquitetura cloud suporta milhares de laudos simultâneos, multi-tenancy para diferentes unidades, dashboards centralizados e APIs para integração com ERPs hospitalares e sistemas de gestão.",
  },
  {
    question: "Como iniciar um projeto piloto na minha instituição?",
    answer:
      "Agende uma demonstração executiva, definimos um projeto piloto de 30 dias sem custo, implementamos em uma unidade específica e apresentamos relatório completo de ROI para decisão de expansão institucional.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Dúvidas de administradores
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Entenda como nossa API reduz custos,
            <br className="hidden md:block" />
            acelera diagnósticos e maximiza ROI.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
