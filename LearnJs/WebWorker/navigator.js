async function reverseGeo(lati, long) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lati}&lon=${long}&format=json`;
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data.display_name);
    const posElem = document.createElement('h1');
    posElem.id = 'posElem';
    posElem.textContent =
        `Your Current latitude : ${lati}\n
        Your Current longitude : ${long}\n
        Your Location : ${data.display_name}`;
    document.body.appendChild(posElem);
}
document.addEventListener('DOMContentLoaded', () => {

    
    const LocElem = document.getElementById('getLoc');
    LocElem.addEventListener('click', (event) => {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
            // reverseGeo(position.coords.latitude, position.coords.longitude);
            },
            (error)=>{
                
            },
            {enableHighAccuracy: true}
        );
        // const textToCopy = navigator.clipboard.writeText("Hello Bae...");
        const copiedText = navigator.clipboard.readText();

        
        // textToCopy.then((value)=>{
        //     console.log("Coppied Data : ", value);
        //     alert("text Copied Successfully")
        // })
        // .catch((err) => {
        //     console.error("Failed to copy: ", err);
        // });
        copiedText
        .then((data)=>{
            console.log("Coppied Data : ", data);
        })
        .catch((error)=>{
            console.log(error);
        });
    });
});

