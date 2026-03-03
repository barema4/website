import ContactForm from "./contact-form";
import Navbar from "./navbar";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: "royalroastery7@gmail.com",
    telephone: "+256707003440",
    sameAs: [
      "https://www.instagram.com/royalroastery_",
      "https://www.tiktok.com/@royalroastery8",
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-green-900 px-6 pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(123,191,160,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(200,150,62,0.3),transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-green-400/30 bg-green-800/50 px-4 py-1.5 text-sm font-medium text-green-300">
            From Farm to Cup Excellence
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Elevating the
            <br />
            <span className="text-green-300">Coffee Value Chain</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-green-100/80 md:text-xl">
            Royal Roastery is established to meet the people&apos;s value-chain
            challenges. We educate our customers on how best to grow, sort,
            process, produce and roast coffee.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-green-400 px-8 py-3.5 text-base font-semibold text-green-900 transition-colors hover:bg-green-300"
            >
              Explore Our Services
            </a>
            <a
              href="#about"
              className="rounded-full border border-green-400/30 px-8 py-3.5 text-base font-semibold text-green-100 transition-colors hover:border-green-400/60 hover:bg-green-800/50"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-frost px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
                Who We Are
              </p>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-green-900 md:text-5xl">
                Passion for Coffee,
                <br />
                Commitment to People
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-green-800/70">
                At Royal Roastery, we believe that great coffee starts long
                before the roast. We are dedicated to empowering every link in
                the coffee value chain — from the farmers who cultivate the
                beans to the baristas who craft the perfect cup.
              </p>
              <p className="text-lg leading-relaxed text-green-800/70">
                We can&apos;t wait to share this knowledge with you. Our mission
                is to bridge the gap between coffee origins and your cup,
                ensuring quality, sustainability, and excellence at every step.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-3 text-3xl font-bold text-green-600">
                  100%
                </div>
                <p className="text-sm font-medium text-green-800/60">
                  Specialty Grade Beans
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-3 text-3xl font-bold text-green-600">
                  Farm
                </div>
                <p className="text-sm font-medium text-green-800/60">
                  To Cup Traceability
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-3 text-3xl font-bold text-green-600">
                  Expert
                </div>
                <p className="text-sm font-medium text-green-800/60">
                  Led Training Programs
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-3 text-3xl font-bold text-green-600">
                  End
                </div>
                <p className="text-sm font-medium text-green-800/60">
                  To End Value Chain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Process
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-green-900 md:text-5xl">
              From Seed to Sip
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-green-800/60">
              We guide you through every stage of the coffee journey, ensuring
              excellence at each step of the value chain.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Grow",
                desc: "Best practices for cultivating premium coffee plants with sustainable farming methods.",
              },
              {
                step: "02",
                title: "Sort",
                desc: "Meticulous selection and grading to ensure only the finest beans make it through.",
              },
              {
                step: "03",
                title: "Process",
                desc: "Expert washing, drying, and fermentation techniques that unlock complex flavors.",
              },
              {
                step: "04",
                title: "Produce",
                desc: "Transforming raw beans into market-ready products with quality control at every stage.",
              },
              {
                step: "05",
                title: "Roast",
                desc: "Precision roasting that brings out each bean's unique character and flavor profile.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group rounded-2xl border border-green-100 bg-green-50/50 p-8 transition-all hover:border-green-200 hover:bg-green-50 hover:shadow-md"
              >
                <div className="mb-4 text-sm font-bold text-green-400">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-green-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-green-800/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-green-900 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-400">
              What We Offer
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-green-100/60">
              Comprehensive coffee solutions tailored to meet your needs, from
              sourcing to skill development.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                ),
                title: "Quality Assessment",
                desc: "Professional cupping and grading services to evaluate your coffee's quality, identify flavor profiles, and ensure it meets specialty-grade standards.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                ),
                title: "Coffee Experiences",
                desc: "Immersive workshops and tasting sessions that take you on a journey through the world of coffee. Perfect for teams, events, and curious coffee lovers.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                ),
                title: "Barista & Roasting Training",
                desc: "Hands-on training programs for both aspiring and experienced baristas and roasters. Master the art and science behind every great cup.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
                    />
                  </svg>
                ),
                title: "Fresh Roasted Beans",
                desc: "Expertly roasted specialty coffee beans, available in a range of roast profiles. Freshly roasted and delivered to preserve peak flavor and aroma.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                    />
                  </svg>
                ),
                title: "Green Bean Sourcing",
                desc: "Direct access to premium green coffee beans from the finest growing regions. We connect you with traceable, sustainably sourced origins.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-green-700/50 bg-green-800/50 p-8 transition-all hover:border-green-600 hover:bg-green-800"
              >
                <div className="mb-5 inline-flex rounded-xl bg-green-400/10 p-3 text-green-400">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-green-100/60">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-frost px-6 py-24 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,122,86,0.15),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-green-900 md:text-5xl">
            We Can&apos;t Wait to Share
            <br />
            This Knowledge With You
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-green-800/60">
            Whether you&apos;re a farmer, roaster, barista, or coffee
            enthusiast, Royal Roastery has something for you. Let&apos;s elevate
            your coffee journey together.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-green-700"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
                Get in Touch
              </p>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-green-900">
                Let&apos;s Talk Coffee
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-green-800/60">
                Ready to explore how Royal Roastery can support your coffee
                goals? Reach out to us and let&apos;s start the conversation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-2.5 text-green-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Email</p>
                    <a
                      href="mailto:royalroastery7@gmail.com"
                      className="text-green-800/60 transition-colors hover:text-green-600"
                    >
                      royalroastery7@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-2.5 text-green-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Location</p>
                    <p className="text-green-800/60">Royal Roastery HQ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-2.5 text-green-600">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">WhatsApp</p>
                    <a
                      href="https://wa.me/256707003440"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800/60 transition-colors hover:text-green-600"
                    >
                      +256 707 003440
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-green-800 pb-8 md:flex-row">
            <a href="#" className="text-2xl font-bold text-white">
              Royal<span className="text-green-300"> Roastery</span>
            </a>
            <div className="flex gap-8">
              <a
                href="#about"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                About
              </a>
              <a
                href="#process"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Process
              </a>
              <a
                href="#services"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="pt-8 text-center text-sm text-green-100/40">
            &copy; {new Date().getFullYear()} Royal Roastery. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
