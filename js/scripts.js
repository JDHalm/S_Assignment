function tabsSwitch(tabsTabId, tabsTabContent) {
    var x = document.getElementsByClassName("tab-content");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }
    document.getElementById(tabsTabContent).style.display = "block";

    var x = document.getElementsByClassName("tab-nav");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].className = 'tab-nav';
    }
    document.getElementById(tabsTabId).className = 'tab-nav active';
}
