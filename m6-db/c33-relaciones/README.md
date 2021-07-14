# C33 / Relaciones y CRUD

<img src="https://i.imgur.com/A5dLn42.gif" width="350" />

## Avisos

- Disclaimer
- Próxima clase taller
- Colearning
- Juntada con grupos

## Async / Await

```
async function getUsers() {
    const users = await db.User.findAll()
    return users
}
```
## Asociaciones en Modelos
```
Model.associate = model => {
    // relaciones
}
```

### hasMany / belongsTo

```
Model1.belongsTo(Model2, {
    as: "alias",
    foreignKey: "foreignKey"
})
Model2.hasMany(Model1, {
    as: "alias",
    foreignKey: "foreignKey"
})
```

### belongsToMany / belongsToMany

```
Model1.belongsToMany(Model2, {
    as: "alias",
    through: "tabla_intermedia",
    foreignKey: "foreign_key_en_tabla_intermedia",
    otherKey: "otra_foreign_key_en_tabla_intermedia",
})

Model2.belongsToMany(Model1, {
    as: "alias",
    through: "tabla_intermedia",
    foreignKey: "foreign_key_en_tabla_intermedia",
    otherKey: "otra_foreign_key_en_tabla_intermedia",
})
```


## Eagger Loading
```
# Opción plana

Model.findOne({
    include: ['relation1']
})

# Opción compatible con más atributos

Model.findOne({
    include: [{
        association: 'relation1',
        where: {},
        attributes: {},
        // etc
    }]
})
```

## Magic Methods (Promises)

```
# PLANETA

# setear la galaxia del planeta
Planet.setGalaxy(ModeloGalaxy)

# setear los colores de un planeta (remplaza)
Planet.setColors([ModeloColor])


# GALAXIA

# agrega planeta
Galaxy.addPlanet(ModeloPlaneta)

# eliminar planeta
Galaxy.removePlanet(ModeloPlaneta)

# crea un planeta nuevo y lo asocia
Galaxy.createPlanet(ModeloPlaneta)

# agrega planetas
Galaxy.addPlanets([ModeloPlaneta])
Galaxy.removePlanets([ModeloPlaneta])
```

|Method            |Relationship |Parameter                                                   |Returns                                                            |Side effects / notes                                       |
|------------------|-------------|------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
|cat.addOwner()    |M:M          |owner {}, or ownerId                                        |created join table row                                             |                                                           |
|cat.addOwners()   |M:M          |array of owner {} or ownerId, can be a combination          |array of created join table rows                                   |                                                           |
|cat.countOwners() |M:M          |none                                                        |int                                                                |                                                           |
|cat.createOwner() |1:1, 1:M, M:M|new owner {} (what you could also pass into Owner.create() )|created owner object                                               |cat instance will have updated ownerId                     |
|cat.getOwner()    |1:1, 1:M     |none                                                        |owner object (if exists), or null                                  |                                                           |
|cat.getOwners()   |M:M          |none                                                        |array of owner object(s)                                           |                                                           |
|cat.hasOwner()    |M:M          |owner {}, or ownerId                                        |boolean                                                            |                                                           |
|cat.hasOwners()   |M:M          |array of owner {} or ownerId, can be a combination          |boolean                                                            |returns true only if ALL owners own this cat               |
|cat.removeOwner() |M:M          |owner {}, or ownerId                                        |int                                                                |number of owners removed                                   |
|cat.removeOwners()|M:M          |array of owner {} or ownerId, can be a combination          |int                                                                |number of owners removed                                   |
|cat.setOwner()    |1:1, 1:M     |owner {}, or ownerId                                        |cat object                                                         |with updated ownerId                                       |
|owner.addCat()    |1:M, M:M     |cat {}, or catId                                            |owner object if 1:M, created join table row if M:M                 |                                                           |
|owner.addCats()   |1:M, M:M     |array of cat {} or catId, can be a combination              |owner object if 1:M, array of created join table rows if M:M       |                                                           |
|owner.countCats() |1:M, M:M     |none                                                        |int                                                                |                                                           |
|owner.createCat() |1:1, 1:M, M:M|new cat {} (what you could also pass into Cat.create() )    |created cat {}                                                     |with associated ownerId                                    |
|owner.getCat()    |1:1          |none                                                        |cat object (if exists), or null                                    |                                                           |
|owner.getCats()   |1:M, M:M     |none                                                        |array of cat {}                                                    |                                                           |
|owner.hasCat()    |1:M, M:M     |cat {}, or catId                                            |boolean                                                            |                                                           |
|owner.hasCats()   |1:M, M:M     |array of cat {} or catId, can be a combination              |boolean                                                            |returns true only if ALL cats are owned                    |
|owner.removeCat() |1:M, M:M     |cat {}, or catId                                            |object 'cats' (referencing the table) if 1:M, # rows removed if M:M|                                                           |
|owner.removeCats()|1:M, M:M     |array of cat {} or catId, can be a combination              |object 'cats' (referencing the table) if 1:M,# rows removed if M:M |                                                           |
|owner.setCat()    |1:1          |cat {}, or catId                                            |cat object                                                         |with updated ownerId                                       |
|owner.setCats()   |1:M, M:M     |array of cat {} or catId, can be a combination              |owner {}                                                           |sets cats to input list, removing any other associated cats|
