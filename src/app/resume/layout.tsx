import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "CV - Racim ZENATI",
  description:
    "View and download Racim ZENATI's professional resume..",
  keywords: resumeKeywords,
  openGraph: {
    title: "CV - Racim ZENATI",
    description:
      "View and download Racim ZENATI's professional resume featuring his experience and skills as a student developer.",
    url: "https://racim-zenati.netlify.app/resume",
    siteName: "Racim ZENATI",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Racim ZENATI Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV - Racim ZENATI",
    description:
      "View Racim ZENATI's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/Racim_ZENATI_Resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
