import wdfnviz from '../../src/js/main.js';

describe('wdfn-viz tests', () => {

    it('Function is called after DOM has been loaded', (done) => {
        let loadFncSpy = jasmine.createSpy('loadFncSpy');
        wdfnviz.main(loadFncSpy);
        if (document.readyState !== 'loading') {
            expect(loadFncSpy).toHaveBeenCalled();
            done();
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                expect(loadFncSpy).toHaveBeenCalled();

                done();
            });
        }
    });

    it('Google analytics event is sent if google analytics is configured and the onLoadFunc throws an error', (done) => {
        const testFunc = function() {
            throw 'Test error handling';
        };
        window.ga = jasmine.createSpy('windowGASpy');

        if (document.readyState !== 'loading') {
            expect(function() {
                wdfnviz.main(testFunc);
            }).toThrow('Test error handling');

            expect(window.ga).toHaveBeenCalled();
            done();
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                expect(function() {
                    wdfnviz.main(testFunc);
                }).toThrow('Test error handling');

                expect(window.ga).toHaveBeenCalled();
                done();
            });
        }
    });
});