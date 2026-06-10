/**
 * Descarga la tarjeta como PNG
 * @param {string} id
 */
function descargarImagen(id) {
  const carta = document.getElementById(id);
  let nombre_archivo = id + ".png";

  html2canvas(carta, { scale: 5, allowTaint: true, useCORS: true }).then(
    (canvas) => {
      let base64img = canvas.toDataURL("image/png");
      base64img.crossOrigin = "anonymous";
      let aux_hlink = document.createElement("a");
      aux_hlink.setAttribute("href", base64img);
      aux_hlink.setAttribute("download", nombre_archivo);
      aux_hlink.click();
      aux_hlink.remove();
    },
  );
}
