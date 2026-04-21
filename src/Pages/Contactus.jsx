import React, { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    title: "Address",
    value: "Al Fajr Institute, Mari Indus, District Mianwali, Punjab, Pakistan",
    icon: FiMapPin,
  },
  {
    title: "Phone",
    value: "+92 300 0000000",
    icon: FiPhone,
    href: "tel:+923000000000",
  },
  {
    title: "Email",
    value: "info@ssdo.org.pk",
    icon: FiMail,
    href: "mailto:info@ssdo.org.pk",
  },
  {
    title: "Office Hours",
    value: "Monday - Saturday, 9:00 AM - 4:00 PM",
    icon: FiClock,
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contactus = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <section className="bg-[#f5f5f5] pb-14">
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl text-black mt-10">Contact Us</h1>
        </div>


      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="border border-gray-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#8C1515]/10 p-2.5 text-[#8C1515]">
                      <Icon />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-gray-700 hover:text-[#8C1515]">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-gray-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            
          </aside>

          <div className="border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-900">Send a Message</h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we will get back to you shortly.
            </p>

            {isSubmitted && (
              <div className="mt-5 flex items-start gap-2 border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                <FiCheckCircle className="mt-0.5" />
                <p>Your message has been submitted successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-11 w-full border border-gray-300 px-3 text-sm outline-none focus:border-[#8C1515]"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-11 w-full border border-gray-300 px-3 text-sm outline-none focus:border-[#8C1515]"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-11 w-full border border-gray-300 px-3 text-sm outline-none focus:border-[#8C1515]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-11 w-full border border-gray-300 px-3 text-sm outline-none focus:border-[#8C1515]"
                  placeholder="Subject"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#8C1515]"
                  placeholder="Write your message"
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#8C1515] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6f1111]"
                >
                  Send Message
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;