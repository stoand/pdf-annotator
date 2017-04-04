import * as PDFJS from 'pdfjs-dist';
import { Component } from 'react';

let scale = 1;
let width = 400;
let height = 800;

// Wait until react has rendered to DOM
export function drawPDF(url: string) {
    window.PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    return window.requestAnimationFrame(async () => {
        const pdfViewRoot = document.querySelector('#pdf-view-root');

        if (!pdfViewRoot) {
            console.warn('pdfViewRoot missing');
        } else {
            const pdf = await PDFJS.getDocument(url);
            const pageRenderPromises: Array<PDFPromise<void>> = [];

            for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex++) {
                const canvas = document.createElement('canvas') as HTMLCanvasElement;
                pdfViewRoot.appendChild(canvas);

                const page = await pdf.getPage(pageIndex);
                const viewport = page.getViewport(scale);
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                page.render({
                    canvasContext: canvas.getContext('2d') as any,
                    viewport,
                });
            }
        }
    });
}

// #SPC-pdf-view
export const PdfView = ({ url }: { url: string }) => {
    drawPDF(url);
    return <div id="pdf-view-root"></div>;
};
