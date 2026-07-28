import manifest from "@/data/image-variants.json";

type Manifest = Record<string, { widths: number[]; originalWidth?: number }>;

const variants = manifest as Manifest;

/**
 * Builds a srcSet string for a public image path from the pre-generated
 * responsive variants (see scripts/generate-image-variants.mjs).
 * Returns undefined when no variants exist, so the plain src is used.
 */
export function getSrcSet(src: string): string | undefined {
  const entry = variants[src];
  if (!entry || entry.widths.length === 0) return undefined;
  const base = src.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  const parts = entry.widths.map((w) => `${base}-${w}w.webp ${w}w`);
  if (entry.originalWidth) parts.push(`${src} ${entry.originalWidth}w`);
  return parts.join(", ");
}
