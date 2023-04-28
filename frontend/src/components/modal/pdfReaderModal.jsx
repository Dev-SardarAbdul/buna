import React, { useState, useEffect } from "react";
import { PDFModalWrapper } from "./styled";
import dummyPdf from "../../assets/pdf/dummy.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { useRef } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function PdfReaderModal() {
  return (
    <PDFModalWrapper>
      <div className="d-flex justify-content-center">
        <embed
          src={dummyPdf}
          width="1300"
          height="1200"
          type="application/pdf"
          className="mt-2"
        />
      </div>
    </PDFModalWrapper>
  );
}

export default PdfReaderModal;
