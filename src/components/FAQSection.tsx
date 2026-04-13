
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
            question: "Qual o valor da perfuração?",
            answer: <>O valor é de <strong>R$ 59,90</strong> e já inclui o par de joias. Não cobramos taxa extra pela perfuração, este é o valor final do procedimento.</>,
        },
        {
            question: "Posso escolher o modelo do brinco?",
            answer: "Sim! Temos diversos modelos lindos disponíveis para você escolher na hora da perfuração, todos inclusos no valor do procedimento.",
        },
        {
            question: "Fazem perfuração em crianças?",
            answer: <>Sim! Realizamos perfuração em crianças com todo o cuidado e carinho necessários. O valor para o público infantil é de <strong>R$ 89,90</strong> e também já inclui o par de joias.</>,
        },
        {
            question: "Qual o método de perfuração?",
            answer: <>Realizamos a perfuração <strong>somente com pistola</strong>. É um método rápido, seguro e higiênico, ideal para quem busca praticidade e um procedimento tranquilo tanto para adultos quanto para crianças.</>,
        },
        {
            question: "Quanto tempo leva o procedimento?",
            answer: "O procedimento é muito rápido e seguro, levando apenas alguns minutos desde a escolha do brinco até a finalização da perfuração.",
        },
        {
            question: "Preciso agendar horário?",
            answer: "Atendemos por ordem de chegada no Shopping Lindóia. Se preferir, você pode nos chamar no WhatsApp para consultar o movimento no momento ou tirar outras dúvidas.",
        },
        {
            question: "Quais os cuidados após furar?",
            answer: "Após a perfuração, você receberá todas as orientações detalhadas de higiene e cuidados para garantir uma cicatrização perfeita e segura.",
        },
        {
            question: "As joias têm garantia?",
            answer: "Sim! Oferecemos garantia de 30 dias (a partir da data da compra) para qualquer defeito de fabricação que a joia venha a apresentar.",
        },
    ];

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-10 bg-primary" />
                        <p className="text-primary font-body text-xs tracking-[0.35em] uppercase font-light">Dúvidas Frequentes</p>
                        <div className="h-px w-10 bg-primary" />
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground">
                        Perguntas <span className="text-gradient-gold italic">Comuns</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6 bg-card shadow-soft overflow-hidden">
                                <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-light text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
