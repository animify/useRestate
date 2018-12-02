#!/bin/bash
# Build use-restate

function BUNDLE {
    echo "Microbundling..."
    rm -rf dist
    microbundle build -i src/index.ts -o bundle/ --name use-restate --sourcemap false
    mv bundle/index.d.ts index.d.ts
    mv bundle/shallowEqual.d.ts shallowEqual.d.ts
    echo "Microbundling done."
}

function DELETE_TEMP {
    rm -rf .rts2_cache_cjs
    rm -rf .rts2_cache_es
    rm -rf .rts2_cache_umd
}

BUNDLE
DELETE_TEMP
echo "Completed build process."