import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NxtU - Reusable components for NextJS/React",
  description: "NxtU - Reusable components for NextJS/React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
