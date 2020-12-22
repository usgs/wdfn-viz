import wdfnviz from './main.js';

describe('wdfn-viz tests', () => {

    it('Function is called after DOM has been loaded', () => {
        let loadFncSpy = jest.fn();
        wdfnviz.main(loadFncSpy);
        return new Promise(resolve => {
            if (document.readyState !== 'loading') {
                expect(loadFncSpy).toHaveBeenCalled();
                resolve();
            } else {
                document.addEventListener('DOMContentLoaded', () => {
                    expect(loadFncSpy).toHaveBeenCalled();

                    resolve();
                });
            }
        });
    });

    it('Google analytics event is sent if google analytics is configured and the onLoadFunc throws an error', () => {
        const testFunc = function() {
            throw 'Test error handling';
        };
        window.ga = jest.fn();

        return new Promise(resolve => {
            if (document.readyState !== 'loading') {
                expect(function() {
                    wdfnviz.main(testFunc);
                }).toThrow('Test error handling');

                expect(window.ga).toHaveBeenCalled();
                resolve();
            } else {
                document.addEventListener('DOMContentLoaded', () => {
                    expect(function() {
                        wdfnviz.main(testFunc);
                    }).toThrow('Test error handling');

                    expect(window.ga).toHaveBeenCalled();
                    resolve();
                });
            }
        });
    });
});