"use client";
import { useState } from "react";
import { siteConfig } from "@/config/SiteConfig";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-4 border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-300">
          {siteConfig.faqData.map((faq, index) => (
            <div className="accordion" role="accordion" key={index}>
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="toggle-button cursor-pointer w-full text-base outline-none text-left font-medium py-6 flex items-center"
                style={{ color: siteConfig.brand.primary }}
              >
                <span
                  className="mr-4"
                  style={{ color: siteConfig.brand.primary }}
                >
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3.5 h-3.5 fill-current ml-auto shrink-0"
                >
                  {/* Horizontal line (always visible) */}
                  <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                  {/* Vertical line (visible when closed) */}
                  <path
                    className={`transition-opacity duration-300 ${openIndex === index ? "opacity-0" : "opacity-100"}`}
                    d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                  />
                </svg>
              </button>
              <div
                className={`content pb-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-250 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
