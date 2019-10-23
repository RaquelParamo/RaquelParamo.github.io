document.querySelector('form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    const nombre = this.nombre.value.length
    if (validateName (this.nombre.value)){
        console.log(this.nombre.value,this.email.value, this.empresa.value);
    }
    console.log('datos inválidos')
    })
    function validateName(nombre){
        return nombre.length>4 ? true : false;
    }
