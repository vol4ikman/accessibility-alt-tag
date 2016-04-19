# Accessibility helper jQuery Plugin
<p>Accessibility Alt tag scanner</p>
<p>Accessibility role="link"</p>


### Usage

1) include jquery to your page

2) add jquery.alttag.js to your page

3) add this js code:
```js
    jQuery("body").altTag({
        test: true
    }
```

### Default Options
```js
    test : false,
    fix  : true,
    alt  : 'image',
    rolelink : false,
    landmark: false
```
<p><code>test</code> - [true/false] log in console how much images you have pn current page without alt tag</p>
<p><code>fix</code>  - [true/false] add missed alt tags to images</p>
<p><code>alt</code> - string, alt value for images</p>
<p><code>roleLink</code> - [true/false] add role="link" to each <a> tag on the DOM</p>
<p><code>landmark</code> - [true/false] add aria landmarks to HTML5 elements, see table below:</p>
<table>
    <caption>ARIA landmarks and their corresponding HTML5 elements</caption>
    <thead>
        <tr>
            <th scope="col">ARIA Landmark</th>
            <th scope="col">HTML5 Element</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>banner</td>
            <td>&lt;header&gt;</td>
        </tr>
        <tr>
            <td>complementary</td>
            <td>&lt;aside&gt;</td>
        </tr>
        <tr>
            <td>contentinfo</td>
            <td>generic &lt;div&gt; acting as the footer</td>
        </tr>
        <tr>
            <td>form</td>
            <td>&lt;form&gt; or generic &lt;div&gt;</td>
        </tr>
        <tr>
            <td>main</td>
            <td>&lt;main&gt;</td>
        </tr>
        <tr>
            <td>navigation</td>
            <td>&lt;nav&gt;</td>
        </tr>
        <tr>
            <td>search</td>
            <td>&lt;form&gt; or generic &lt;div&gt;</td>
        </tr>
        <tr>
            <td>application</td>
            <td>generic &lt;div&gt;</td>
        </tr>
    </tbody>
</table>
