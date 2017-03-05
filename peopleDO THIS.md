# People End Point


## GET /people

//returns all the people

```json
[{
    name: 'thomas',
    createdAt: '1995-12-17T03:24:00' //look at Date
}]
```



## POST /people

//adds people the interal people array

```json
{
    name: '',
    createdAt: ''//date
}
```

## GET /people/[name]

//gets a particular person by name

```json
{
    name: '',
    createdAt: '1995-12-17T03:24:00' //look at Date
}
```