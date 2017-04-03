import { render } from 'react-dom';
import { PdfView } from '../../src/pdf-view/pdf-view';

const samplePDF = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

// #TST-pdf-view
describe('PDF View', () => {
    it('can display a page from a loaded PDf', (done) => {
        render(<PdfView url={samplePDF} />, document.querySelector('body'));

        setTimeout(() => {
            done();
        }, 1000);
    });

    it('works', () => {
        console.log(document.body.innerHTML)
    })
});