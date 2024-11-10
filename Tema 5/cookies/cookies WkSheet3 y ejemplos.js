window.onload = () => {


    

    document.cookie = "nombre=jesus; SameSite=None; Secure";
    //document.cookie = "nombre=pedro; SameSite=None; Secure";
    document.cookie = "favorite_food=Queso";

    document.cookie = "name=Oeschger; SameSite=None; Secure";


    let cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("nombre="))
        ?.split("=")[1];

    if (cookieValue) {
        console.log(cookieValue);
    }else {
        console.log("No existe");
    }


    if (document.cookie) {
        console.log(document.cookie);
    }

    

}
