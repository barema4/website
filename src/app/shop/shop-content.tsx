"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "./products";

const categories = ["All", "Roasted Beans", "Green Beans", "Brewing Equipment", "Experiences"];

export default function ShopContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-all hover:border-green-200 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-green-500">
                {product.category}
              </div>
              <h3 className="mb-1 text-lg font-bold text-green-900">
                {product.name}
              </h3>
              <p className="mb-3 line-clamp-2 text-sm text-green-800/60">
                {product.description}
              </p>
              <div className="text-base font-bold text-green-600">
                {product.price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
