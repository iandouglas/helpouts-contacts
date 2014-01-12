helpouts-contacts
=================

Inject a Google+ profile link to your Helpouts customers/providers.
Provided under MIT license. Please credit me with any derivative works.

Background
----------
This project is NOT sponsored by Google Helpouts. It was created out of
my own need to have an easier way to connect with my Helpouts clients by
adding them to my Google+ circles for follow-up and future marketing. By
having this Chrome Extension loaded, I am able to see a link to their
Google+ profile where I can add them to one of several circles based on
which Helpouts session of mine that they have scheduled.

Requirements
------------
Requires Google Chrome to operate, probably version 26 or better. It has
been tested on v31 stable, v32 beta and a Canary build.

Installation
------------

1. Click on the file "helpouts helper extension.crx" in the list of files above.
1. On the next page, look for the buttons which say Open, Raw, History and Delete. Click the "Raw" button. This should prompt Chrome to download the extension and place it in your downloads folders.
1. In Chrome, go to the URL chrome://extensions
1. At the top right you should see a checkbox called "Developer Mode", make sure that checkbox is checked.
1. Copy the .crx file from here, and drag it over your browser window where you are viewing your extensions. Chrome should install it without any questions.
1. Go to http://helpouts.google.com/yourhelpouts after logging into Helpouts, and see if the links show up. If not, hit Refresh.

Why is this on GitHub?
----------------------
As with most Chrome extensions and apps, there's usually some questions
surrounding what it's really doing "under the hood" and why it requires
the permissions it's asking for. By putting the code on GitHub, you can
examine the code yourself to see that I'm not doing anything sneaky with
your data. You can also compile your own version, make any changes you
deem are necessary, or even help me fix some bugs or add new features.

Quirks
------
The known quirk right now is that the extension doesn't always fire when
you select your "Past Helpouts" or "Upcoming Helpouts". If you don't see
the Google+ links appear after about 2-3 seconds, reload the page and
the extension should fire properly. I'll get around to fixing this
annoyance once I read up on Chrome Extensions a little more.

Support
-------
The Google Helpouts team will NOT give you support for this Chrome
Extension. You can open an "issue" on GitHub for me, or contact me
through Google+ Hangouts chat if you need assistance.

