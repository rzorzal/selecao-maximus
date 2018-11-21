# Máximus Soluções

# AINDA NÃO ESTAMOS ACEITANDO SUBMISSÕES

## Sobre a empresa

A Máximus Soluções é uma empresa nova, e é a primeira do seu ramo no mercado capixaba, sendo assim, por sermos pioneiros, estamos no meio de um processo de crescimento. Estamos iniciando o processo de montar uma equipe de Desenvolvimento. Buscamos pessoas para integrar nossa equipe de Desenvolvimento e que buscam, acima de tudo, aprender.

## Vaga

**[PRESENCIAL]** **[NÃO ACEITO REMOTO]** O profissional atuará principalmente com ***Desenvolvimento Back-end***. Utilizamos Node.js, Express, Sendgrid, Heroku, Postgres, PM2, Sequelize, MongoDB, Sentry, Git e etc. Mas buscamos pessoas que querem aprender. Nenhuma tecnologia é requisito, somente a vontade de aprender. Se você conhece alguma ferramenta que citamos na vaga, será um diferencial. Qualquer dúvida é só entrar em contato conosco!

## Processo de Seleção

Para participar da seleção é necessário que desenvolva uma pequena aplicação na linguagem que preferir. Porem deve seguir alguns requisitos.

1. Construir uma API em Rest com os seguintes endpoints:
  - **GET /clientes** //Irá retornar todos os clientes cadastrados no banco
  - **POST /clientes** //Irá criar um cliente com os dados de { nome: String, dataNascimento: Date, saldoDevedor: String (R$ -200.00 formato de exemplo) }
  - **PUT /clientes/:ClienteId** //Irá atualizar o cliente especificando o id dele
  - **DELETE /clientes/:ClienteId** //Irá remover o cliente do banco de dados
  - **GET /vendas/:ClienteId** //Vendas realizadas pelo cliente especificado - ordenados pela dataRealizacao
  - **POST /vendas/:ClienteId** //Criar venda e especificar o Cliente. Dados da venda {valor: String (R$ -200.00 formato de exemplo), dataRealizacao:Date, saldo: String(R$ -200.00 formato de exemplo)} Atualizar o saldoDevedor do cliente
2. Criar Modelo DER (Diagrama de Entidade e Relacionamento) do banco de dados SQL.
3. Criar Esquema do banco de dados (Se usar um ORM com Models será melhor avaliado)
4. **[NÃO OBRIGATÓRIO]** Criar uma página listando clientes e vendas
5. **[NÃO OBRIGATÓRIO]** Subir em algum servidor para testarmos o sistema
6. **[NÃO OBRIGATÓRIO]** Documentação e Teste Automáticos

## Entrega

Criar uma FORK deste Projeto, desenvolver o que foi solicitado e gerar um pull request.

## Prazo

Sem prazo definido. Mas O processo de seleço será realizado entre os meses de Janeiro/2019 e Fevereiro/2019. Qualquer informação deste processo de seleção pode ser alterado a qualquer momento.

## Como submeter

Basta fazer um fork e gerar um pull request depois de terminado. Ao final do processo entraremos em contato com você. Para de identificar, coloque as informaões de contato em um arquivo no root do projeto com o nome developer.json e informar nome, sobrenome, telefones de contato, github, linkedin e endereço. Todos obrigatórios.

## Contato

Nossa sede está em Canaã, Viana - ES. Pode entrar em contato criando issues neste repositório ou enviando e-mail para ricardozorzaldavila@gmail.com. Qualquer dúvida é só entrar em contato.
