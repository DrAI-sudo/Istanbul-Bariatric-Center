export function Financing() {
  return (
    <section id="financing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl font-heading font-bold text-slate-900">
            Financing Options for EU Patients
          </h2>
        </div>
        <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white" style={{ minHeight: '600px' }}>
          <iframe
            width="100%"
            height="600"
            src="https://clinics.euromedfin.com/clinic-iframe/34173cb38f07f89ddbebc2ac9128303f?lang=en"
            frameBorder="0"
            allowFullScreen
            title="Financing Options for EU Patients"
            data-testid="financing-iframe"
          />
        </div>
      </div>
    </section>
  );
}
