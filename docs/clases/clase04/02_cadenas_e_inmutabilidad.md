# Clase 4: Cadenas de texto e inmutabilidad

## Objetivos de la clase

Al finalizar esta parte de la clase, se espera que puedas:

- reconocer una cadena de texto;
- crear cadenas con comillas simples, dobles y triples;
- incluir comillas dentro de una cadena;
- combinar y repetir cadenas;
- comprobar si un texto aparece dentro de otro;
- obtener la longitud de una cadena;
- acceder a caracteres mediante índices positivos y negativos;
- explicar por qué las cadenas son inmutables;
- diferenciar la modificación de un objeto de la reasignación de una variable.

## 1. ¿Qué es una cadena?

Una **cadena de texto** es una secuencia de caracteres. En Python, su tipo de dato es `str`, abreviatura de *string*.

Para crear una cadena, el texto se escribe entre comillas simples o dobles:

```python
nombre = "Tomás"
barrio = 'Palermo'
carrera = "Comunicación Digital"
```

Las comillas delimitan la cadena: indican dónde comienza y dónde termina.

Python trata las comillas simples y las comillas dobles de la misma manera. Las dos formas son válidas:

```python
universidad = 'UADE'
materia = "Taller de Programación I"
```

Es conveniente mantener un criterio uniforme dentro de cada programa. En estos apuntes utilizaremos principalmente comillas dobles.

### Las cadenas pueden contener distintos caracteres

Una cadena puede incluir:

- letras;
- espacios;
- números;
- signos de puntuación;
- símbolos.

```python
nombre_usuario = "tomas_20"
direccion = "Lima 775"
precio_mostrado = "$18.500"
mensaje = "¡Nos vemos a las 20:30!"
```

Aunque una cadena contenga números, sigue siendo texto:

```python
edad = 20
edad_como_texto = "20"

print(type(edad))            # <class 'int'>
print(type(edad_como_texto)) # <class 'str'>
```

`20` es un número entero. `"20"` es una cadena formada por dos caracteres.

## 2. Cadenas de varias líneas

Para escribir una cadena que ocupa varias líneas, se utilizan tres comillas dobles o tres comillas simples:

```python
descripcion = """Departamento de dos ambientes
en Palermo, cerca del subte
y con balcón."""

print(descripcion)
```

También es válido:

```python
mensaje = '''Hola:
La clase comienza a las 18:30.
Nos vemos en el aula.'''
```

Las comillas triples conservan los saltos de línea incluidos en el texto.

## 3. Comillas dentro de una cadena

Si una cadena contiene comillas, existen dos alternativas.

### Utilizar el otro tipo de comillas

Si el texto contiene una comilla simple, podemos delimitar la cadena con comillas dobles:

```python
mensaje = "Hoy vamos al café de Julián."
```

Este recurso resulta especialmente útil con palabras que contienen apóstrofos en otros idiomas:

```python
nombre_local = "John's Coffee"
```

Si el texto contiene comillas dobles, podemos delimitar la cadena con comillas simples:

```python
respuesta = 'Lucía dijo: "Llego después de la facultad".'
```

### Escapar las comillas

Otra posibilidad es colocar una barra invertida (`\`) antes de la comilla que forma parte del texto:

```python
nombre_local = 'John\'s Coffee'
respuesta = "Lucía dijo: \"Llego después de la facultad\"."
```

La barra invertida indica que esa comilla pertenece al contenido y no marca el final de la cadena.

## 4. Combinar cadenas

El operador `+` permite **concatenar**, es decir, unir cadenas:

```python
nombre = "Martín"
apellido = "Rodríguez"
nombre_completo = nombre + " " + apellido

print(nombre_completo)
```

Resultado:

```text
Martín Rodríguez
```

El espacio entre comillas también es una cadena. Sin ese espacio, el resultado sería `MartínRodríguez`.

Otro ejemplo:

```python
linea_subte = "Línea " + "D"
destino = "Voy hasta " + "Catedral"

print(linea_subte)
print(destino)
```

Solo se pueden concatenar directamente valores de tipo `str`:

```python
edad = 20
mensaje = "Tengo " + edad + " años"
```

Ese código produce un error porque intenta combinar una cadena con un número entero. Más adelante aprenderemos a convertir datos y a construir mensajes con distintos tipos de valores.

## 5. Repetir cadenas

El operador `*` permite repetir una cadena una cantidad determinada de veces:

```python
separador = "-" * 30
print(separador)
```

Resultado:

```text
------------------------------
```

También se puede repetir una palabra:

```python
recordatorio = "Python " * 3
print(recordatorio)
```

Resultado:

```text
Python Python Python 
```

El número indica cuántas veces se repite la cadena.

## 6. Comprobar si un texto aparece en una cadena

El operador `in` permite verificar si una cadena aparece dentro de otra. El resultado es un valor booleano: `True` o `False`.

```python
descripcion = "Departamento luminoso en Palermo"

print("Palermo" in descripcion)  # True
print("balcón" in descripcion)   # False
print("luz" in descripcion)      # False
print("a" in descripcion)        # True
```

Python busca una coincidencia exacta. Distingue entre mayúsculas y minúsculas:

```python
materia = "Programación"

print("Programación" in materia)  # True
print("programación" in materia)  # False
```

También importan los espacios y las tildes.

## 7. Longitud de una cadena

La función incorporada `len()` devuelve la cantidad de caracteres de una cadena:

```python
barrio = "Belgrano"
print(len(barrio))  # 8
```

Los espacios y los signos también cuentan como caracteres:

```python
mensaje = "Hola, Tomás"
print(len(mensaje))  # 11
```

En `"Hola, Tomás"` se cuentan las letras, la coma y el espacio.

Una cadena vacía no contiene caracteres:

```python
texto = ""
print(len(texto))  # 0
```

## 8. Índices

Cada carácter de una cadena ocupa una posición llamada **índice**.

En Python, el primer índice es `0`, no `1`:

| Carácter | P | y | t | h | o | n |
|---|---:|---:|---:|---:|---:|---:|
| Índice | 0 | 1 | 2 | 3 | 4 | 5 |

Para acceder a un carácter, se escribe el nombre de la variable seguido del índice entre corchetes:

```python
lenguaje = "Python"

print(lenguaje[0])  # P
print(lenguaje[1])  # y
print(lenguaje[5])  # n
```

### Error por índice inexistente

La cadena `"Python"` tiene seis caracteres, pero sus índices van de `0` a `5`.

```python
lenguaje = "Python"
print(lenguaje[6])
```

Ese código produce un `IndexError` porque la posición `6` no existe.

## 9. Índices negativos

Python también permite contar desde el final de la cadena mediante índices negativos.

El índice `-1` corresponde al último carácter:

| Carácter | P | y | t | h | o | n |
|---|---:|---:|---:|---:|---:|---:|
| Índice positivo | 0 | 1 | 2 | 3 | 4 | 5 |
| Índice negativo | -6 | -5 | -4 | -3 | -2 | -1 |

```python
lenguaje = "Python"

print(lenguaje[-1])  # n
print(lenguaje[-2])  # o
print(lenguaje[-6])  # P
```

Los índices negativos son útiles cuando necesitamos acceder a los últimos caracteres sin calcular previamente la longitud de la cadena.

## 10. ¿Qué significa que una cadena sea inmutable?

En Python, todos los datos se representan mediante objetos. Algunos objetos son **mutables** y otros son **inmutables**.

Un objeto inmutable no puede modificarse después de haber sido creado.

Las cadenas son inmutables. Podemos consultar cualquiera de sus caracteres:

```python
saludo = "hola"
print(saludo[0])  # h
```

Sin embargo, no podemos reemplazar directamente uno de ellos:

```python
saludo = "hola"
saludo[0] = "H"
```

Python produce este error:

```text
TypeError: 'str' object does not support item assignment
```

El error indica que una cadena no permite asignar un nuevo valor a una posición individual.

### Reasignar no es modificar

Aunque la cadena sea inmutable, una variable puede recibir una nueva cadena:

```python
saludo = "hola"
saludo = "Hola"

print(saludo)  # Hola
```

En este caso no se modificó la cadena `"hola"`. La variable `saludo` fue **reasignada** y pasó a referirse a otra cadena: `"Hola"`.

La diferencia es importante:

- `saludo[0] = "H"` intenta modificar un carácter del objeto existente y produce un error.
- `saludo = "Hola"` asigna un nuevo objeto a la variable y es válido.

Otros tipos inmutables de Python son `int`, `float`, `bool`, `tuple` y `range`. Algunos de ellos se estudiarán más adelante.

## Actividad 1: reconocer cadenas

Indicá cuáles de los siguientes valores son cadenas:

```python
"20"
20
'Buenos Aires'
18.5
"18.5"
True
"True"
""
```

Para cada caso, explicá qué elemento permite reconocer el tipo de dato.

## Actividad 2: crear cadenas

Creá variables para guardar los siguientes datos:

1. Tu nombre y apellido.
2. El barrio en el que vivís.
3. La carrera que estudiás.
4. Una plataforma de streaming que utilices.
5. El nombre de un café o restaurante de CABA.

Mostrá cada variable mediante `print()`.

## Actividad 3: elegir las comillas

Corregí las cadenas para que sean válidas. Utilizá el tipo opuesto de comillas o caracteres de escape.

```python
mensaje_1 = 'Martín dijo: 'Nos vemos en Palermo'.'
mensaje_2 = "El local se llama "Café Central"."
mensaje_3 = 'I'm studying Python'
mensaje_4 = "La profesora preguntó: "¿Terminaron el ejercicio?""
```

## Actividad 4: combinar y repetir

Escribí un programa que:

1. Guarde un nombre y un apellido en variables separadas.
2. Los combine en una variable llamada `nombre_completo`.
3. Muestre una línea formada por cuarenta signos `=`.
4. Muestre el nombre completo.
5. Vuelva a mostrar la línea.

El resultado debe tener esta forma:

```text
========================================
Sofía Fernández
========================================
```

## Actividad 5: utilizar `in`

Observá el siguiente código y escribí el resultado de cada `print()` sin ejecutarlo:

```python
descripcion = "Café tranquilo con wifi en Recoleta"

print("wifi" in descripcion)
print("Palermo" in descripcion)
print("Café" in descripcion)
print("café" in descripcion)
print("Recoleta" in descripcion)
print("leta" in descripcion)
```

Después, ejecutá el programa para comprobar tus respuestas.

## Actividad 6: longitud e índices

Dada la siguiente cadena:

```python
transporte = "Subte"
```

Respondé:

1. ¿Cuántos caracteres contiene?
2. ¿Qué carácter se encuentra en el índice `0`?
3. ¿Qué carácter se encuentra en el índice `3`?
4. ¿Qué carácter se encuentra en el índice `-1`?
5. ¿Qué carácter se encuentra en el índice `-4`?
6. ¿Qué índices positivos existen en esta cadena?
7. ¿Qué ocurrirá si se intenta acceder a `transporte[5]`?

## Actividad 7: analizar la inmutabilidad

Observá los dos programas.

### Programa A

```python
barrio = "palermo"
barrio[0] = "P"
print(barrio)
```

### Programa B

```python
barrio = "palermo"
barrio = "Palermo"
print(barrio)
```

Respondé:

1. ¿Cuál de los dos programas produce un error?
2. ¿Qué intenta hacer el programa que falla?
3. ¿Qué hace la reasignación del Programa B?
4. ¿Por qué el Programa B no contradice la inmutabilidad de las cadenas?

## Actividad 8: programa integrador

Escribí un programa que guarde:

- el nombre de una película;
- el nombre del cine;
- el barrio;
- una fila representada por una letra;
- un número de asiento escrito como cadena.

Después:

1. Combiná la fila y el asiento en una sola cadena.
2. Creá un separador repitiendo un carácter.
3. Mostrá todos los datos.
4. Mostrá la cantidad de caracteres del nombre de la película.
5. Mostrá la primera y la última letra del barrio.
6. Comprobá mediante `in` si la palabra `"Cine"` aparece en el nombre del cine.

## Preguntas de opción múltiple

### 1. ¿Cuál de estos valores es una cadena?

- [ ] `20`
- [ ] `18.5`
- [ ] `"20"`
- [ ] `True`

### 2. ¿Cómo se define una cadena de varias líneas?

- [ ] Mediante paréntesis.
- [ ] Mediante corchetes.
- [ ] Mediante tres comillas simples o tres comillas dobles.
- [ ] Mediante el operador `*`.

### 3. ¿Qué resultado produce `len("Subte D")`?

- [ ] `6`
- [ ] `7`
- [ ] `8`
- [ ] Produce un error.

### 4. Si `texto = "Python"`, ¿qué expresión obtiene la letra `P`?

- [ ] `texto[1]`
- [ ] `texto[0]`
- [ ] `texto[-1]`
- [ ] `texto(0)`

### 5. Si `texto = "Python"`, ¿qué expresión obtiene la letra `n`?

- [ ] `texto[6]`
- [ ] `texto[-1]`
- [ ] `texto[-6]`
- [ ] `texto[0]`

### 6. ¿Qué devuelve `"subte" in "Viaje en subte"`?

- [ ] `True`
- [ ] `False`
- [ ] `"subte"`
- [ ] Produce un error.

### 7. ¿Qué hace el operador `+` cuando se aplica a dos cadenas?

- [ ] Las compara.
- [ ] Las concatena.
- [ ] Las convierte en números.
- [ ] Repite la primera cadena.

### 8. ¿Qué resultado produce `"BA" * 3`?

- [ ] `"BA3"`
- [ ] `"BABABA"`
- [ ] `6`
- [ ] Produce un error.

### 9. ¿Qué significa que una cadena sea inmutable?

- [ ] Que una variable nunca puede recibir otra cadena.
- [ ] Que sus caracteres no pueden modificarse directamente.
- [ ] Que no puede mostrarse mediante `print()`.
- [ ] Que solo puede contener letras.

### 10. ¿Cuál de estas instrucciones es válida?

- [ ] `nombre = "juan"; nombre[0] = "J"`
- [ ] `nombre = "juan"; nombre = "Juan"`
- [ ] `nombre = "juan"; nombre(0) = "J"`
- [ ] `nombre = "juan"; nombre[-1] = "n"`

## Síntesis

En esta parte de la clase aprendimos que:

- una cadena es una secuencia de caracteres de tipo `str`;
- las cadenas pueden delimitarse con comillas simples o dobles;
- las comillas triples permiten escribir cadenas de varias líneas;
- una barra invertida permite incluir ciertas comillas dentro del texto;
- `+` combina cadenas y `*` las repite;
- `in` comprueba si un texto aparece dentro de otro;
- `len()` devuelve la cantidad de caracteres;
- el primer carácter tiene índice `0`;
- los índices negativos permiten contar desde el final;
- las cadenas son inmutables;
- reasignar una variable no significa modificar el objeto original.

---

[Anterior: Clase 4 - Operaciones con números](01_operaciones_con_numeros.md)

[Siguiente: Clase 5 - Control de flujo](../clase05/index.md)
