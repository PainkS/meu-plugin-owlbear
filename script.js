function digaOi() {
  // Envia uma mensagem de alerta para o Owlbear Rodeo
  window.parent.postMessage({
    pluginMessage: {
      type: "alert",
      message: "Oi do meu plugin personalizado!"
    }
  }, "*");
}