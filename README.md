# refactor.js
Simple tool for refactoring your code

##example

Suppose you you want more colums in twitter bootstrap, this example changes your html code, that it uses 24 colums instead of 12

in refactor js

regexp = /(col-)([a-zA-Z-]+)([0-9]{1,2})/g

replacer returns  parenthes[0]+parenthes[1]+parenthes[2]*2;

so the code  doubles the value in third parenteses, throughout the project . for instance if there is `col-sm-6` in the project, it will become `col-sm-12` `col-sm-offset-3`-> `col-sm-offset-6` and so on.

This simple project was started, because awk and similar tools makes me crazy. 