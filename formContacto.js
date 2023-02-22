document.getElementById("botonEnviar").addEventListener("click", function (evento) 
{
    const destinatario = "iamjoni34@gmail.com";

    const mensajeIngresado = document.getElementById("mensaje").value;
    const asuntoIngresado = document.getElementById("asunto").value;
    
    evento.preventDefault();

    if (mensajeIngresado != '' && asuntoIngresado != '')
    {
        document.getElementById("saludo-mensaje-error").style.display = "none";
        window.location.href = 'mailto:' + destinatario + '?subject=' + asuntoIngresado + '&body=' + mensajeIngresado;
        document.getElementById("saludo-mensaje-exitoso").style.display = "block";
    }
    else
    {
        document.getElementById("saludo-mensaje-error").style.display = "block";
    }
})