const btnOne = document.getElementById('firstAlert');
const btnSecond = document.getElementById('secondAlert');
const  btnThree = document.getElementById('troisiemeAlert');

btnOne.addEventListener('click', () => {
    Swal.fire('Bien jouée Mec !')
})

btnSecond.addEventListener('click', () => {
    Swal.fire(
        'Es tu sur?',
        'Cette chose est ronde?',
        'question'
      )
})

btnThree.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Quelque chose ne va pas !',
        footer: '<a href="">Why do I have this issue?</a>'
      })
})