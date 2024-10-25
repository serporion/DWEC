        var mapita = L.map('mapon').setView([37.1313632, -3.563211], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapita);

        var marker = L.marker([37.1313632, -3.563211]).addTo(mapita);
        //.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')       
        //.openPopup();