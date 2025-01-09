const status = (request, response) => {
  response.status(200).json({ message: "Aula do dia 16 do curso.dev" });
};

export default status;
