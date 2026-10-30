/* 豆米特：共用資料庫設定（Supabase）
   這個檔案由 tools/build_web.py 從專案的 .env 產生（SUPABASE_URL、SUPABASE_ANON_KEY），要改請改 .env 再 build。
   兩個值的來源（Project Settings → API Keys / Data API）：
     supabaseUrl      例如 'https://abcdefghijklmnop.supabase.co'
     supabaseAnonKey  「anon public」或「Publishable key」（sb_publishable_…）— 這把本來就是公開的
   千萬不要放 service_role / secret key。
   兩個都空著 = 本機模式：資料只存在那支手機，別人看不到。
   adminTokenHash = 管理連結的指紋（不是密碼本身），由 tools/build_web.py 自動填，不用動。
   lineLogin = 綁定 LINE（.env 的 LINE_LOGIN=on 才是 true；要先在 LINE Developers 和 Supabase 後台設定好）。
   vapidPublicKey = 推播通知的公鑰（.env 的 PUSH=on 時才放 VAPID_PUBLIC_KEY；公開的那一把。私鑰只放 Supabase，不會在這裡）。
   googleMapsKey = Google 地圖的 key（.env 的 GOOGLE_MAPS_API_KEY；branch google-map）。瀏覽器用的 key 本來就看得到，
     要在 Google Cloud 限制只有我們的網站能用。空著 = 用 OpenStreetMap 的地圖。
   googleMapsMapId = Google 地圖的 Map ID（.env 的 GOOGLE_MAPS_MAP_ID，可以不填）。 */
window.APP_CONFIG = {
  supabaseUrl: 'https://bxoaolzovbcdulqacaur.supabase.co',
  supabaseAnonKey: 'sb_publishable_G9rinvl00nX_2jGGOH7GTQ_333VVTA6',
  adminTokenHash: 'b6730da825b7942f538815f52185885e52cb08c5e260dc806bb9be0708f576f9',
  lineLogin: false,
  vapidPublicKey: '',
  googleMapsKey: 'AIzaSyAxKEws1yiLB2lIDILIFpJSGzgjTbZcUZo',
  googleMapsMapId: ''
};
