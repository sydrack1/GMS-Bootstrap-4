

//var guia = document.getElementById('myTabContent')
var lista = 45;
var list = document.createElement('ul')
list.setAttribute('id', 'list-ul')
//var gsReference;
for (i = 1; i <= lista; i++) {
  if(i<10){
    var gsReference = `https://firebasestorage.googleapis.com/v0/b/gms-site.appspot.com/o/images%2Flista0${i}.jpg?alt=media`;
  }else{
    var gsReference = `https://firebasestorage.googleapis.com/v0/b/gms-site.appspot.com/o/images%2Flista${i}.jpg?alt=media`;
  }
    var foto = document.createElement('li')
    foto.setAttribute('class','list-photo')
  document.querySelector('.card').appendChild(list);
  list.appendChild(foto)

  foto.innerHTML = `
  <div class="row" id="margin-bt15">
    <!--COLUNA-->
    <div class="col-sm album">
 
        <div id="meu-btn">
          <button type="button" class="btn" data-toggle="modal" data-target="#modal${i}">
            <img data-toggle="modal" data-target="#modal${i}" data-keyboard="true" id="foto${i}" src="${gsReference}"
            class="img-thumbnail rounded-left fruta"alt="">
          </button>
        </div>
        <div class="modal fade bd-example-modal-lg" id="modal${i}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                         aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content  ">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
               </button>
              </div>              
             <img id="foto${i}" src="${gsReference}" class="img-thumbnail rounded-left" alt="">
            </div>
          </div>
        </div>
        </div>
        </div>`;
  //document.querySelector('.alEin').insertBefore(guia, null)

}