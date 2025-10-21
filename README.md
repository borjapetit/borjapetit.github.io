# borjapetit.github.io

This repository includes the codes for my personal webpage https://borjapetit.github.io/. Any customization can be modified in the [```.css```](src/cssfile.css) file.

If you experience any problem or have a suggestion, contact me at [bpetit [at] cunef.edu](mailto:bpetit@cunef.edu).

_This code is distributed under the [MIT Licence](LICENSE)_

## Layout

The basic structure of the website is:
```html
<body>

    <!-- this container is full-width -->
    <div class="header"> 
        <!-- add your title and subtitle -->
        <div class="title">
            ...
        </div>
        <div class="subtitle">
            ...
        </div>
    </div>

    <!-- this container has width of 200px and dissapears when window width is < 1000px -->
    <div class="section left">
        <!-- add your picture -->
        <img class="pic" src="files/img/foto.jpeg">
        <div class="subsection">
            <!-- add your contact information -->
        </div>
    </div>

    <!-- this container is full-width minus 200px -->
    <div class="section rigth">
        <!-- add your content in "section" containers -->
        <div class="section">
            <h1>Section header<h1>
            <div class="subsection">
                <!-- your content -->
            </div>
            <div class="subsection">
                <!-- your content -->
            </div>
        </div>
    </div>

    <!-- this container is full-width -->
    <div class="section wide">
        <!-- add your content in "section" containers -->
        <div class="section">
            <h1>Section header<h1>
            <div class="subsection">
                <!-- your content -->
            </div>
            <div class="subsection">
                <!-- your content -->
            </div>
        </div>
    </div>

    <!-- this container is full-width -->
    <div class="footer">
        <!-- anything you want to show in the footer -->
    </div>

</body>
```

## List of urls

You can collect all your urls (coauthors' websites, institutions, etc.) in the file [jsfile.js](src/jsfile.js). This allows to easily update urls without going over the html file.

For example, to include the url of [CUNEF Universidad]("https://www.cunef.edu/en/") you just need to add 
```js
$('a[id=cunef]').attr('href','"https://www.cunef.edu/en/');
```
in the [jsfile.js](src/jsfile.js) and then use it in your ```index.html``` file as ```<a id="cunef">CUNEF Universidad</a>```. 


## Links' icons

Links can show a small icon next to them depending on the content:
- ```<a class="github"> ... </a>``` for github repositories
- ```<a class="link"> ... </a>``` for (generic) external links
- ```<a class="twitter"> ... </a>``` for twitter
- ```<a class="google"> ... </a>``` for google
- ```<a class="address"> ... </a>``` for mailing address
- ```<a class="pdf"> ... </a>``` for pdf files
- ```<a class="paper"> ... </a>``` for papers
- ```<a class="slides"> ... </a>``` for slides
- ```<a class="code"> ... </a>``` for codes

These links can be deactivated by adding ```empty``` in the ```class``` attribute (eg. ```<a class="code empty"> ... </a>``` ). This will still show the icon.
