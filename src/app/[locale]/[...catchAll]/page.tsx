import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  notFound(); // Redirecciona a [locale]/not-found.tsx
}