#!/bin/bash
# Build use-restate

function BUNDLE {
    echo "Microbundling..."
    rm -rf bundle
    microbundle build -i src/index.ts -o bundle/ --name use-restate --compress false --sourcemap false --target es5
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