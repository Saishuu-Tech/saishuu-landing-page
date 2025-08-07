export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Saishuu Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
