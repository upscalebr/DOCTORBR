import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string | number;
  period?: string;
  users: string;
  patients: string;
  features: string[];
  isPopular?: boolean;
  variant?: "cyan" | "blue" | "dark" | "gray";
  total?: number;
}

export const PricingCard = ({
  name,
  price,
  period = "Mês",
  users,
  patients,
  features,
  isPopular = false,
  variant = "cyan",
  total,
}: PricingCardProps) => {
  const getHeaderColor = () => {
    switch (variant) {
      case "cyan":
        return "bg-[#00A7E7]";
      case "blue":
        return "bg-[#204B77]";
      case "dark":
        return "bg-[#204B77]";
      case "gray":
        return "bg-[#00A7E7]";
      default:
        return "bg-[#00A7E7]";
    }
  };

  return (
    <div className="relative flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border-2 rounded-lg border bg-[#F2F9FE] text-card-foreground shadow-sm">
      {/* Badge logic for popular/discount */}
      {isPopular && (
        <div style={{position: 'absolute', top: '-18px', left: 0, right: 0, zIndex: 10}} className="flex justify-center">
          {(() => {
            if (typeof price === 'number' && period === 'Mês') {
              return (
                <div style={{background: 'rgb(97, 206, 112)', color: '#fff', padding: '4px 24px', borderRadius: '16px', fontWeight: 'bold', fontSize: '1rem', boxShadow: '0 2px 8px rgba(97,206,112,0.15)'}}>
                  Popular
                </div>
              );
            }
            if (typeof price === 'number' && period === 'Mês' && typeof total === 'number') {
              // Defensive: never triggers, but for clarity
              return null;
            }
            if (typeof price === 'number' && period !== 'Mês' && typeof total === 'number' && total > 0) {
              // Anual Parcelado
              return (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">-8%</span>
              );
            }
            if (typeof price === 'number' && period !== 'Mês' && typeof total !== 'number') {
              // Anual à Vista
              return (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">-16%</span>
              );
            }
            return null;
          })()}
        </div>
      )}
      <div className={`${getHeaderColor()} text-white rounded-t-lg py-4 flex flex-col space-y-1.5 p-6`}>
        <h3 className="text-xl font-bold text-center">{name}</h3>
      </div>

      <div className="flex-grow pt-6 pb-4 p-6">
        <div className="text-center mb-6">
            {typeof price === "number" ? (
              <div className="flex items-start justify-center gap-1 text-black">
                <span className="text-base font-bold text-black align-top">R$</span>
                <span className="text-5xl font-bold text-black align-top">{Math.floor(price)}</span>
                <span className="text-base font-bold text-black align-top">{String(price).includes('.') ? (',' + String(price).split('.')[1].padEnd(2, '0')) : ',00'}</span>
              </div>
          ) : (
            <div className="text-3xl font-bold text-black">{price}</div>
          )}
          {typeof price === "number" && (
            <p className="text-black mt-1">{period}</p>
          )}
          {typeof price === "string" && price === "Sob Consulta" && (
            <p className="text-black mt-1">+2200 pacientes/mês</p>
          )}
          {typeof price === "number" && period === "Ano" && (
            <p className="text-black mt-1">/ ano</p>
          )}
          {typeof price === "number" && typeof total === "number" && (
            <p className="text-xs text-black mt-1">Valor Total: R${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}/ano (12x)</p>
          )}
        </div>

        <div className="space-y-3 text-sm mb-6">
          <p className="font-medium text-black">{users}</p>
          <div className="w-full h-px bg-[#E5E7EB] my-2" />
          <p className="font-medium text-black">{patients}</p>
          <div className="w-full h-px bg-[#E5E7EB] my-2" />
          <div className="flex justify-center my-2">
            <img src="https://digital.cloudia.com.br/wp-content/uploads/2023/11/icones.png" alt="Ícones Doctoriza" style={{maxWidth: '120px', height: 'auto'}} />
          </div>
          <div className="w-full h-px bg-[#E5E7EB] my-2" />
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <span className="text-sm text-black">{feature}</span>
              </div>
              <div className="w-full h-px bg-[#E5E7EB] my-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-0 pb-6 flex items-center p-6">
        <button className="w-full rounded-full font-semibold bg-[#61CE70] text-white hover:bg-[#4bb85a] shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
          Fale com um Consultor
        </button>
      </div>
    </div>
  );
};
