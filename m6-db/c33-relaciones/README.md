# C33 / Relaciones y CRUD

## Asociaciones en Modelos

### hasMany / belongsTo

```
Model1.belongsTo(Model2)
Model2.hasMany(Model1)
```

## Async / Await

```
async function getUsers() {
    const users = await db.User.findAll()
    return users
}
```



## Eagger Loading

## Lazy Loading