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

/**
 * Rewrites <img src="..."> tags in an HTML string, adding srcset/sizes
 * attributes from the pre-generated variant manifest. Used for blog post
 * content that is rendered via dangerouslySetInnerHTML.
 */
export function addSrcSetToHtml(
  html: string,
  sizes = "(max-width: 767px) 92vw, (max-width: 1023px) 90vw, 800px",
): string {
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    if (/\bsrcset=/i.test(tag)) return tag;
    const srcMatch = tag.match(/\bsrc="([^"]+)"/i);
    if (!srcMatch) return tag;
    const srcSet = getSrcSet(srcMatch[1]);
    if (!srcSet) return tag;
    const hasSizes = /\bsizes=/i.test(tag);
    const inject = ` srcset="${srcSet}"${hasSizes ? "" : ` sizes="${sizes}"`}`;
    return tag.replace(/<img\b/i, `<img${inject}`);
  });
}
