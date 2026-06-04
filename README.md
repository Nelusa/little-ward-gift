# Little Ward Gift

Dárkový web ve stylu LoL invite — loading screen + reveal videa o tvorbě malého wardu (přívěsku).

## Spuštění

```bash
npm install
npm run dev
```

Otevře se na [http://localhost:3000](http://localhost:3000).

## Co upravit

Vše je v [`lib/quotes.ts`](lib/quotes.ts):

- **`videoUrl`** — YouTube embed URL (nahraď `VIDEO_ID` za skutečné ID)
- **`senderName`** — tvoje jméno pro podpis
- **`recipientName`** — jméno obdarovaného (pokud ho chceš použít)
- **`dedication`** — řádky věnování
- **`quotes`** — citáty na loading screenu (vybírá se náhodně)

Pro lokální video nahraď `<iframe>` v [`components/MainInterface.tsx`](components/MainInterface.tsx) za:

```tsx
<video src="/video.mp4" controls autoPlay playsInline className="w-full h-full" />
```

a soubor dej do `public/video.mp4`.

## Deploy zdarma

```bash
npm run build
```

Pak nahraj na **Vercel** (zdarma, ideální pro Next.js):
1. Push do GitHub repa
2. Na [vercel.com](https://vercel.com) klikni Import → vyber repo → Deploy
3. Dostaneš `nazev.vercel.app` URL pro QR kód
