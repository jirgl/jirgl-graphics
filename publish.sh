rm -rf ./dist
tsc
cp package.json dist
cd dist
npm publish