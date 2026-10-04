import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  res.status(200).json({
    cahve:
      "Estudando API no Next onde vou fazer o envio do conteúdo no site da Mah",
  });
}

export default status;
