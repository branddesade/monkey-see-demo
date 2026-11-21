import type { NextConfig } from 'next';

const portalOrigin = process.env.PORTAL_ORIGIN || '*';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors ${portalOrigin};`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
