#!/usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git config --local user.name "chaichai"
git config --local user.email "davecqx@gmail.com"

git push -f https://${access_token}@github.com/caicaishmily.github.io master

cd -
