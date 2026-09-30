function status(req, res) {
  res
    .status(200)
    .send(
      "Estudando API no Next onde vou fazer o envio do conteúdo no site da Mah",
    );
}

export default status;
