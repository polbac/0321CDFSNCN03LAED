# Challenge 2 : JSON + Argumentos + Notas

Un cliente nos contrató para desarrollar una aplicación en un har que le permita almacenar tareas y listarlas. La misma nos pidieron que se ejecuten a traves de un `cli` ya que la usarán luego para conectarse con un hardware externo.


La misma debe poseer

```
// muestra en pantalla el listado de las tareas y su estado

node app --comando "listar"
```

```
// muestra en pantalla el listado de las tareas y su estado (pendiente, finalizado, en marcha)

node app --comando "crear" --tarea "Texto de la tarea" --estado "pendiente"
```

Para esto podes ayudarte instalando la librería 
https://www.npmjs.com/package/yargs

Y si querés podes agregarle colores con 
https://www.npmjs.com/package/chalk