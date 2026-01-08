export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t sticky shadow-sm bottom-0 border-b bg-background/80 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-center text-sm text-muted-foreground">
        © {year} Clinton Okumu. All Rights Reserved.
      </div>
    </footer>
  );
};
