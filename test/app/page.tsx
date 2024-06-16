"use client"
import { YoutubePreview, UPI } from 'nxtu'

export default function Home() {
  return (
    <main>
      {/* <YoutubePreview videoUrl="https://www.youtube.com/watch?v=1wECsnGZcfc" /> */}
      <UPI upiOptions={{"payeeVPA":"9526451205@ybl","payeeName":"Gilson Gilbert (NxtBiz)","transactionId":100}} />
    </main>
  );
}
