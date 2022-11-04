## Documentação da API

<details>
  <summary>
    <h3>Users</h3>
    <hr/>
  </summary>

  <h4>Faz login:</h4>

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
      Exemplo de resposta
    </summary>

<pre><code>{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJDbGllbnRlIFrDqSBCaXJpdGEiLCJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY2Njk2NjU3MSwiZXhwIjoxNjY3NTcxMzcxfQ.qDmsVguihxbfs1XPUedSC8beMMZfmxSvm91eOStZrFs",
  "id": 3,
  "name": "Cliente Zé Birita",
  "email": "zebirita@email.com",
  "role": "customer"
}</pre></code>

  </details>
  <hr/><br/>
  <h4>Trás todos os usuários:</h4>

  ```http
    GET /user/get-all
  ```

  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `none` | Não é necessário autenticação com o token |

  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>[
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
]</pre></code>

  </details>
  <hr/><br/>
  <h4>Cria um usuário:</h4>

  ```http
    POST /register
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `none` | Não é necessário autenticação com o token |

  ##### Exemplo de JSON Body request:
  ```
  {
    "name": "Marcilio da Silva Sauro",
    "email": "marcilio3@marcilio2.com",
    "password": "123456"
  }
  ```
  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>{
	"role": "customer",
	"id": 4,
	"name": "Marcilio da Silva Sauro",
	"email": "marcilio3@marcilio2.com"
}</pre></code>

  </details>
  <hr/><br/>
    <h4>Deleta um usuário:</h4>

  ```http
    DELETE /user/delete/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `none` | Não é necessário autenticação com o token |
  | `id` | `string` | **Obrigatório.** O `id` do usuário a ser deletado |

  ##### Exemplo de JSON Body request:
  ```
  {
    "name": "Marcilio da Silva Sauro",
    "email": "marcilio3@marcilio2.com",
    "password": "123456"
  }
  ```
  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>{
	"role": "customer",
	"id": 4,
	"name": "Marcilio da Silva Sauro",
	"email": "marcilio3@marcilio2.com"
}</pre></code>

  </details>
  <hr/><br/>
      <h4>O administrador cria um usuário com as roles "seller" ou "customer":</h4>

  ```http
    POST /admin/register
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | **Obrigatório.** Token gerado ao fazer login |

  ```
  {
    "name": "João da Silva Sauro",
    "email": "joaodasilva@sauro.com",
    "password": "123456",
    "role": "seller"
  }
  ```
  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>{
	"id": 4,
	"name": "João da Silva Sauro",
	"email": "joaodasilva@sauro.com",
	"role": "seller"
}</pre></code>

  </details>
  <hr/><br/>
  <h4>O administrador deleta um usuário:</h4>
  
   ```http
    DELETE /admin/delete/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | **Obrigatório.** Token gerado ao fazer login |
  | `id` | `string` | **Obrigatório.** O `id` do usuário a ser deletado |
</details>

<details>
  <summary>
    <h3>Products</h3>
    <hr/>
  </summary>

  <h4>Trás todos os produtos:</h4>

  ```http
    GET /customer/products
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `none` | Não é necessário autenticação com o token |


  <details>
    <summary>
      Exemplo de resposta
    </summary>

  <pre><code>[
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
      "id": 2,
      "name": "Heineken 600ml",
      "price": "7.50",
      "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
    },
    {
      "id": 3,
      "name": "Antarctica Pilsen 300ml",
      "price": "2.49",
      "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
    },
    {
      "id": 4,
      "name": "Brahma 600ml",
      "price": "7.50",
      "urlImage": "http://localhost:3001/images/brahma_600ml.jpg"
    },
    {
      "id": 5,
      "name": "Skol 269ml",
      "price": "2.19",
      "urlImage": "http://localhost:3001/images/skol_269ml.jpg"
    },
    {
      "id": 6,
      "name": "Skol Beats Senses 313ml",
      "price": "4.49",
      "urlImage": "http://localhost:3001/images/skol_beats_senses_313ml.jpg"
    },
    {
      "id": 7,
      "name": "Becks 330ml",
      "price": "4.99",
      "urlImage": "http://localhost:3001/images/becks_330ml.jpg"
    },
    {
      "id": 8,
      "name": "Brahma Duplo Malte 350ml",
      "price": "2.79",
      "urlImage": "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg"
    },
    {
      "id": 9,
      "name": "Becks 600ml",
      "price": "8.89",
      "urlImage": "http://localhost:3001/images/becks_600ml.jpg"
    },
    {
      "id": 10,
      "name": "Skol Beats Senses 269ml",
      "price": "3.57",
      "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
    },
    {
      "id": 11,
      "name": "Stella Artois 275ml",
      "price": "3.49",
      "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
    }
  ]</pre></code>

  </details>
  <hr/><br/>

  <h4>Trás um protudo:</h4>

  ```http
    GET /customer/products/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `none` | Não é necessário autenticação com o token |
  | `id` | `string` | **Obrigatório.** O `id` do produto a ser trazido |


  <details>
    <summary>
      Exemplo de resposta
    </summary>

  <pre><code>{
    "id": 1,
    "name": "Skol Lata 250ml",
    "price": "2.20",
    "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
  }</pre></code>

  </details>
  <hr/><br/>
</details>

<details>
  <summary>
    <h3>Sale</h3>
    <hr/>
  </summary>

  <h4>Cria uma venda:</h4>

  ```http
    POST /customer/checkout
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | **Obrigatório.** Token gerado ao fazer login |
  
  ##### Exemplo de JSON Body request:
  ```
  {
    "userId": 3,
    "sellerId": 2,
    "totalPrice": 100,
    "deliveryAddress": "address",
    "deliveryNumber": "7",
    "products": [
      { "productId": 8, "quantity": 1 },
      { "productId": 3, "quantity": 10  },
      { "productId": 7, "quantity": 12  }
    ]
  }
  ```

  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>{
  "status": "Pendente",
  "id": 6,
  "userId": 3,
  "sellerId": 2,
  "totalPrice": 100,
  "deliveryAddress": "address",
  "deliveryNumber": "7",
  "saleDate": "2022-09-30T00:43:24.473Z",
  "products": [
    {
      "quantity": 1,
      "saleId": 6,
      "name": "Brahma Duplo Malte 350ml",
      "price": "2.79"
    },
    {
      "quantity": 10,
      "saleId": 6,
      "name": "Antarctica Pilsen 300ml",
      "price": "2.49"
    },
    {
      "quantity": 12,
      "saleId": 6,
      "name": "Becks 330ml",
      "price": "4.99"
    }
  ]
}</pre></code>

  </details>
  <hr/><br/>
  
  <h4>Trás todas as vendas do vendedor:</h4>

  ```http
    GET /seller/orders/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | Não é necessário autenticação com o token |
  | `id` | `string` | **Obrigatório.** O `id` do vendedor |
  

  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>[
	{
		"id": 1,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-10-28T21:25:27.000Z",
		"status": "Pendente"
	}
]</pre></code>

  </details>
  <hr/><br/>
  <h4>Trás todas as compras de um usuário:</h4>

  ```http
    GET /customer/orders/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | Não é necessário autenticação com o token |
  | `id` | `string` | **Obrigatório.** O `id` do usuário |
  

  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>[
	{
		"id": 1,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-10-28T21:25:27.000Z",
		"status": "Pendente"
	}
]</pre></code>

  </details>
  <hr/>
  
  <h4>Trás uma venda com os produtos vendidos:</h4>

  ```http
    GET /orders/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | Não é necessário autenticação com o token |
  | `id` | `string` | **Obrigatório.** O `id` da venda |
  

  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>{
	"id": 1,
	"userId": 3,
	"sellerId": 2,
	"totalPrice": "100.00",
	"deliveryAddress": "address",
	"deliveryNumber": "7",
	"saleDate": "2022-10-28T21:25:27.000Z",
	"status": "Pendente",
	"products": [
		{
			"id": 8,
			"name": "Brahma Duplo Malte 350ml",
			"price": "2.79",
			"quantity": 1
		},
		{
			"id": 3,
			"name": "Antarctica Pilsen 300ml",
			"price": "2.49",
			"quantity": 10
		},
		{
			"id": 7,
			"name": "Becks 330ml",
			"price": "4.99",
			"quantity": 12
		}
	]
}</pre></code>

  </details>
  <hr/><br/>
  
  <h4>Trás todas as vendas com os produdos:</h4>

  ```http
    GET /orders
  ```
  | Parâmetro   | Tipo       | Descrição                           |
  | :---------- | :--------- | :---------------------------------- |
  | `Auth` | `string` | Não é necessário autenticação com o token |
  

  <details>
    <summary>
      Exemplo de resposta
    </summary>

<pre><code>[
	{
		"id": 1,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-09-29T21:04:30.000Z",
		"status": "Pendente",
		"products": [
			{
				"id": 8,
				"name": "Brahma Duplo Malte 350ml",
				"price": "2.79",
				"quantity": 1
			},
			{
				"id": 3,
				"name": "Antarctica Pilsen 300ml",
				"price": "2.49",
				"quantity": 10
			},
			{
				"id": 7,
				"name": "Becks 330ml",
				"price": "4.99",
				"quantity": 12
			}
		]
	},
	{
		"id": 2,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-09-29T21:04:31.000Z",
		"status": "Pendente",
		"products": [
			{
				"id": 8,
				"name": "Brahma Duplo Malte 350ml",
				"price": "2.79",
				"quantity": 1
			},
			{
				"id": 3,
				"name": "Antarctica Pilsen 300ml",
				"price": "2.49",
				"quantity": 10
			},
			{
				"id": 7,
				"name": "Becks 330ml",
				"price": "4.99",
				"quantity": 12
			}
		]
	},
	{
		"id": 3,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-09-29T21:04:31.000Z",
		"status": "Pendente",
		"products": [
			{
				"id": 8,
				"name": "Brahma Duplo Malte 350ml",
				"price": "2.79",
				"quantity": 1
			},
			{
				"id": 3,
				"name": "Antarctica Pilsen 300ml",
				"price": "2.49",
				"quantity": 10
			},
			{
				"id": 7,
				"name": "Becks 330ml",
				"price": "4.99",
				"quantity": 12
			}
		]
	},
	{
		"id": 4,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-09-29T21:04:32.000Z",
		"status": "Pendente",
		"products": [
			{
				"id": 8,
				"name": "Brahma Duplo Malte 350ml",
				"price": "2.79",
				"quantity": 1
			},
			{
				"id": 3,
				"name": "Antarctica Pilsen 300ml",
				"price": "2.49",
				"quantity": 10
			},
			{
				"id": 7,
				"name": "Becks 330ml",
				"price": "4.99",
				"quantity": 12
			}
		]
	},
	{
		"id": 5,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-09-30T00:43:12.000Z",
		"status": "Pendente",
		"products": [
			{
				"id": 8,
				"name": "Brahma Duplo Malte 350ml",
				"price": "2.79",
				"quantity": 1
			},
			{
				"id": 3,
				"name": "Antarctica Pilsen 300ml",
				"price": "2.49",
				"quantity": 10
			},
			{
				"id": 7,
				"name": "Becks 330ml",
				"price": "4.99",
				"quantity": 12
			}
		]
	},
	{
		"id": 6,
		"userId": 3,
		"sellerId": 2,
		"totalPrice": "100.00",
		"deliveryAddress": "address",
		"deliveryNumber": "7",
		"saleDate": "2022-09-30T00:43:24.000Z",
		"status": "Pendente",
		"products": [
			{
				"id": 8,
				"name": "Brahma Duplo Malte 350ml",
				"price": "2.79",
				"quantity": 1
			},
			{
				"id": 3,
				"name": "Antarctica Pilsen 300ml",
				"price": "2.49",
				"quantity": 10
			},
			{
				"id": 7,
				"name": "Becks 330ml",
				"price": "4.99",
				"quantity": 12
			}
		]
	}
]</pre></code>

  </details>
  <hr/><br/>
</details>
