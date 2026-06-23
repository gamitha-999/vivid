import type { NextConfig } from 'next'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserPage = process.env.GITHUB_ACTIONS && !repo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (repo ? `/${repo}` : '')

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/fiber', '@react-three/drei'],
  },
}

export default nextConfig
