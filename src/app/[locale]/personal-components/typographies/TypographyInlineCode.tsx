interface Props {
  children: React.ReactNode;
}

export function TypographyInlineCode({ children }: Props) {
  return (
    <code className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold bg-gray-900 ">
      {children}
    </code>
  );
}
