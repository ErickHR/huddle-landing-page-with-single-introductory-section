
let mainButtonRegister = document.querySelector( '.main__button--register' )
let footerIcon = document.querySelector( '.footer__icon-social' )

mainButtonRegister.addEventListener( 'click', ( e ) => {
    console.log('entro')
    console.log(e)
    e.target.classList.toggle( 'active' )

} )
