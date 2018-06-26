import 'uswds';


let load = function(onLoadFnc) {
    // NOTE: Here we use a try/catch block rather than a global "onerror"
    // handler, because Babel's polyfills strip some of the exception data out.
    // This method retains access to the exception object.
    try {
        onLoadFnc();
    } catch (err) {
        // Send exception to Google Analytics.
        if (window.ga) {
            window.ga('send', 'exception', {
                // exDescription will be truncated at 150 bytes
                exDescription: err.stack,
                exFatal: true
            });
        }
        throw err;
    }
};

export const loadDom = function(onLoadFnc) {
    if (document.readyState !== 'loading') {
        load(onLoadFnc);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
                load(onLoadFnc);
            }, false
        );

    }
};

