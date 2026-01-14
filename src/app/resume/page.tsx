"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer, Background } from "@/components/common";
import { nasalization } from "@/app/fonts";
import { PDFErrorBoundary } from "@/components/PDFErrorBoundary";
import {
  HiTélécharger,
  HiOutlineArrowsExpand,
  HiExternalLink,
} from "react-icons/hi";

interface HTMLIFrameElementWithPlein écran extends HTMLIFrameElement {
  webkitRequestPlein écran?: () => Promise<void>;
  msRequestPlein écran?: () => Promise<void>;
}

interface DocumentWithPlein écran extends Document {
  webkitExitPlein écran?: () => Promise<void>;
  msExitPlein écran?: () => Promise<void>;
}



export default function CV() {

  const [isPlein écran, setIsPlein écran] = useState(false);

  const PDF_URL = "/docs/Racim_Zenati_CV.pdf";



  useEffect(() => {
    const handlePlein écranChange = () => {
      setIsPlein écran(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handlePlein écranChange);
    document.addEventListener("webkitfullscreenchange", handlePlein écranChange);
    document.addEventListener("mozfullscreenchange", handlePlein écranChange);
    document.addEventListener("MSPlein écranChange", handlePlein écranChange);

    return () => {
      document.removeEventListener("fullscreenchange", handlePlein écranChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handlePlein écranChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handlePlein écranChange
      );
      document.removeEventListener(
        "MSPlein écranChange",
        handlePlein écranChange
      );
    };
  }, []);



  const togglePlein écran = () => {
    if (!isPlein écran) {
      const iframe = document.querySelector(
        "iframe"
      ) as HTMLIFrameElementWithPlein écran;
      if (iframe?.requestPlein écran) {
        iframe.requestPlein écran();
        setIsPlein écran(true);
      } else if (iframe?.webkitRequestPlein écran) {
        iframe.webkitRequestPlein écran();
        setIsPlein écran(true);
      }
    } else {
      if (document.exitPlein écran) {
        document.exitPlein écran();
      } else if ((document as DocumentWithPlein écran).webkitExitPlein écran) {
        (document as DocumentWithPlein écran).webkitExitPlein écran?.();
      } else if ((document as DocumentWithPlein écran).msExitPlein écran) {
        (document as DocumentWithPlein écran).msExitPlein écran?.();
      }
      setIsPlein écran(false);
    }
  };

  return (
    <div className={`min-h-screen selection:bg-primary/20 ${nasalization.className}`}>
      <Background />
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary mb-2">
              CV
            </h1>
            <p className="text-muted-foreground">
              Voir ou télécharger mon CV
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={togglePlein écran}
              className="group relative flex items-center gap-2 px-5 py-3 rounded-xl overflow-hidden transition-all duration-300 border border-secondary/30 bg-card/30 hover:bg-secondary/10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px hsl(var(--secondary) / 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <HiOutlineArrowsExpand className="w-4 h-4 text-secondary relative z-10 pointer-events-none" />
                <span className="text-foreground font-medium relative z-10 pointer-events-none">
                  {isPlein écran ? "Quitter plein écran" : "Plein écran"}
                </span>
              </motion.button>

              <motion.a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-5 py-3 rounded-xl overflow-hidden transition-all duration-300 border border-secondary/30 bg-card/30 hover:bg-secondary/10"
                whileHover={{
                  scale: 1.05,
                  borderColor: "hsl(var(--secondary) / 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <HiExternalLink className="w-4 h-4 text-secondary pointer-events-none" />
                <span className="text-foreground font-medium pointer-events-none">
                  Ouvrir dans un onglet
                </span>
              </motion.a>

              <motion.a
                href={PDF_URL}
                download="Racim_Zenati_CV.pdf"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 font-medium text-primary-foreground"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
                  boxShadow: "0 8px 25px hsl(var(--primary) / 0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 35px hsl(var(--primary) / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <HiTélécharger className="w-4 h-4 relative z-10 pointer-events-none" />
                <span className="relative z-10 pointer-events-none">Télécharger PDF</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl z-10"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-card/20 to-card/30 backdrop-blur-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl bg-clip-border pointer-events-none" />

            <PDFErrorBoundary pdfUrl={PDF_URL}>
              <motion.div
                className="pdf-container relative w-full overflow-hidden bg-white/95 backdrop-blur-sm rounded-3xl"
                style={{ height: "800px" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="pdf-viewer">
                  <div
                    className="flex justify-center items-start min-h-full p-4"
                  >
                    <iframe
                      src={`${PDF_URL}#view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                      width="100%"
                      height="780px"
                      className="border-0 shadow-lg rounded-lg"
                      title="CV PDF"
                      style={{
                        maxWidth: "100%",
                        minHeight: "600px",
                        background: "#ffffff",
                      }}
                      allow="fullscreen"
                    />
                  </div>
                  </div>

              </motion.div>
            </PDFErrorBoundary>
          </motion.div>
        </div>

        <Footer />

    </div>
  );
}
