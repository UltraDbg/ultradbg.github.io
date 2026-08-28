export function Redacted({ children = "Redacted" }: { children?: string }) {
  return (
    <span className="redacted" title="Name withheld">
      {children}
    </span>
  );
}
