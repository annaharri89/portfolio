/**
 * SolidJS Router `<A>` maps `class` to a single classList token (`{ [class]: true }`).
 * Use this with the `classList` prop when you need multiple CSS classes on `<A>`.
 */
export function classStringToClassList(classNames: string | undefined): Record<string, boolean> {
  if (!classNames?.trim()) return {}
  const out: Record<string, boolean> = {}
  for (const token of classNames.trim().split(/\s+/)) {
    if (token) out[token] = true
  }
  return out
}
