let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ["cdn.hashnode.com"], // Allow images from Hashnode
  },
  // Remove basePath and assetPrefix for simpler configuration
  trailingSlash: true,
  // Disable server components since we're doing static export
  experimental: {
    appDir: true,
  },
}

// ✅ Merge user config if it exists
mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
