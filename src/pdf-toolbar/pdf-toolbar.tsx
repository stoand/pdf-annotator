import { PdfView } from '../pdf-view/pdf-view';

const samplePDF = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

export const PdfToolbar = () => (
    <div>
        <div className="upper-toolbar">
            <div className="row">
                <div className="one-half column">
                    <div className="app-title">PDF Annotator</div>
                </div>
                <div className="one-half column">
                    <button className="toolbar-btn">Import PDF</button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="three columns">&nbsp;</div>
            <div className="six columns pdf-view">
                <PdfView url={samplePDF} />
            </div>
            <div className="three columns">&nbsp;</div>
        </div>
    </div>
);