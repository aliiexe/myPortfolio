import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
    webpack(config: Configuration) {
        if (config.module) {
            config.module.rules = config.module.rules || [];
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            });
        }
        return config;
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
export default nextConfig;