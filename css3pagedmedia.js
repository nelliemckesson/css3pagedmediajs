function getStyle(mySelector) {
    var allRules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
    for (var x = 0; x < allRules.length; x++) {
        if (allRules[x].selectorText == mySelector) {
            (allRules[x].cssText) ? console.log(allRules[x].cssText) : console.log(allRules[x].style.cssText);
        }
    }
}

function getPageRules(mySelector) {
    var allRules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
    for (var x = 0; x < allRules.length; x++) {
        if (allRules[x].type == 6) {
            console.log(allRules[x].cssText);
        }
    }
}

// for pages: read the page rules
// apply global page rules
// apply named page rules: read the element, 
// detect any named pages from the elements applied styles
// then process the named page rules and apply them

// for master page rules:
// use a parent container (iframe?) (wrap via js?)
// if: page-break-before: move the element to the top of the parent.

getStyle('.test');
getPageRules('@page');