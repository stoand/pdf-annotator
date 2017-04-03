declare const React;
declare module 'pdfjs-dist' {
    export = PDFJS;
}
declare interface Window {
    PDFJS: PDFJS;
}