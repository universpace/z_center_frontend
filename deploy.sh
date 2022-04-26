#!/usr/bin/env sh

# 에러가 발생될 경우 스크립트 실행을 중지
set -e

# 앱 빌드
echo yarn build
yarn build

# 빌드된 파일이 존재하는 dist 디렉터리로 이동
echo cd dist
cd dist


# CNAME 파일을 이용해 커스텀 도메인을 지정할 수도 있습니다.
# echo 'www.example.com' > CNAME

#git init
#git checkout -b develop
echo git add -A -f
git add -A -f
echo git commit -m "deploy"
git commit -m 'deploy'

# https://<USERNAME>.github.io 에 배포
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://<USERNAME>.github.io/<REPO> 에 배포
echo git push -f git@github.com:universpace/z_center_frontend.git develop:gh-pages
git push -f git@github.com:universpace/z_center_frontend.git develop:gh-pages

cd -