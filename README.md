# Cadastro de carro

**Requesitos funcionais - RF**
*Deve ser possível cadastrar um novo carro.*



**Regra de negócio - RN**
*Não deve ser possível cadastrar um carro uma placa já existente.*
*Quando o carro for cadastrado como disponível por padrão (avaible = true).*
O usuário responsável pelo cadastro deve ser um usuário administrador.
O carro precisa ter um categoria atrelada e ele.
Deve ser possível listar todas as categorias.

# Listagem de carros

**RF**
Deve ser possível listar os carros disponiveis.
Deve ser possível listar todos os carros disponiveis pelo nome da categoria
Deve ser possível listar todos os carros disponiveis pelo nome da marca
Deve ser possível listar todos os carros disponiveis pelo nome do carro

**RN**
O usuário não precisa estar logado para listar os carros.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Dever ser possível cadastrar imagens para carros.
Dever ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario.
O usuário deve estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Recuperar Senha

**RF**
- Dever ser possível o usuário recuperar a senha informando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
- O usuário deve conseguir inserir uma nova senha.

**RN**
- O usuário precisa informar uma nova senha.
- O link enviado para a recuperação deve expirar em 3 horas.