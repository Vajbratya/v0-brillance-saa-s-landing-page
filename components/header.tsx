import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-[#37322f] font-semibold text-lg">laudos.ai</div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">API</button>
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Preços</button>
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Documentação</button>
            </div>
          </div>
          <Button variant="ghost" className="text-[#37322f] hover:bg-[#37322f]/5">
            Entrar
          </Button>
        </nav>
      </div>
    </header>
  )
}
