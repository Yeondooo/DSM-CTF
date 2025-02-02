window.onload = function() {
    let i;
    
//    sidenav
    let sidenav = document.getElementsByClassName("sidenav");
    let sidenavOpenBtn = document.getElementsByClassName("sidenavOpenBtn");
    let sidenavCloseBtn = document.getElementsByClassName("sidenavCloseBtn");
    
    sidenavOpenBtn[0].onclick = function() { sidenav[0].classList.add("sidenav-active"); };
    sidenavCloseBtn[0].onclick = function() { sidenav[0].classList.remove("sidenav-active"); };
    
//    stickynav
    let stickyNav = document.getElementsByClassName("stickyNav");
    let stickyNavList = document.getElementsByClassName("stickyNavList");
    stickyNav[0].onclick = function() {
        stickyNavList[0].classList.toggle("stickyNavList-active");
    };
    
//    probs
    
//    navigation
    let probsLink = document.querySelectorAll("a.probsLink");
    if(probsLink != null) {
        for(i = 0; i<probsLink.length; i++) {
            probsLink[i].onclick = function() {
                document.querySelector("#category-" + this.innerHTML).scrollIntoView({behavior: 'smooth'});
            }
        }
    }
    
//    add id
    let categories = document.getElementsByClassName("categories");
    if(categories != null) {
        for(i = 0; i< categories.length; i++) {
            let categoryName = categories[i].getElementsByClassName("categoryName");
            categories[i].id = "category-"+categoryName[0].innerHTML;
        }
    }
    
//    modal open
    let probs = document.getElementsByClassName("probs");
    let probsOverlay = document.getElementsByClassName("probsOverlay");
    if(probs != null) {
        for(i = 0; i< probs.length; i++) {
            probs[i].onclick = function() {
                probsOverlay[0].classList.add("modal-on");
            };
        }
    }
    
//    modal close
    let modalCloseBtn = document.getElementsByClassName("modalCloseBtn");
    if(modalCloseBtn != null && modalCloseBtn[0] != null) {
        modalCloseBtn[0].onclick = function() { probsOverlay[0].classList.remove("modal-on"); };
    }
    
//    admin user
   
}