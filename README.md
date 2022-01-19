# Cowala Challenge

Este repostório contém os desafios feitos pela Cowala para a vaga de backend e cada uma está dividida em um pasta da seguinte forma:

`/algoritmos`

Nessa pasta se encontra os algoritmos pedidos para serem realizados por todos os candidatos de qualquer linha de desenvolvovimento.

`/market_items`

Nessa pasta se encontra a API da lista de mercado.

## Rotas

| Método | Rota             | Descrição                                                                            | Entrada esperada                    |
|:------:|:----------------:|:------------------------------------------------------------------------------------:|:-----------------------------------:|
| GET    | /market/items    | Retorna todos os items do mercado                                                    | None                                |
| GET    | /market/item/:id | Retorna um item do mercado pelo ID especificado                                      | VIa paramêtro                       |
| POST   | /market/items    | Cria um item de mercado atráves de formulário JSON                                   | Via JSON (vide [Exemplo](#Exemplo1) |
| PUT    | /market/item/:id | Atualiza um item de mercado com ID especificado, caso não ache retorna 409(CONFLICT) | Via paramêtro e JSON                |
| DELETE | /market/item/:id | Deleta um item de mercado com ID especificado, caso não ache retorna 409(CONFLICT)   | Via paramêtro                       |

## Exemplo<a name="Exemplo1"></a>

```json
{
    "id":1,
    "item": "arroz",
    "preco": 5.00
}
```

`/api_externa`

Nessa pasta se encontra a API que faz a conversão de moedas, através do consumo de uma API externa.

## Rotas

| Método | Rota | Descrição                                                    | Entrada esperada                     |
|:------:|:----:|:------------------------------------------------------------:|:------------------------------------:|
| GET    | /    | Lista todas as conversões de moedas realizadas               | None                                 |
| GET    | /:id | Retorna uma conversão de moeda realizada especificada por ID | via paramêtro                        |
| POST   | /    | Cria uma conversão de moedas via formulário JSON             | via JSON (vide [Exemplo](#Exemplo2)) |
| DELETE | /:id | Deleta uma conversão de moeda através de uma ID especificada | via paramêtro                        |

## Exemplo<a name="Exemplo2"></a>

```json
{
    "id": 1,
    "moedaOriginal": "BRL",
    "moedaDaConversao": "USD",
    "valorEnviado": 10
}
```
