# The Quotes API
The Quotes API provides developers with a database of inspiring quotes that can be easily integrated into applications and websites.  
It's made in [NodeJS](https://nodejs.org) and [Express](https://expressjs.com/), using [Treblle](https://treblle.com) for API metrics.

## API Reference
Main Route: https://thequotesapi.onrender.com
#### Get all quotes
Fetches all the quotes

```http
GET /quotes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Get a random quote
Fetches a random quote

```http
GET /quotes/random
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Get a single quote
It fetches a single quote, depending on the id passed

```http
GET /quotes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id or UUID of quote to fetch |

#### Search for a text in multiple quotes
It can search for a specific query across multiple quotes

```http
GET /quotes/search?q=${q}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`       | `string` | **Required**. The text to be searched |

#### Get all authors
Fetches all the authors

```http
GET /authors
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Get a random author
Fetches a random author

```http
GET /authors/random
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Get a single author
It fetches a single author, depending on the id passed

```http
GET /authors/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id, UUID or the complete author name of author to fetch |

#### Search for a text in multiple authors
It can search for a specific query across multiple authors

```http
GET /authors/search?q=${q}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`       | `string` | **Required**. The text to be searched |