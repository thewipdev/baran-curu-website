import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";


const CALENDLY_URL = "https://calendly.com/barancuru";

const Calendar = () => (
  <Layout>
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Takvim
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Görüşme planlamak için aşağıdan uygun bir zaman dilimi seçebilirsiniz.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-lg border border-border overflow-hidden bg-card">
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="660"
              frameBorder="0"
              title="Calendly - Baran Curu"
              className="w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Calendar;
