#!/bin/bash

rm -rf dist
NODE_ENV=build edp build -f -s amd
mv output/asset dist
rm -rf output
