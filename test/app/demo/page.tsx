"use client";
import { YoutubePreview, UPI } from 'nxtu';

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <YoutubePreview videoUrl="https://www.youtube.com/watch?v=1wECsnGZcfc" />
        </div>
      </div>
      <div className="mt-4">
        <UPI
          upiOptions={{
            "transactionRefUrl":"https://google.com",
            "transactionRef":"google.com",
            "payeeMerchantCode":"somecode",
            "minimumAmount":"1",
            "transactionId":"0101011",
            "payeeVPA": "9526451205@ybl",
            "payeeName": "Gilson Gilbert (NxtBiz)",
            "amount": 100,
            "note": "Test transaction using UPI"
          }}
        />
      </div>
    </main>
  );
}