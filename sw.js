// 바질 키우기 — 앱 설치(홈 화면에 추가)용 일꾼. 파일을 담아 두지 않는다 (담아 두면 고친 판이 패드에 안 내려옴).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
