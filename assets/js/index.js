const banner = document.querySelectorAll('.banner');
const body = document.querySelector('.body');

const listBanners = (item, index, array) => {
//pega a posição do array 
  const arrayId = array[index];
// pega largura do elemento da esquerda 
  const widthLeft = item.offsetLeft;
// aplica o evento para cada item do array
  item.addEventListener('mousemove', e => {
    //calculo pega o valor do mouse menos a media la lateral do elemento
    const width = `${(e.clientX - widthLeft)}px`
    // aplica css
    arrayId.children[0].style.width = width;
    arrayId.children[1].style.marginLeft = width;
  })
  body.addEventListener('mouseout', () => {
    // volta os valores original dos elementos 
    const tamanhoReal = '50%'
    arrayId.children[0].style.width = tamanhoReal;
    arrayId.children[1].style.marginLeft = tamanhoReal;
  })
}
banner.forEach(listBanners)


