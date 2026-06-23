export function getBasePath(): string {
  if (typeof window !== 'undefined') {
    const base = document.querySelector('base')?.getAttribute('href')
    if (base) return base.replace(/\/$/, '')
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

export function withBasePath(path: string): string {
  const base = getBasePath()
  if (!base) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

export function asset(path: string): string {
  return withBasePath(path)
}
