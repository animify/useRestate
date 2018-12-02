#!/bin/bash
# Build use-restate

function BUNDLE {
    echo "Microbundling..."
    rm -rf dist
    yarn bundle
    mv dist/index.d.ts index.d.ts
    mv dist/shallowEqual.d.ts shallowEqual.d.ts
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