# 휴런 프론트엔드 과제 - 김수진

## 1. 사고의 흐름

프로젝트 개발 과정에서 다음과 같은 사고 흐름을 따랐습니다:

1. **아키텍처 및 데이터 관리 설계**

   - React와 TypeScript를 기반으로 한 확장 가능한 컴포넌트 아키텍처 설계
   - 기능별로 구분된 폴더 구조(`pages`, `components`, `hooks` 등)를 통해 코드 관리
   - 타입 정의를 통한 데이터 구조 명확화 및 개발 안정성 확보
   - 컴포넌트의 계층 구조와 책임 범위를 명확히 정의하여 유지보수성 향상

2. **사용자 경험 흐름 정의**

   - 직관적인 검색 인터페이스를 통한 다중 조건 필터링 설계
   - 검색 결과의 즉각적인 UI 피드백을 통한 사용자 경험 개선
   - 검색어 하이라이팅을 통한 검색 결과 가시성 향상
   - 카드 게임의 단계별 진행 구조로 사용자 인터랙션 최적화

3. **컴포넌트 구조화 및 책임 분리**

   - 페이지별 컴포넌트와 공통 UI 컴포넌트의 명확한 구분
   - `_components` 폴더를 통한 페이지 전용 컴포넌트 관리
   - 스타일 파일 분리를 통한 UI 로직과 스타일 코드의 분리

4. **데이터 흐름 최적화**
   - `useMemo`와 같은 React Hooks를 활용한 성능 최적화
   - 타입 안전한 상태 관리로 버그 발생 가능성 최소화
   - 컴포넌트 외부로 상수 및 정적 데이터 이동을 통한 불필요한 재렌더링 방지
   - 순수 함수 컴포넌트 설계를 통한 테스트 용이성 및 예측 가능한 동작 보장

## 2. 프로젝트 구조 및 실행 방법

### 프로젝트 구조

```
src/
├── components/                 # 공통 컴포넌트
│   ├── Header/                 # 헤더 컴포넌트
│   ├── Layout/                 # 레이아웃 컴포넌트
│   ├── LoadingSpinner/         # 로딩 스피너 컴포넌트
├── pages/                      # 페이지 컴포넌트
│   ├── cardgame/               # 카드 게임 페이지
│   │   ├── _components/        # 게임 관련 컴포넌트
│   │   │   ├── CardCountForm/  # 카드 수 입력 폼
│   │   │   ├── GameContainer/  # 게임 컨테이너
│   │   │   ├── GameResult/     # 게임 결과 컴포넌트
│   │   │   ├── PlayerCountForm/# 플레이어 수 입력 폼
│   │   │   └── PlayerNamesForm/# 플레이어 이름 입력 폼
│   │   ├── _types/             # 게임 관련 타입 정의
│   │   ├── index.tsx           # 카드 게임 페이지 컴포넌트
│   │   └── styles.ts           # 게임 페이지 스타일
│   ├── gallery/                # 갤러리 페이지
│   │   ├── _components/        # 갤러리 관련 컴포넌트
│   │   │   ├── ImageList/      # 이미지 목록 컴포넌트
│   │   ├── _types/             # 갤러리 관련 타입 정의
│   │   │   └── types.ts        # 갤러리 타입 정의
│   │   ├── index.tsx           # 갤러리 메인 페이지
│   │   ├── detail/             # 이미지 상세 페이지
│   │   └── styles.ts           # 갤러리 스타일
│   └── searchlist/             # 검색 리스트 페이지
│       ├── _components/        # 검색 관련 컴포넌트
│       │   ├── SearchField.tsx # 검색 필드 컴포넌트
│       │   └── DataTable.tsx   # 데이터 테이블 컴포넌트
│       ├── data.ts             # 검색 데이터
│       ├── index.tsx           # 검색 페이지 컴포넌트
│       └── styles.ts           # 검색 페이지 스타일
├── hooks/                      # 커스텀 훅
│   ├── useFilter.ts            # 필터링 관련 훅
│   └── useThrottle.ts          # 스로틀 함수 훅
├── store/                      # 상태 관리
│   └── theme.ts                # 테마 설정
├── styles/                     # 전역 스타일
│   └── globalStyles.ts         # 전역 스타일 정의
├── utils/                      # 유틸리티 함수
│   └── searchUtils.ts          # 검색 관련 유틸리티
├── App.tsx                     # 앱 루트 컴포넌트
├── App.css                     # 앱 스타일
└── main.tsx                    # 앱 진입점
```

### 실행 방법

#### 개발 환경 설정

1. **프로젝트 클론**

```bash
git clone https://github.com/username/sujinKim_heuron_project.git
cd sujinKim_heuron_project
```

2. **의존성 설치**

```bash
npm install
```

3. **개발 서버 실행**

```bash
npm run dev
```

#### 빌드 및 배포

```bash
# 프로덕션용 빌드
npm run build
```

## 3. 사용 라이브러리와 이유

   - zustand: 간결한 API를 제공하여 복잡한 보일러플레이트 코드 없이 상태 관리를 구현할 수 있습니다. 타입 정의가 명확하여 자동 완성과 타입 체크가 원활하며 persist, devtools 등 다양한 미들웨어를 지원하여 개발 경험을 향상시켜 유용하게 사용됩니다.

