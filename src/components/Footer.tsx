export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-card-border bg-background">
      <p className="text-foreground/60 text-sm font-medium">
        &copy; {new Date().getFullYear()} Sahil Raj. Designed & Built with ❤️
      </p>
    </footer>
  );
}
