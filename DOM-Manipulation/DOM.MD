<h2>Query Selectors</h2>

* element.querySelector(selector) returns reference to the first match of selector
* element.querySelectorAll(selectors) returns a “nodelist” containing references to all of the matches of the selectors There are several other, more specific queries, that offer potential(marginal) performance benefits, but we won’t be going over them now.


It’s important to note that when using querySelectorAll, the return value is not an array. It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. The big distinction is that several array methods are missing from nodelists. One solution, if problems arise, is to convert the nodelist into an array. You can do this with Array.from() or the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).


<h2>Element Creation</h2>
* document.createElement(tagName[, options]) creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

<code>const div = document.createElement('div');</code>