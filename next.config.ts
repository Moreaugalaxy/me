/*
  sxtxhuman3/me/next.config.ts

  ---------------------------------------------------------
  Next.js Config
  ---------------------------------------------------------

  GitHub Pages 배포용 설정.

  현재 저장소 URL:

  https://moreaugalaxy.github.io/me/

  이므로:

  basePath 를 반드시 /me 로 맞춰야 한다.

  ---------------------------------------------------------

  역할:

  - GitHub Pages 경로 수정
  - static export 활성화
  - asset 경로 수정
  - image optimization 비활성화

  ---------------------------------------------------------

  매우 중요:

  이 파일 없으면:

  CSS
  JS
  image
  font

  전부 깨질 수 있다.
*/

import type { NextConfig } from "next";

/*
  GitHub Actions 환경 여부 확인.

  로컬 개발환경과
  실제 GitHub Pages 배포환경을
  구분하기 위함.
*/
const isGithubActions = process.env.GITHUB_ACTIONS || false;

/*
  Next.js 설정 객체.
*/
const nextConfig: NextConfig = {
  /*
    static export 활성화.

    GitHub Pages 는
    정적 사이트만 호스팅 가능.
  */
  output: "export",

  /*
    저장소 이름.

    repository:
    moreaugalaxy/me

    따라서:
    /me 필요.
  */
  basePath: isGithubActions ? "/me" : "",

  /*
    static asset 경로 수정.

    _next/static 경로 문제 해결.
  */
  assetPrefix: isGithubActions ? "/me/" : "",

  /*
    GitHub Pages 에서는
    next/image 최적화 서버 사용 불가능.

    반드시 꺼야 함.
  */
  images: {
    unoptimized: true,
  },
};

/*
  config export.
*/
export default nextConfig;
