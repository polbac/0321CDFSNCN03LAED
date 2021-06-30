# C29 - Consultas a la DB

<img width="200" src="https://media.giphy.com/media/3osxYc2axjCJNsCXyE/giphy.gif" />

## Anuncios

- Corrección Sprint 4 para el viernes

## INSERT

```
INSERT INTO table_name (col_name1,col_name2,col_nameN) values ('value1', 'value2', 'value3')
```
## UPDATE

```
UPDATE galaxies SET col_name1="val1", col_name2="val2" WHERE id={id}
```

## DELETE

```
DELETE FROM galaxies WHERE id={id}
```

## SELECT

```
SELECT field1, field2 from table_name;
```

## WHERE

```
SELECT fields from table_name WHERE;
```

### Operadores
```
=
>
>=
<
<=
<>
!=
IS NULL
BETWEEN
IN
LIKE

AND
OR
```

## BETWEEN

```
SELECT fields from table_name WHERE column BETWEEN VAL1 AND VAL2;
```

## LIKE

```
SELECT fields from table_name WHERE column like "search%";
SELECT fields from table_name WHERE column like "%search%";
SELECT fields from table_name WHERE column like "%search";

SELECT fields from table_name WHERE column like "%_CH";
```

## ORDER BY

```
SELECT fields from table_name ORDER BY column ASC|DESC
```

## ALIAS (table, column)

```
SELECT field1 as alias_column_1 from table_name as alias_table_1;
```

## LIMIT / OFFSET

```
SELECT * FROM table 
LIMIT limit
OFFSET offset

SELECT * FROM table 
LIMIT offset, limit

```

## CONCAT

```
SELECT CONCAT(field1, field2, n) as column_name;
```

## COALESCE

```
SELECT COALESCE(val1, val2, val3);
# Retornará el primer valor no nulo 
```

## DATEDIFF (número de días de diferencia)

```
SELECT DATEDIFF(date1, date2);
```

## EXTRACT (devuelve un tipo de dato de una fecha)

```
SELECT EXTRACT(SECOND FROM date1);
SELECT EXTRACT(MINUTE FROM date1);
SELECT EXTRACT(HOUR FROM date1);
SELECT EXTRACT(DAY FROM date1);
SELECT EXTRACT(WEEK FROM date1);
SELECT EXTRACT(QUARTER FROM date1);
SELECT EXTRACT(YEAR FROM date1);
```

## REPLACE

```
SELECT REPLACE(target, search, replace);
```

## DATE_FORMAT

```
SELECT DATE_FORMAT(data, format);
https://www.w3schools.com/sql/func_mysql_date_format.asp
```


## CASE

```
SELECT 
    CASE 
        WHEN condition1 THEN result1
        WHEN condition2 THEN result2
        ELSE result_default
    END as Alias
FROM table_name
```
