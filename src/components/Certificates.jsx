const certificates = [
  "/certificates/Getuar Jakupi.pdf",
  "/certificates/Getuar Jakupi (1).pdf",
  "/certificates/Getuar Jakupi (2).pdf",
  "/certificates/Getuar Jakupi (3).pdf",
  "/certificates/Getuar Jakupi (4).pdf",
  "/certificates/Getuar Jakupi (5).pdf",
  "/certificates/cert1.png",
  "/certificates/cert2.png",
  "/certificates/cert3.png",
  "/certificates/cert4.png",
  "/certificates/cert5.png",
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding">
      <div className="container-main">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Certificates
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Training that backs up the work.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((src, index) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group glass overflow-hidden rounded-[28px] p-4 shadow-soft transition duration-500 hover:-translate-y-2 hover:border-brand-400/30 hover:shadow-glow"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="h-full w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Certificate {index + 1}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
