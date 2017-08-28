# jkDownloader
A web browser bookmarklet making inconvenient or impossible downloads possible with as little as one click. Works on desktop browsers, mobile browsers, and even Microsoft Edge. Just add jkDownloader to your bookmarks (or Reading List in Edge) and trigger it on a supported webpage. As long as you're connected to the Internet, magic will happen.

I created jkDownloader because music download gates suck and harm both artists and fans. jkDownloader gives you the power to support artists in ways that *you* choose, as well as to download things that might not be available any other way. That being said, **please use jkDownloader responsibly**.

## Supported Websites
* **Artist Intelligence:** Their self-hosted downloads use cookie magic I couldn't figure out, so jkDownloader forces email "verification". It doesn't have to be a valid email address.
* **Beatport Play Remixes:** Remixes can be downloaded from their individual pages. Note that sometimes Beatport forgets the .mp3 extension.
* **Beatport Play Stems:** Downloads stems from a contest page if you are logged in.
* **EDMT:** Bypasses SoundCloud login.
* **Hive:** Downloads songs without the need for even a Facebook account. A little glitchy.
* **Hype Machine:** Downloads from individual track pages.
* **MediaFire:** Downloads files without opening ads.
* **Show.co:** Download email-for-download stuff, even when it's unavailable.
* **SoundCloud:** jkDownloader uses the download link if it exists and the SoundCloud stream otherwise.
* **SoundCloud Art:** Expand the cover art to download it instead of the audio. This is currently not possible on mobile browsers due to SoundCloud's mobile website. Any suggestions for incorporating an alternate way to trigger an art download in jkDownloader is appreciated.
* **Spinnin' Premium:** jkDownloader attempts to find the file on Spinnin Records' Amazon hosting.
* **Spinnin' Talent Pool:** Downloads tracks via a browser hijack I'm a little proud of.
* **Wavo Stems:** Downloads stems directly, sometimes even after a remix contest has ended. Sound familiar? The code was based off [wavo-parser](https://github.com/jkmartindale/wavo-parser).
* **Zippyshare:** Downloads files without opening ads.

## Unsupported Websites
These are websites I have unsuccessfully attempted to support in jkDownloader. Any help with them is greatly appreciated.
* Artist Intelligence (one click)
* PRDCR
* Stereoload
* The Artist Union
* Toneden

## Repository Files
* **jkDownloader.human.js:** The human-readable source showcasing how bad my scripting style is.
* **jkDownloader.js:** Minified jkDownloader compiled with Google's Closure Compiler set to SIMPLE_OPTIMIZATIONS because I'm too lazy to figure out how to get ADVANCED_OPTIMIZATIONS to work.
* **loader.js:** The actual bookmarklet JavaScript, using code I stole from somewhere I forgot. All it does is inject jkDownloader.js into the current page, because then you don't have to reinstall the bookmarklet every time I fix a typo or something.
* **tests.md:** Tests I use to make sure jkDownloader works like it should.

<a href="https://app.codesponsor.io/link/VdKJLdwgqXqJvpCoxBCBDnWk/jkmartindale/jkDownloader" rel="nofollow"><img src="https://app.codesponsor.io/embed/VdKJLdwgqXqJvpCoxBCBDnWk/jkmartindale/jkDownloader.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>
