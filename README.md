# 프로젝트 설정 가이드

다음 내용은 개발 환경을 구성하고, Next.js 15 버전으로 FormTube 프로젝트를 개발.

---

## 0. FormTube란?

- 헬스 자세 관련 동영상 모음집 & 프로젝트를 만들면서 최시 Next, React 기술 공부

## 1. 개발 환경

- **런타임 (Runtime)**
  - Node.js 또는 **Bun** (Bun 사용)
- **패키지 매니저 (Package Manager)**
  - npm, pnpm, yarn, bun 중 선택
  - **Bun**을 사용하면 속도 및 의존성 문제를 최소화할 수 있습니다.

---

## 2. 왜 Bun인가 선택한 이유유?

1. **동일한 환경 보장**
   - 튜토리얼 작성자가 Bun으로 개발하므로 환경 차이에 따른 빌드/런타임 오류를 줄입니다.
2. **TypeScript/ESM 기본 지원**
   - 별도 트랜스파일러 없이 `.ts` 파일을 바로 실행할 수 있습니다.
3. **React 의존성 문제 감소**
   - npm이나 yarn에서는 특정 버전 충돌 시 에러 또는 경고가 발생하지만, Bun은 대부분 원활하게 설치가 진행됩니다.
4. **빠른 속도**
   - 의존성 설치 및 실행 속도가 npm·yarn 대비 매우 빠릅니다.

---

## 3. Bun 기본 명령

```bash
# 1) 의존성 설치
bun add <패키지>           # = npm install <패키지>
bun add -D <패키지>        # = npm install --save-dev <패키지>

# 2) 일회성 CLI 도구 실행
bunx <명령>               # = npx <명령>
                          # 예: bunx create-next-app

# 3) 프로젝트 내 의존성 설치
bun install               # = npm install / pnpm install

# 4) package.json 스크립트 실행
bun run dev         # = npm run dev
```
