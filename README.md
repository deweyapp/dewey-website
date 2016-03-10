# Dewey. Better Chrome Bookmarks.

### Dewey is a [Chrome app](https://chrome.google.com/webstore/detail/dewey-bookmarks/aahpfefkmihhdabllidnlipghcjgpkdm) for tagging, searching and sorting your Chrome bookmarks.

**With Dewey you can:**

- Add custom tags
- Generate screenshots of your bookmarks
- Search and sort in a much smarter and faster way
- [How To (Install, Launch, Search, etc.)](docs/how-to-use-dewey.md) →

## Donate

Help us to switch to more [powerful server](https://www.digitalocean.com/pricing/) (we are using it to [generate screenshots](https://github.com/deweyapp/dewey-server)).

### PayPal

[![PayPal](https://raw.githubusercontent.com/deweyapp/dewey-website/master/docs/images/donate.png "PayPal Donation")](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=outcoldman%40gmail%2ecom&lc=US&item_name=Donation%20for%20supporting%20bookmarks%20application&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted)

### Bitcoin: 1gyn9f44ha99srgllwggk5mzysax3bpesw

[![bitcoin:1gyn9f44ha99srgllwggk5mzysax3bpesw](http://i.imgur.com/V9xtJAt.png)](bitcoin:1gyn9f44ha99srgllwggk5mzysax3bpesw)

[![screenshot](webstore/promo-1400x560.jpg)](https://chrome.google.com/webstore/detail/dewey-bookmarks/aahpfefkmihhdabllidnlipghcjgpkdm)

## Creators

###Denis Gladkikh - Development

- [https://www.outcoldman.com](https://www.outcoldman.com)
- [https://twitter.com/outcoldman](https://twitter.com/outcoldman)
- [https://github.com/outcoldman](https://github.com/outcoldman)

###Jamie Wilson - Design

- [Portfolio - jamiewilson.io](http://jamiewilson.io)
- [Twitter - @jmwlsn](https://twitter.com/jmwsln)
- [github.com/jamiewilson](https://github.com/jamiewilson)

### Artem Grygor - Development

- [Twitter - @artemgrygor](https://twitter.com/artemgrygor)
- [github.com/artemgrygor](https://github.com/artemgrygor)

![screenshot](webstore/screenshot-1.jpg)

Dewey organizes your bookmarks into a grid that continues to load as you scroll down. The layout is also fully responsive, so it still works well even if you need to use a narrow browser window.

![screenshot](webstore/screenshot-2.jpg)

You can use the arrow or tab keys to navigate through your bookmarks. Hit enter to launch the selected link.

![screenshot](webstore/screenshot-3.jpg)

Clicking on the Title of a bookmark will bring up this edit window where you can edit the title, url and add custom tags. You can also delete a bookmark from Chrome.

![screenshot](webstore/screenshot-4.jpg)

There are several ways to search your bookmarks with Dewey:

1. A standard search returns anything with that word in the Tag, Title or URL.
2. Add `tag:` before a word to limit results that have that specific tag applied.
3. Add `title:` before a word to limit results to titles that contain that word.
4. Add `url:` before a word to limit results to URLs that contain that word.

![screenshot](webstore/screenshot-5.jpg)

There is also an option for Dewey to ignore Chrome Bookmarks top-level folders. Dewey will treat these folders as tags, but since Chrome's default is to put all bookmarks saved from your browser into "Other Bookmarks", we thought you might like Dewey to ignore those altogether.

####[More on how to use Dewey](docs/how-to-use-dewey.md) →


## Install on the Chrome Web Store

[![install](docs/images/install.png)](https://chrome.google.com/webstore/detail/dewey-bookmarks/aahpfefkmihhdabllidnlipghcjgpkdm)


## Get Help or Contribute

**Please [submit issues, bugs, improvements, feature requests, etc.](https://github.com/deweyapp/deweyapp/issues) on our issues page.** Or [fork Dewey](https://github.com/deweyapp/deweyapp/fork) and create your own features. Send us pull requests!

It would be helpful if we could occasionally email you questions about Dewey. If you're interested, please subscribe to our mailing list.

[![subscribe](docs/images/subscribe.png)](http://eepurl.com/OeXtX)


##Icons
All icons used in this application are released to the public with No Copyright (CC0 1.0 Universal (CC0 1.0) Public Domain Dedication). 

[![icons](docs/images/icons.png)](http://lyrv.lt/2mF0KiGLQs)

Feel free to use these icons for whatever you want. But if you'd like to help us out, any attribution and/or reference to Dewey would be greatly appreciated.
###[Download](http://lyrv.lt/Fhno6AJugp) - one Adobe Illustrator file with all icons

## Built with…
To build this application we used following Open Source libraries and resources:

- [Bootstrap](http://getbootstrap.com/) – Small section used for dropdown & modal
- [jQuery](https://jquery.org)
- [AngularJS](http://angularjs.org/)
- [UnderscoreJS](http://underscorejs.org/)
- [RequireJS](http://requirejs.org/)
- [UI Bootstrap](http://angular-ui.github.io/bootstrap/) – Custom build with patch for Modal dialog (from branch _bootstrap3_bis2_modalPatch_)
- [bootstrap-tagsinput](http://timschlechter.github.io/bootstrap-tagsinput/examples/bootstrap3/) – With small modification of `bootstrap-tagsinput-angular`  
- [getFavicon](http://g.etfv.co/)

## License
Apache License, Version 2.0

***

### Changelog
- 2.0.2 (February 12 2014) - Update CSS styles to Dewey thumbnails.
- 2.0 (February 11 2014) - Redesign, rebranding. First Dewey version.
- 1.1.2 (October 30 2013) - Use bookmarks url as identity instead of id (each chrome installation has it is own identities). Chrome storage has limitation on item size, changed the way I store custom tags in storage, split it by chunks.
- 1.1.1 (October 29 2013) - Fix issue #1.
- 1.1 (October 28 2013) - Updated bookmark edit dialog with options to edit title, custom tags and delete bookmark.
- 1.0 (October 13 2013) - Ready for use first version of application in Chrome Web Store.
- 0.1 (September 27 2013) - First prototype on [Seattle Google Developer Groups Dev Fest 2013](http://www.meetup.com/seattle-gdg/events/125948972/). ([second place](http://www.flickr.com/photos/pahphotos/10015447933/))


