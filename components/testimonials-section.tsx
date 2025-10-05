"use client"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "",
      name: "",
      company: "",
      image: "",
    },
    {
      quote: "",
      name: "",
      company: "",
      image: "",
    },
    {
      quote: "",
      name: "",
      company: "",
      image: "",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="ROI Comprovado"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Resultados que transformam hospitais
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Reduza custos operacionais em até 40%, acelere diagnósticos em 300%
            <br />e melhore a satisfação dos profissionais de saúde.
          </div>
        </div>
      </div>

      <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0">
        <div className="flex-1 py-16 md:py-17 flex flex-col justify-center items-center gap-6">
          <div className="text-center text-[#605A57] text-lg font-normal leading-7 font-sans">
            Em breve: depoimentos de administradores hospitalares
          </div>
        </div>
      </div>
    </div>
  )
}
