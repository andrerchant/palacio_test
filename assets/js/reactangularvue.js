(function load_productos(){

  var picker= document.getElementById('productos_picker');

  for (var i = 0; i < productos.length; i++) {
    var cascaron=
    '<div class="box btn-h-plank">'+
    '<div class="custom-row head-product">'+
    '<figure class="photo">'+
    '<img src="assets/img/productos/'+productos[i].img+'.jpg" alt="'+productos[i].nombre+'. Revisar" width="92">'+
    '</figure>'+

    '<div class="description">'+
    '<strong>'+productos[i].fabricante+'</strong><br>'+
    '<h4>'+productos[i].nombre+'</h4><br>'+
    '<small class="codigo">'+productos[i].calmacen+'</small><br>'+
    '<br>'+
    '<small><b>Cant.</b></small><br>'+
    '<input id="f'+i+'" type="number" name="cantidad" value="1">'+
    '</div>'+
    '<div class="preciador">';

    if (productos[i].antes !== "") {
    cascaron +=  '<b class="antes">$ '+productos[i].antes[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'.'+productos[i].antes[1]+'</b>';
    }

    cascaron+= '<b>$ '+productos[i].precio[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'.'+productos[i].precio[1]+'</b>';

    if (productos[i].disponible) {
      cascaron += '<small class="disp">Sujeto a disponibilidad</small>';
    }

    cascaron += '</div>'+
    '</div>'+
    '<hr>'+
    '<div class="custom-row">'+
    '<figure class="icon-generic">'+
    '<img src="assets/img/subtotal_logo.jpg">'+
    '</figure>'+
    '<h4>Subtotal</h4>'+
    '<div id="p'+i+'" class="preciador sumador">'+
    '<b>$ '+productos[i].precio[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'.'+productos[i].precio[1]+'</b>'+
    '</div>'+
    '</div>'+
    '</div>';
    picker.insertAdjacentHTML( 'afterbegin', cascaron);
  }
})();

(function operacion(){
  var input = document.getElementsByTagName("input");
  for (var i = 0; i < input.length; i++) {
    var productoPrecio=productos[i].precio[0];
    input[i].addEventListener('input', function (evt) {
      var total = document.getElementById("total");
      var subtotal = document.getElementById("subtotal");
      var preciador = document.getElementById(this.id.replace("f","p"));
      result= "$ "+ (productoPrecio*this.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") + ".00";
      preciador.textContent = result;
      var precios = document.getElementsByClassName("sumador");
      var suma = Number(precios[0].textContent.replace("$","").replace(",","").replace(".",""))+Number(precios[1].textContent.replace("$","").replace(",","").replace(".",""))+Number(precios[2].textContent.replace("$","").replace(",","").replace(".",""));
      var stringing=suma.toString();
      var formatSuma= stringing.slice(0,(stringing.length-2)).replace(/\B(?=(\d{3})+(?!\d))/g,",");
      subtotal.textContent =  "$ "+ formatSuma + ".00";
      total.textContent = "$ "+ formatSuma + ".00";
      var preciador="";

    });
  }
})();
