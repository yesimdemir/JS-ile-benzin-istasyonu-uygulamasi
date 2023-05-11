//BENZİN İSTASYONU UYGULAMASI

/*

  1-Dizel  : 24.53
  2-Benzin : 22.25
  3-LPG    : 11.1


  Gelen müşteriden alınacak bilgiler:
  1-Yakıt tipi
  2-Yüklenecek yakıt miktarı

*/


let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;

const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" +yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3"){
let yakitLitresi = Number(prompt("Yakıt litresini giriniz: "));
let bakiye = Number(prompt("Bakiyenizi giriniz: "));

if(yakitTipi == "1"){
    //DİZEL
    let odenecekTutar = dizel * yakitLitresi;
    if(odenecekTutar < bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı" +yeniSatir
        +"Kalan Bakiye : " +(bakiye));
    }
    else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değil!" +yeniSatir
        + "Ödenecek Tutar : " + odenecekTutar + yeniSatir
        + "Bakiye : " + bakiye +yeniSatir
        +"Eksik Tutar : " + (odenecekTutar - bakiye));
    }
}else if(yakitTipi == "2"){
    //BENZİN
    let odenecekTutar = benzin * yakitLitresi;
    if(odenecekTutar < bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı" +yeniSatir
        +"Kalan Bakiye : " +(bakiye));
    }
    else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değil!" +yeniSatir
        + "Ödenecek Tutar : " + odenecekTutar + yeniSatir
        + "Bakiye : " + bakiye +yeniSatir
        +"Eksik Tutar : " + (odenecekTutar - bakiye));
    }
}else if(yakitTipi == "3"){
    //LPG
    let odenecekTutar = lpg * yakitLitresi;
    if(odenecekTutar < bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı" +yeniSatir
        +"Kalan Bakiye : " +(bakiye));
    }
    else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değil!" +yeniSatir
        + "Ödenecek Tutar : " + odenecekTutar + yeniSatir
        + "Bakiye : " + bakiye +yeniSatir
        +"Eksik Tutar : " + (odenecekTutar - bakiye));
    }
}
}else{
    alert("Lütfen geçerli bir yakıt türü seçinizi!");
}
