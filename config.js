/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이준영",
    father: "이현수",
    mother: "이민호",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이아현",
    father: "이상길",
    mother: "한남순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-03",
    time: "13:00",
    venue: "JW웨딩컨벤션센터 4층 그랜드볼룸",
    address: "경남 김해시 김해대로 2520",
    mapLinks: {
      kakao: "https://place.map.kakao.com/19005414",
      naver: "https://naver.me/F0AACTY0"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "준영, 아현 결혼합니다.",
    content: "아끼고 사랑할 준비를 마친 두 사람이 만나\n영원히 함께 하기로 약속했습니다.\n\n아름다운 날, 서로가 서로의 영원이 되기로 약속하는\n현장에 오셔서 저희의 미래를 함께 축복해주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "이준영", bank: "신한은행", number: "110-396-815057" },
      { role: "이현수", bank: "농협은행", number: "103-02-154690" },
    ],
    bride: [
      { role: "이아현", bank: "농협은행", number: "817-847-5101-5526" },
      { role: "이상길", bank: "기업은행", number: "194-015374-02-021" },
      { role: "한남순", bank: "농협은행", number: "845-12-340121" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이아현 ♥ 이준영 결혼합니다",
    description: "2026년 10월 03일, 소중한 분들을 초대합니다."
  }
};
