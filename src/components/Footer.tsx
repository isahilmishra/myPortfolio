export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-card-border bg-background">
      <p className="text-foreground/60 text-sm font-medium">
        &copy; {new Date().getFullYear()} Sahil Raj.{" "}
        <a 
          href="https://github.com/isahilmishra/myPortfolio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors underline underline-offset-4"
        >
          Designed & Built with ❤️
        </a>
      </p>
    </footer>
  );
}
