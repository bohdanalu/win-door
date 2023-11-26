interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <button
    type="button"
    className="relative lg:hidden inline-flex items-center justify-center rounded-md p-2 text-light border-light border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
    aria-controls="mobile-menu"
    aria-expanded={isMobileMenuOpen}
    onClick={toggleMobileMenu}
  >
    <span className="absolute -inset-0.5"></span>
    <span className="sr-only">Open main menu</span>
    {isMobileMenuOpen === false ? (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )}
  </button>
);

export default MobileMenuButton;
