import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // from react-icons

export default function WhatsAppButton() {
  const phoneNumber = "971528635637"; // put your UAE number here (without +)
  const message = "Hello, I would like to know more about your equipment rentals!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg z-50"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
