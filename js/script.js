const btnOne = document.getElementById('firstAlert');
const btnSecond = document.getElementById('secondAlert');

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