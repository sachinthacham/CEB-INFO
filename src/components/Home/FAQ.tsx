import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "How can I pay my electricity bill?",
    answer:
      "You can pay your electricity bill through multiple channels: online payment portal, bank transfer, mobile banking apps, or at any CEB payment counter.",
  },
  {
    question: "How do I report a power outage?",
    answer:
      "You can report a power outage by calling our 24/7 hotline or using the online fault reporting system on our website.",
  },
  {
    question: "What documents do I need for a new connection?",
    answer:
      "For a new connection, you'll need proof of ownership/tenancy, NIC copy, and completed application form. Additional documents may be required based on your connection type.",
  },
  {
    question: "How can I check my bill status?",
    answer:
      "You can check your bill status through our online portal, mobile app, or by visiting your local CEB office with your account number.",
  },
  {
    question: "What are the current electricity tariffs?",
    answer:
      "Current electricity tariffs vary based on your consumption category. You can find detailed tariff information in the Distribution section of our website.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-12 sm:py-6 rounded-2xl shadow-lg border border-indigo-100 grid col-span-7">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex flex-col items-center">
            <span className="inline-block w-10 h-1 bg-blue-500 rounded-full mb-2" />
            <h2 className="text-xl font-bold tracking-tight text-blue-900 mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <p className=" text-sm text-blue-800 max-w-2xl mx-auto">
            Find answers to the most common questions about CEB services and
            operations.
          </p>
        </div>
        <dl className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={classNames(
                "transition-all duration-300",
                "bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl border-0 "
              )}
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none group"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base font-sm text-blue-900 group-hover:text-blue-700 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                    <ChevronDownIcon
                      className={classNames(
                        openIndex === idx
                          ? "-rotate-180 text-blue-600"
                          : "rotate-0 text-gray-500",
                        "h-5 w-5 transform transition-transform duration-300"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </dt>
              <div
                className={classNames(
                  "overflow-hidden transition-all duration-300 px-6",
                  openIndex === idx ? "max-h-40 py-4" : "max-h-0 py-0"
                )}
                style={{
                  transitionProperty: "max-height, padding",
                }}
              >
                <dd>
                  <p className="text-gray-600 text-sm leading-7">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
