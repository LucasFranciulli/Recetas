interface Props {
  children: React.ReactNode;
}

export function TypographyH1({ children }: Props) {
  return (
    <h1 className="scroll-m-20 text-center text-8xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}
