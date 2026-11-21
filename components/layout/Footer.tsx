export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/20">
      <div className="site-container h-20 flex items-center justify-center text-sm text-muted-foreground">
        © {year} Clinton Okumu. All Rights Reserved.
      </div>
    </footer>
  );
};
