function hesapla() {
    // Vücut kitle indeksi hesaplama
    let boy = document.getElementById("boy").value;
    let kilo = document.getElementById("kilo").value;
    let index = kilo/(boy/100)**2;
    let ideal = (boy-100)-((boy-150)/4);

    // Hata yönetimi
    if(isNaN(boy) || isNaN(kilo)) {
        mesaj = "Boy ve kilo sayı olmalı";
        hatamesaj();
    }
    else if(boy < 50 || kilo < 30) {
        mesaj = "Boy 50'den, kilo 30'dan az olamaz";
        hatamesaj();
    }
    else {
        vkihesap();
    }
    // Hataları yazdırma
    function hatamesaj() {
        document.getElementById("sonuc").innerHTML = mesaj;
        document.getElementById("sonuc").className = 'has-text-danger';
    }

    function vkihesap() {
        // İdeal kilo tespiti
        if (index < 18.49) {
            mesaj = "İdeal kilonuzun altındasınız";
            document.getElementById("sonuc").className = 'has-text-info';
        }
        else if (index < 24.99) {
            mesaj = "İdeal kilo aralığındasınız";
            document.getElementById("sonuc").className = 'has-text-dark';
        }
        else if (index < 29.99) {
            mesaj = "İdeal kilonuzun üstündesiniz"
            document.getElementById("sonuc").className = 'tomato';
        }
        else {
            mesaj = "İdeal kilonuzun çok üstündesiniz"
            document.getElementById("sonuc").className = 'has-text-danger';
        }
    
        // Cinsiyet seçimi
        if (vki.cinsiyet.value == "Kadın") {
            ideal = ideal-5;
        }
        // Sonuçları yazdırma
        document.getElementById("sonuc").innerHTML = ("Vücut kitle indeksiniz: "+index.toFixed(2)+"<br>"+mesaj+"<br>"+"İdeal kilonuz: "+ideal);
    }
}