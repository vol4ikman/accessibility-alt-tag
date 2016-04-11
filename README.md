# accessibility-alt-tag
Accessibility Alt tag scanner


### Usage

1) include jquery to your page

2) add jquery.alttag.js to your page

3) add this js code:
```js
    jQuery("body").altTag({
        test: true
    }
```

### Options
```js
    test : false,
    fix  : true,
    alt  : 'image'
```
test - log in console how much images you have pn current page without alt tag
fix  - add missed alt tags to images
alt - string, alt value for images
