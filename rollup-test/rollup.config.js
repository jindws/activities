import babel from 'rollup-plugin-babel'

import postcss from 'rollup-plugin-postcss'
import cssnext from 'postcss-cssnext'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnano from 'cssnano'
// import scss from 'rollup-plugin-scss'
// import scss from 'postcss-scss'


import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: 'app.js',
    dest: 'dist/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        // commonjs(),
        postcss({
            plugins: [
            	simplevars(),
            	nested(),
                cssnext({ 
                    warnForDuplicates: false,
                    browsers:[
                        'ios >= 8',
                        'android >= 4.3',
                    ]
                }),
                cssnano(),
            ],
            extensions: ['.css'],
        }),
        babel({ exclude: 'node_modules/**' }),
    ]
}
