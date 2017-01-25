---
layout: default
---

<section class="deck-slide h-slide uk-vertical-align" id="index">
  <div class="uk-vertical-align-middle">
    <h1>Introduction to Building Chrome Extensions</h1>
  </div>
</section>

<section class="deck-slide h-slide" id="getting-started">
  <h2>Getting Started</h2>
  <p><code>chrome://extensions</code> > check Developer mode > Load unpacked extension</p>
  <br />
  <img class="uk-width-1-1" src="{{ '/assets/img/getting-started.jpg' | relative_url }}" alt="chrome://extensions > check developer mode > load unpacked extension" />
</section>

<section class="deck-slide h-slide" id="icons">
  <h2>Icons</h2>
  <p>If some icon size is not provided, Chrome attempts to use the best size available. However, they must all be equal in height and width.</p>
  <ul>
    <li>128x128: installation and Chrome Web Store</li>
    <li>48x48: chrome://extensions</li>
    <li>16x16: favicon</li>
    <li>19x19: browser icon</li>
  </ul>
</section>

<section class="deck-slide h-slide" id="manifest">
  <h2>Manifest.json</h2>
  <p>Tells Chrome what your extension is and what it'll need to work.</p>
  <div class="uk-grid">
    <div class="uk-width-1-2">
      <ul class="no-list">
        <li class="deck-slide fade" id="manifest-basic"><strong>Basic Settings</strong></li>
        <ul class="uk-margin-remove">
          <li class="deck-slide fade" id="manifest-basic1"><strong>manifest_version:</strong> version of the manifest file format (Version 1 was deprecated as of Chrome 18, so always use 2)</li>
          <li class="deck-slide fade" id="manifest-basic2"><strong>default_locale:</strong> for internationalization, specifies the subdirectory of _locales</li>
          <li class="deck-slide fade" id="manifest-basic3"><strong>name:</strong> name of extension</li>
          <li class="deck-slide fade" id="manifest-basic4"><strong>description:</strong> summary of what the extension does</li>
          <li class="deck-slide fade" id="manifest-basic5"><strong>version:</strong> used to update users</li>
          <li class="deck-slide fade" id="manifest-basic6"><strong>author:</strong> you</li>
          <li class="deck-slide fade" id="manifest-basic7"><strong>icons:</strong> string of icon filenames</li>
          <li class="deck-slide fade" id="manifest-basic8"><strong>permissions:</strong> which Chrome APIs the extension uses, lets the user know what the extension might affect</li>
        </ul>
        <li class="deck-slide uk-margin-top" id="manifest-background">
          <strong>Background Pages</strong>
          <ul class="no-list">
            <li>Main logic and initialization, bridges together components of the extension</li>
          </ul>
        </li>
        <ul>
          <li class="deck-slide fade" id="manifest-background1"><strong>Persistent page:</strong> active all the time</li>
          <li class="deck-slide fade" id="manifest-background2"><strong>Event page:</strong> triggered only when needed (recommended, saves memory and overall performance)</li>
        </ul>
        <li class="deck-slide uk-margin-top" id="manifest-content">
          <strong>Content Script</strong>
          <ul class="no-list">
            <li>Accesses the current page's DOM</li>
          </ul>
        </li>
        <ul>
          <li class="deck-slide fade" id="manifest-content1"><strong>Matches:</strong> determines which pages the content script will be injected into</li>
          <li class="deck-slide fade" id="manifest-content2"><strong>CSS/JS:</strong> list of files to be injected</li>
        </ul>
      </ul>
    </div>
    <div class="uk-width-1-2">
      <pre><code>{% include manifest.html %}</code></pre>
    </div>
  </div>
</section>

<section class="deck-slide h-slide" id="ui-browser">
  <h2>User Interface</h2>
  <h3>Browser Action</h3>
  <div class="uk-grid">
    <div class="uk-width-1-2">
      <ul class="no-list">
        <li class="deck-slide fade" id="browser-1">
          Place an icon on the right side of the address bar.
          <img src="{{ '/assets/img/browser-action.jpg' | relative_url }}" />
        </li>
        <li class="deck-slide fade" id="browser-2">
          <strong>Popup</strong><br>
          If a browser action has a popup, the popup appears when the user clicks the icon.
        </li>
        <li class="deck-slide fade uk-margin-top" id="browser-3">
          <strong>Badge</strong><br>
          Browser actions can optionally display a badge — a bit of text that is layered over the icon (ie notifications).
          <pre><code>chrome.browserAction.setBadgeText({text: "yeah"});</code></pre>
        </li>
      </ul>
    </div>
    <div class="uk-width-1-2">
      <strong>manifest.json</strong>
      <pre><code>{% include browser_manifest.html %}</code></pre>
      <br />
      <strong>background.js</strong>
      <pre><code>{% include browser_background.html %}</code></pre>
    </div>
  </div>
</section>

<section class="deck-slide h-slide" id="ui-page">
  <h2>User Interface</h2>
  <h3>Page Action</h3>
  <div class="uk-grid">
    <div class="uk-width-1-2">
      <ul class="no-list">
        <li class="deck-slide fade" id="page-1">
          Place an icon <em>inside</em> the address bar, but only shows up when specified (ex: RSS feed). Works very similarly to browser action but can't have pages.
          <img src="{{ '/assets/img/page-action.png' | relative_url }}" />
        </li>
        <li class="deck-slide fade uk-margin-top" id="page-2">
          You make a page action appear and disappear using the <code>pageAction.show</code> and <code>pageAction.hide</code> methods, respectively.
        </li>
        <li class="deck-slide fade uk-margin-top" id="page-3">
          When you show it, you specify the tab in which the icon should appear. The icon remains visible until the tab is closed or starts displaying a different URL
        </li>
      </ul>
    </div>
    <div class="uk-width-1-2">
      <strong>manifest.json</strong>
      <pre><code>{% include page_manifest.html %}</code></pre>
    </div>
  </div>
</section>

<section class="deck-slide h-slide" id="api">
  <h2>APIs</h2>
  <p>
    Must include in <code>permissions</code> to use.<br>
    <a href="https://developer.chrome.com/extensions/api_index" target="_blank">https://developer.chrome.com/extensions/api_index</a>
  </p>
  <ul class="no-list">
    <li>
      <strong>bookmarks</strong><br>
      Create, organize, manipulate bookmarks
    </li>
    <li class="uk-margin-top">
      <strong>cookies</strong><br>
      Query and modify cookies
    </li>
    <li class="uk-margin-top">
      <strong>omnibox</strong><br>
      Register a keyword with the address bar<br>
      <img src="{{ '/assets/img/omnibox.png' | relative_url }}">
    </li>
    <li class="uk-margin-top">
      <strong>tabs</strong><br>
      Interact with the browser's tabs
    </li>
  </ul>
</section>

<section class="deck-slide h-slide" api="demo">
  <h1>Demo!</h1>
  <a href="https://github.com/lllychen/crx-tutorial/tree/master/assets/demo">Github repo</a>
</section>
