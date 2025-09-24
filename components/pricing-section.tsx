"use client"

import { useState } from "react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const pricing = {
    starter: {
      monthly: "Grátis",
      annually: "Grátis",
    },
    professional: {
      monthly: "Sob consulta",
      annually: "Sob consulta",
    },
    enterprise: {
      monthly: 899,
      annually: 719, // 20% discount for annual
    },
  }

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full mb-8 shadow-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          <span className="text-sm font-semibold text-blue-700">Planos & Preços</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
          Escolha o plano ideal para sua clínica
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
          Escale suas operações radiológicas com preços flexíveis que crescem com sua equipe.
          <br />
          <span className="text-blue-600 font-medium">Comece grátis, faça upgrade quando estiver pronto.</span>
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <div className="bg-white p-1.5 rounded-xl shadow-lg border border-gray-200/50">
          <button
            onClick={() => setBillingPeriod("annually")}
            className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              billingPeriod === "annually"
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Anual
            {billingPeriod === "annually" && (
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">20% OFF</span>
            )}
          </button>
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              billingPeriod === "monthly"
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Mensal
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200/50 rounded-3xl p-8 relative hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent rounded-3xl"></div>
            <div className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Básico</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Perfeito para clínicas pequenas e radiologistas iniciantes.
                </p>

                <div className="mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">Grátis</div>
                  <div className="text-sm text-gray-500 font-medium">para sempre</div>
                </div>

                <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 hover:shadow-lg group-hover:scale-105">
                  Começar grátis
                </button>
              </div>

              <div className="space-y-4">
                {[
                  "Até 100 laudos/mês",
                  "Modelos básicos de laudos",
                  "Suporte por email",
                  "Integração DICOM básica",
                  "Relatórios simples",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Plan - Featured */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-gray-700/50 rounded-3xl p-8 relative scale-105 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Mais Popular
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl"></div>

            <div className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Profissional</h3>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Recursos avançados para clínicas em crescimento e hospitais.
                </p>

                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2">Sob consulta</div>
                  <div className="text-sm text-gray-400 font-medium">preços personalizados</div>
                </div>

                <button className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg group-hover:scale-105">
                  Falar com vendas
                </button>
              </div>

              <div className="space-y-4">
                {[
                  "Laudos ilimitados",
                  "Modelos avançados de IA",
                  "Suporte prioritário",
                  "Integração PACS/RIS completa",
                  "Analytics avançados",
                  "API personalizada",
                  "Treinamento da equipe",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200/50 rounded-3xl p-8 relative hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-3xl"></div>
            <div className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Hospitalar</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Solução completa para grandes hospitais e redes de saúde.
                </p>

                <div className="mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">R${pricing.enterprise[billingPeriod]}</div>
                  <div className="text-sm text-gray-500 font-medium">
                    por {billingPeriod === "monthly" ? "mês" : "ano"}, por usuário
                  </div>
                  {billingPeriod === "annually" && (
                    <div className="text-xs text-green-600 font-semibold mt-1">💰 Economize R$180/ano por usuário</div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 hover:shadow-lg group-hover:scale-105">
                  Falar com vendas
                </button>
              </div>

              <div className="space-y-4">
                {[
                  "Tudo do Profissional",
                  "Gerente de conta dedicado",
                  "Suporte telefônico 24/7",
                  "Onboarding personalizado",
                  "Recursos de segurança avançados",
                  "Integração SSO",
                  "Contratos personalizados",
                  "White-label disponível",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
