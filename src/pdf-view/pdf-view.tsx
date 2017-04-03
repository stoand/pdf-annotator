import * as PDFJS from 'pdfjs-dist';
import { Component } from 'react';

let scale = 1;
let width = 400;
let height = 800;

// Wait until react has rendered to DOM
export function drawPDF(url: string) {

    window.PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    return window.requestAnimationFrame(() => {
        const canvas = document.querySelector('#pdf-view-root') as HTMLCanvasElement;

        return PDFJS.getDocument(url).then(pdf => {
            return pdf.getPage(1).then(page => {
                const viewport = page.getViewport(scale);
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                page.render({
                    canvasContext: canvas.getContext('2d'),
                    viewport,
                });
            });
        });
    });
}

// #SPC-pdf-view
export const PdfView = ({ url }: { url: string }) => {
    drawPDF(url);
    return <canvas id="pdf-view-root"></canvas>;
};
