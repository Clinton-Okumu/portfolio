export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-center text-sm text-muted-foreground">
        © {year} Clinton Okumu. All Rights Reserved.
      </div>
    </footer>
  );
};
