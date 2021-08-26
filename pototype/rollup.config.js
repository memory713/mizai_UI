import babel from "@rollup/plugin-babel";
import vuePlugin from 'rollup-plugin-vue'

const es = {
    input: 'src/entry.js',
    output: {
        file: 'dist/index.bundle.js',
        name: 'MzElement',
        format: 'es',
        globals: 'Vue',
    },
    external: ['vue'],
    plugins: [
        babel(),
        vuePlugin({
            css: true,
        })
    ]
};

const iife = {
    input: 'src/entry.js',
    output: {
        file: 'dist/index.js',
        name: 'MzElement',
        format: 'iife',
        globals: 'Vue',
    },
    external: ['vue'],
    plugins: [
        babel(),
        vuePlugin({
            css: true,
        })
    ]
};

import terser from 'rollup-plugin-terser'

const minEs = {
    input: 'src/entry.js',
    output: {
        file: 'dist/index.min.js',
        name: 'MzElement',
        format: 'mud',
        globals: 'Vue',
    },
    plugins: [
        babel(),
        vuePlugin({
            css: true,
        }),
        terser(),
    ]
};

const cjs = {
    input: 'src/entry.js',
    output: {
        file: 'dist/index.cjs.js',
        name: 'MzElement',
        format: 'cjs',
    },
    plugins: [
        babel(),
        vuePlugin({
            css: true,
        })
    ]
};

export default [es, iife, minEs, cjs]