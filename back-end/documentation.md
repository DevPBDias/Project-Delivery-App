## Documentação da API

### Users

#### Faz login

```http
  POST /login
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Auth` | `none` | Não é necessário autenticação com o token |

##### Exemplo de JSON Body request:
```
{
  "email": "zebirita@email.com",
  "password": "$#zebirita#$"
}
```
<details>
  <summary>
    ##### Exemplo de resposta
  </summary><br>
	```
	{
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJDbGllbnRlIFrDqSBCaXJpdGEiLCJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY2Njk2NjU3MSwiZXhwIjoxNjY3NTcxMzcxfQ.qDmsVguihxbfs1XPUedSC8beMMZfmxSvm91eOStZrFs",
		"id": 3,
		"name": "Cliente Zé Birita",
		"email": "zebirita@email.com",
		"role": "customer"
	}
	```
</details>

#### Retorna um item

```http
  GET /user/get-all
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Auth` | `none` | Não é necessário autenticação com o token |

<details>
  <summary>
    ##### Exemplo de resposta
  </summary><br>
	```
	[
		{
			"id": 1,
			"name": "Delivery App Admin",
			"email": "adm@deliveryapp.com",
			"password": "a4c86edecc5aee06eff8fdeda69e0d04",
			"role": "administrator"
		},
		{
			"id": 2,
			"name": "Fulana Pereira",
			"email": "fulana@deliveryapp.com",
			"password": "3c28d2b0881bf46457a853e0b07531c6",
			"role": "seller"
		},
		{
			"id": 3,
			"name": "Cliente Zé Birita",
			"email": "zebirita@email.com",
			"password": "1c37466c159755ce1fa181bd247cb925",
			"role": "customer"
		},
		{
			"id": 4,
			"name": "Marcilio da Silva Sauro",
			"email": "marcilio3@marcilio2.com",
			"password": "e10adc3949ba59abbe56e057f20f883e",
			"role": "customer"
		}
	]
	```
</details>