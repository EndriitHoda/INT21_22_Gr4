function Bright_night() {
     var t = new Date().getHours();
            if (t > 6 || t < 18) {
                document.body.style.backgroundColor="#C1BDC3";
            } else if (t > 18 || t < 6) {
                document.body.style.backgroundColor="#294525";
        } 
    }


    