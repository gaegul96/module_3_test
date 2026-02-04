# 방화벽 로그 모니터링 웹 어드민

방화벽 로그를 모니터링하고 분석하는 웹 기반 관리자 페이지입니다.

## 기술 스택

### 프론트엔드
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **HTTP Client**: Axios

### 백엔드
- **Framework**: FastAPI
- **Database**: SQLite
- **ORM**: SQLAlchemy
- **Authentication**: JWT (JSON Web Tokens)

## 프로젝트 구조

```
module3/
├── frontend/              # Next.js 프론트엔드
│   ├── src/
│   │   ├── app/          # Next.js App Router 페이지
│   │   ├── components/   # 재사용 가능한 컴포넌트
│   │   └── lib/          # 유틸리티 및 API 클라이언트
│   ├── public/           # 정적 파일
│   └── package.json
│
├── backend/              # FastAPI 백엔드
│   ├── app/
│   │   ├── api/         # API 라우트
│   │   ├── core/        # 설정 및 유틸리티
│   │   ├── models/      # 데이터베이스 모델
│   │   └── schemas/     # Pydantic 스키마
│   ├── database/        # SQLite 데이터베이스
│   └── requirements.txt
│
└── docs/                # 프로젝트 문서
```

## 설치 및 실행

### 프론트엔드 설정

```bash
cd frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 접속
```

### 백엔드 설정

```bash
cd backend

# Python 가상환경 생성 (선택사항)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install -r requirements.txt

# 환경 변수 설정
cp .env.example .env
# .env 파일을 편집하여 필요한 값 설정

# 개발 서버 실행
uvicorn app.main:app --reload

# API 문서: http://localhost:8000/docs
```

## 주요 기능

- 방화벽 로그 실시간 모니터링
- 로그 필터링 및 검색
- 로그 통계 및 시각화
- 알림 규칙 설정
- 사용자 인증 및 권한 관리

## API 엔드포인트

백엔드 API는 `/api/v1` 경로를 통해 접근:

- `/api/v1/logs` - 로그 관련 API
- `/api/v1/users` - 사용자 관련 API
- `/api/v1/settings` - 설정 관련 API

자세한 API 문서는 FastAPI 서버 실행 후 `http://localhost:8000/docs`에서 확인할 수 있습니다.

## 개발 가이드

### 프론트엔드
- Next.js App Router 사용
- Tailwind CSS를 이용한 스타일링
- API 호출은 `src/lib/api.js`의 axios 클라이언트 사용
- 컴포넌트는 재사용 가능하도록 설계

### 백엔드
- FastAPI의 비동기 처리 활용
- Pydantic을 사용한 데이터 검증
- SQLAlchemy ORM을 통한 데이터베이스 접근
- JWT 기반 인증 구현

## 라이센스

MIT
