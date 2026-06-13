const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/966504309114"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter saturate-180 transition-transform duration-300 hover:scale-110"
    >
      <img src="/wha.svg" alt="" width={24} height={24} />
    </a>
  );
};

export default FloatingWhatsApp;
