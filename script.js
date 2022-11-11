function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')


    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', './imagens/foto-crianca-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }

        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', './imagens/foto-crianca-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
