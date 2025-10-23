interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  imageUrl?: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shrink-0">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
            <p className="text-sm text-muted-foreground font-semibold">{company}</p>
          </div>
        </div>
        
        <p className="text-sm text-foreground leading-relaxed flex-grow mb-4">
          "{testimonial}"
        </p>

        <button className="px-0 text-primary font-semibold underline-offset-4 hover:underline text-left">
          Veja aqui o case de sucesso completo
        </button>
      </div>
    </div>
  );
};
