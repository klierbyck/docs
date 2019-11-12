set -e

npm run docs:build

git add .

git commit -m 'update docs'

git push