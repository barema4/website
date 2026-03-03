import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../navbar";
import { products } from "../products";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const product = products.find((p) => p.id === id);
    if (!product) return { title: "Product Not Found" };
    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: `${product.name} | ${SITE_NAME}`,
        description: product.description,
        images: [
          {
            url: product.image,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image" as const,
        title: `${product.name} | ${SITE_NAME}`,
        description: product.description,
        images: [product.image],
      },
    };
  });
}

function parsePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hi Royal Roastery! I'm interested in ordering: ${product.name} (${product.price}). Could you share more details?`
  );
  const whatsappUrl = `https://wa.me/256707003440?text=${whatsappMessage}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      price: parsePrice(product.price),
      priceCurrency: "UGX",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28">
        {/* Back link */}
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-600 transition-colors hover:text-green-800"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 text-sm font-medium uppercase tracking-wider text-green-500">
              {product.category}
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              {product.name}
            </h1>
            <div className="mb-6 text-2xl font-bold text-green-600">
              {product.price}
            </div>
            <p className="mb-8 text-lg leading-relaxed text-green-800/70">
              {product.description}
            </p>

            {/* Details */}
            <div className="mb-8 rounded-2xl bg-green-50 p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-700">
                Details
              </h2>
              <ul className="space-y-3">
                {product.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-green-800/70"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Order Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1EBE57]"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-green-800 pb-8 md:flex-row">
            <a href="/" className="text-2xl font-bold text-white">
              Royal<span className="text-green-300"> Roastery</span>
            </a>
            <div className="flex gap-8">
              <a
                href="/"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Home
              </a>
              <a
                href="/shop"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Shop
              </a>
              <a
                href="/#services"
                className="text-sm text-green-100/60 transition-colors hover:text-white"
              >
                Services
              </a>
              <a
                href="/#contact"
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
