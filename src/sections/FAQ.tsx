import { useState } from 'react'
import type { FormEvent } from 'react'

import './FAQ.css'

const faqItems = [
  {
    question:
      'What is the process for designing a house?',
    answer:
      'We begin with a consultation to understand your needs, preferences, budget, and plans. From there, we develop the concept, prepare the design, and refine it with you before construction begins.',
  },
  {
    question:
      'How long does it take to build a country house?',
    answer:
      'The timeline depends on the size and complexity of the project, materials, approvals, and site conditions. A detailed schedule is prepared before construction begins.',
  },
  {
    question:
      'What materials do you use in construction?',
    answer:
      'We work with trusted materials selected for durability, performance, and the requirements of each project. Material choices are discussed with the client during the design process.',
  },
  {
    question:
      'Can changes be made to the design during construction?',
    answer:
      'Yes, some changes can be made during construction. We review each request first to understand how it may affect the structure, timeline, and overall project cost.',
  },
  {
    question:
      'Do you provide a warranty on your homes?',
    answer:
      'Yes. Warranty terms are provided as part of the final project documentation and depend on the work completed and materials used.',
  },
]

function FAQ() {
  const [openItem, setOpenItem] =
    useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenItem((current) =>
      current === index ? null : index,
    )
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
  }

  return (
    <section
      className="faq"
      id="faq"
    >
      <div className="faq__inner">
        <h2 className="faq__heading">
          FAQ
        </h2>

        <div className="faq__content">
          <div className="faq__left">
            <div className="faq__list">
              {faqItems.map(
                (item, index) => {
                  const isOpen =
                    openItem === index

                  return (
                    <div
                      key={item.question}
                      className={`faq__item ${
                        isOpen
                          ? 'faq__item--open'
                          : ''
                      }`}
                    >
                      <button
                        className="faq__question"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() =>
                          handleToggle(index)
                        }
                      >
                        <span className="faq__question-text">
                          {item.question}
                        </span>

                        <span
                          className="faq__toggle"
                          aria-hidden="true"
                        >
                          <span className="faq__toggle-line faq__toggle-line--horizontal" />
                          <span className="faq__toggle-line faq__toggle-line--vertical" />
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${index}`}
                        className="faq__answer-wrapper"
                      >
                        <div className="faq__answer-inner">
                          <p className="faq__answer">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                },
              )}
            </div>

            <button
              className="faq__more"
              type="button"
            >
              <span>More FAQ</span>
              <span aria-hidden="true">
                ↗
              </span>
            </button>
          </div>

          <form
            className="faq__form"
            onSubmit={handleSubmit}
          >
            <div className="faq__form-intro">
              <h3 className="faq__form-title">
                Do You have any questions?
              </h3>

              <p className="faq__form-description">
                You can feel free to ask us any
                questions and we will answer you
                as soon as possible
              </p>
            </div>

            <div className="faq__fields">
              <label
                className="faq__sr-only"
                htmlFor="faq-email"
              >
                Email
              </label>

              <input
                id="faq-email"
                className="faq__email"
                type="email"
                name="email"
                placeholder="EMAIL"
              />

              <label
                className="faq__sr-only"
                htmlFor="faq-message"
              >
                Your question
              </label>

              <textarea
                id="faq-message"
                className="faq__message"
                name="message"
              />
            </div>

            <div className="faq__form-bottom">
              <label className="faq__privacy">
                <input
                  className="faq__privacy-input"
                  type="checkbox"
                />

                <span
                  className="faq__privacy-box"
                  aria-hidden="true"
                >
                  <span className="faq__privacy-check">
                    ✓
                  </span>
                </span>

                <span className="faq__privacy-text">
                  By clicking on the button you
                  agree to the privacy policy
                </span>
              </label>

              <button
                className="faq__send"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FAQ