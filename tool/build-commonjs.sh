#!/bin/bash

rm -rf lib
NODE_ENV=build edp build -f -s commonjs
mv output/asset lib
rm -rf output
