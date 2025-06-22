import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as Repack from '@callstack/repack';
import rspack from '@rspack/core';
import {getSharedDependencies} from './src/lib/sharedDeps.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STANDALONE = Boolean(process.env.STANDALONE);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

console.log('STANDALONE', STANDALONE);
export default env => {
  const {mode, platform} = env;

  return {
    mode,
    context: __dirname,
    entry: './index.js',
    experiments: {
      incremental: mode === 'development',
    },
    resolve: {
      ...Repack.getResolveOptions(),
    },
    output: {
      uniqueName: 'miniApp',
    },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules({inline: !STANDALONE}),
      ],
    },
    plugins: [
      new Repack.RepackPlugin(),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'miniApp',
        filename: 'miniApp.container.js.bundle',
        dts: false,
        exposes: STANDALONE
          ? undefined
          : {'./CtnMini': './src/navigation/index.tsx'}, //Users/fis-it/Documents/extra-job/miniAppTest/src/navigation/index.tsx
        // remotes: {
        //   auth: `auth@http://localhost:9003/${platform}/mf-manifest.json`,
        // },
        shared: {
          react: {singleton: true, eager: false, requiredVersion: '19.0.0'},
          'react-native': {
            singleton: true,
            eager: false,
            requiredVersion: '0.78.2',
          },
          '@react-navigation/native': {
            singleton: true,
            eager: false,
            requiredVersion: '7.0.14',
          },
          '@react-navigation/native-stack': {
            singleton: true,
            eager: false,
            requiredVersion: '7.2.0',
          },
          zustand: {singleton: true, eager: false, requiredVersion: '5.0.5'},
          'react-native-safe-area-context': {
            singleton: true,
            eager: false,
            requiredVersion: '5.3.0',
          },
          'react-native-screens': {
            singleton: true,
            eager: false,
            requiredVersion: '4.10.0',
          },
          '@react-native-async-storage/async-storage': {
            singleton: true,
            eager: false,
            requiredVersion: '2.0.0',
          },
        },
      }),
      new Repack.plugins.CodeSigningPlugin({
        enabled: mode === 'production',
        privateKeyPath: path.join('code-signing.pem'),
      }),
      // silence missing @react-native-masked-view optionally required by @react-navigation/elements
      new rspack.IgnorePlugin({
        resourceRegExp: /^@react-native-masked-view/,
      }),
    ],
  };
};
