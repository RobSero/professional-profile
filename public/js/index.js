
$(function() {
  const col1 = document.getElementById('column1')
  const col2 = document.getElementById('column2')
  const col3 = document.getElementById('column3')
  const col4 = document.getElementById('column4')
  const columnFormatting = document.getElementsByClassName('columns')
  const backButton = document.getElementById('back-button')

  col1.addEventListener('mouseover', function () {
    col1.style.width = '30%'
    col2.style.width = '18%'
    col3.style.width = '24%'
    col4.style.width = '24%'
  })
  col2.addEventListener('mouseover', function () {
    col1.style.width = '21%'
    col2.style.width = '30%'
    col3.style.width = '21%'
    col4.style.width = '24%'
  })
  col3.addEventListener('mouseover', function () {
    col1.style.width = '24%'
    col2.style.width = '21%'
    col3.style.width = '30%'
    col4.style.width = '21%'
  })
  col4.addEventListener('mouseover', function () {
    col1.style.width = '24%'
    col2.style.width = '24%'
    col3.style.width = '18%'
    col4.style.width = '30%'
  })

  for (let i = 0; i < columnFormatting.length; i++) {
    columnFormatting[i].height = window.innerHeight
    columnFormatting[i].addEventListener('mouseleave', function () {
      this.style.filter = 'grayscale(100%)'
      this.getElementsByClassName('inner-text')[0].style.visibility = 'hidden'
      this.getElementsByTagName('h3')[0].removeAttribute('class')
      col1.style.width = '24%'
      col2.style.width = '24%'
      col3.style.width = '24%'
      col4.style.width = '24%'
    })

    columnFormatting[i].addEventListener('mouseover', function () {
      this.style.filter = 'grayscale(50%)'
      this.getElementsByClassName('inner-text')[0].style.visibility = 'visible'
      this.getElementsByTagName('h3')[0].setAttribute('class', 'highlighted')

    })
  }

  col1.addEventListener('click', function(){
    $('.pop-up').slideDown('slow')
  })

  backButton.addEventListener('click', function(){
    $('.pop-up').slideUp('slow')
  })

  $('.drop-down-btn').click(function(){
    $('.dropdown-social').slideDown('fast')
    $('.faded-view').show()
  })
  $('.faded-view').click(function(){
    $('.dropdown-social').slideUp('fast')
    $('.faded-view').hide()
  })
})

