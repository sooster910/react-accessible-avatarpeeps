import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize'
import commonjs from '@rollup/plugin-commonjs'

const svgr = require('@svgr/rollup').default
const packageJson = require('./package.json')

export default {
  input: 'src/index.tsx',
  output: [
    {
      dir: packageJson.main,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    filesize(),
    svgr(),
  ],
}
