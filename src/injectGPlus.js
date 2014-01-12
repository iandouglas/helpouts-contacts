// quirk: I wasn't easily able to solve getting my script to fire as soon
// as the page was finished loading, so I set a 3-second timer to call my
// code. If you don't see the Google+ links show up right away, hit
// Refresh in your browser.
setTimeout(function () {
    injectGPlus()
}, 3000);

// here's where the fun begins.
function injectGPlus() {

    // this line of code looks for each individual Helpout session "card"
    nodeList = document.querySelectorAll('[data-tee-session-id]');

    for (var i = 0; i < nodeList.length; ++i) {
        // then we loop through each "card" and look for specific markers
        node = nodeList[i];

        // firstDiv is where we find everything we want.
        firstDiv = node.querySelector('[data-tee-test]').querySelectorAll('div')[4].querySelector('div');
        // first, we grab the Google ID of the user from an attribute, to
        // use later on
        googleID = firstDiv.querySelector('a').getAttribute("data-tee-user-id");
        // then we find where the "Guest: Joe Smith" text is being written
        // on the page
        guestSpan = firstDiv.querySelector('span');

        alreadyDone = guestSpan.querySelector('[data-helpouts-contact]')
        if (!alreadyDone) {
            // along with the quirk of not knowing the page is done
            // loading, sometimes my script would actually fire twice,
            // so this protects us from injecting the Google+ link
            // more than once.

            // basically, all we do is inject a simple link into the
            // <span> tag where the "Guest: Joe Smith" text is already
            // written, and I set a custom attribute to know we've
            // already written this link so the "if" check above doesn't
            // happen on subsequent runs.
            guestSpan.innerHTML = '<a data-helpouts-contact="true" style="margin: 0px 5px;"' +
                'href="http://plus.google.com/' + googleID + '">google+</a>' + guestSpan.innerHTML;
        }
    }
}
// and that's all there is to it.
