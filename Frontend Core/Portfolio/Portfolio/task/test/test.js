const path = require('path');
const pagePath = 'file://' + path.resolve(__dirname, '../src/index.html');
const {StageTest, correct, wrong} = require('hs-test-web');


class PortfolioTest extends StageTest {

    page = this.getPage(pagePath)

    tests = [
        this.page.execute(() => {
            let headers = document.getElementsByTagName('header');

            if (headers === null || headers.length === 0) {
                return wrong('Cannot find the header in the document.');
            } else if (headers.length > 1) {
                return wrong('Found more than one header in the document.');
            }

            return correct();
        }),
        this.page.execute(() => {
            let nav = document.getElementsByTagName('nav');

            if (nav === null || nav.length === 0) {
                return wrong('Cannot find the nav element on your web page.');
            }

            return correct();
        }),
        this.page.execute(() => {
            let headings1 = document.getElementsByTagName('h1');

            if (headings1 === null || headings1.length === 0) {
                return wrong('Cannot find h1 element on your web page.');
            }

            let header = headings1[0]
            let title = header.textContent || header.innerText;

            if (!title || title.length === 0) {
                return wrong('Cannot find a text within h1 element.');
            }

            return correct();
        }),
        this.page.execute(() => {
            let html = document.getElementsByTagName('html')[0];

            let margin = window.getComputedStyle(html).margin;
            if (margin !== '0px') {
                return wrong('It seems that you have not reset the default margin property');
            }

            let padding = window.getComputedStyle(html).padding;
            if (padding !== '0px') {
                return wrong('It seems that you have not reset the default padding property');
            }

            return correct();
        }),
        this.page.execute(() => {
            let footers = document.getElementsByTagName('footer');

            if (footers === null || footers.length === 0) {
                return wrong('Cannot find the footer in the document.');
            } else if (footers.length > 1) {
                return wrong('Found more than one footer in the document.');
            }

            return correct();
        }),
        this.page.execute(() => {
            let sections = document.getElementsByTagName('section');

            if (sections === null || sections.length < 3) {
                return wrong(`Cannot find tree sections elements. There are only ${sections.length}.`);
            }

            return correct();
        }),
        this.page.execute(() => {
            let sections = document.getElementById('about');

            if (sections === null || sections.length < 1) {
                return wrong('Cannot find a section with the "about" id.');
            }

            return correct();
        }),
        this.page.execute(() => {
            let sections = document.getElementById('portfolio');

            if (sections === null || sections.length < 1) {
                return wrong('Cannot find a section with the "portfolio" id.');
            }

            return correct();
        }),
        this.page.execute(() => {
            let sections = document.getElementById('contacts');

            if (sections === null || sections.length < 1) {
                return wrong('Cannot find a section with the "contacts" id.');
            }

            return correct();
        }),
        this.page.execute(() => {
            function getRealColor(elem) {
                try {
                    while (elem) {
                        let color = window.getComputedStyle(elem).backgroundColor;
                        if (color !== "rgba(0, 0, 0, 0)") {
                            let match = color.match(/^rgba?\((\d+), (\d+), (\d+)(, [\d.]+)?\)$/i);
                            return {
                                red: Number(match[1]),
                                green: Number(match[2]),
                                blue: Number(match[3]),
                                hex: Number(match[1]) * 65536 + Number(match[2]) * 256 + Number(match[3])
                            };
                        }
                        elem = elem.parentElement;
                    }
                } catch (e) {
                    return null;
                }
                return null;
            }

            let headers = document.getElementsByTagName('header');

            if (headers === null || headers.length === 0) {
                return wrong('Cannot find the header in the document.');
            } else if (headers.length > 1) {
                return wrong('Found more than one header in the document.');
            }

            let hasBackgroundImage = getComputedStyle(headers[0]).background.includes('url');

            let headerBack = getRealColor(headers[0]);
            let noCustomHeaderColor = headerBack === null || headerBack.hex === 0xFFFFFF;
            if (noCustomHeaderColor && !hasBackgroundImage) {
                return wrong("Looks like header's background color is not set. " +
                    "It should be an image or some non-white color.")
            }

            let footers = document.getElementsByTagName('footer');

            if (footers === null || footers.length === 0) {
                return wrong('Cannot find the footer in the document.');
            } else if (headers.length > 1) {
                return wrong('Found more than one footer in the document.');
            }

            hasBackgroundImage = getComputedStyle(footers[0]).background.includes('url');

            let footerBack = getRealColor(footers[0]);
            let noCustomFooterColor = footerBack === null || footerBack.hex === 0xFFFFFF;
            if (noCustomFooterColor && !hasBackgroundImage) {
                return wrong("Looks like footer's background color is not set. " +
                    "It should be an image or some non-white color.")
            }

            return correct()
        })
    ]
}

it('Test stage', async function () {
    try {
        this.timeout(30000)
    } catch (ignored) {
    }
    await new PortfolioTest().runTests()
}, 30000)