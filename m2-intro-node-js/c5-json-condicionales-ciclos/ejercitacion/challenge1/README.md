# Challenge 1 : Productos + Cálculos

En nuestro ecommerce, el equipo de DS necesita hacer unas predicciones para mejorar la forma de como presentaremos los productos en nuestro website, para eso necesita recolectar ciertos datos.

A nuestro Squad se la asignó un ticket que tiene el siguiente requerimiento:

- Todas las noches correrá un CRON que dejará un json (products.json) con los productos vendidos en ese día.
- Correrá un comando `npm run calculate-total`
- Ese comando deberá generar un archivo `totals.json` con la siguiente estructura:

````
{
    "total-items": 0,
    "total-price": 0,
    "average-price": 0,
    "max-price": 0,
    "min-price": 0
}
```