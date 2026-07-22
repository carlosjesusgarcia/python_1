# Clase 3: Tipos, variables, expresiones y asignaciones

En esta clase aprenderemos a representar datos mediante distintos tipos, guardarlos en variables y construir expresiones sencillas en Python.

## Tipos de datos básicos

Los programas trabajan con datos. Cada dato tiene un **tipo**, que determina qué clase de información representa y qué operaciones pueden realizarse con él.

En Python utilizaremos inicialmente cuatro tipos básicos:

| Tipo | Nombre en Python | Ejemplo | Representa |
|---|---|---|---|
| Número entero | `int` | `20` | Números sin decimales |
| Número decimal | `float` | `19.5` | Números con decimales |
| Cadena de caracteres | `str` | `"Python"` | Texto |
| Booleano | `bool` | `True` | Verdadero o falso |

Ejemplos:

```python
edad = 20
precio = 18500.50
materia = "Taller de Programación I"
esta_presente = True
```

Python reconoce automáticamente el tipo del valor asignado a cada variable.

## Números enteros

El tipo `int` se utiliza para representar números enteros, es decir, números sin parte decimal:

```python
cantidad_estudiantes = 35
anio_actual = 2026
temperatura = -2
```

Pueden ser positivos, negativos o cero.

## Números decimales

El tipo `float` representa números con parte decimal:

```python
precio_cafe = 3500.50
altura = 1.75
promedio = 8.25
```

En Python, la parte decimal se separa mediante un punto, no mediante una coma:

```python
precio = 1250.75
```

Este ejemplo es incorrecto:

```python
precio = 1250,75
```

## Cadenas de caracteres

Una cadena de caracteres o *string* es un dato utilizado para representar texto. Su tipo en Python es `str`.

Debe escribirse entre comillas dobles o simples:

```python
universidad = "UADE"
barrio = 'Recoleta'
serie_favorita = "Los simuladores"
```

Ambos tipos de comillas son válidos. Lo importante es abrir y cerrar la cadena con el mismo tipo de comilla:

```python
materia = "Programación"
```

El siguiente ejemplo es incorrecto porque comienza con comillas dobles y termina con comillas simples:

```python
materia = "Programación'
```

Aunque una cadena contenga números, continúa siendo texto:

```python
codigo_postal = "1067"
telefono = "1123456789"
```

## Valores booleanos

El tipo `bool` solamente puede contener dos valores:

```python
True
False
```

Estos valores representan verdadero y falso.

```python
curso_iniciado = True
examen_aprobado = False
```

`True` y `False` deben comenzar con mayúscula y no deben escribirse entre comillas.

```python
esta_presente = True
```

Si escribimos `"True"` entre comillas, Python lo interpreta como una cadena de texto y no como un valor booleano.

## ¿Qué es una variable?

Una variable es un nombre que utilizamos para guardar un dato y poder consultarlo o modificarlo más adelante.

Podemos imaginarla como una etiqueta asociada a un valor. Por ejemplo, un programa para organizar los gastos de una salida podría guardar el precio de una entrada, la cantidad de personas y el lugar elegido:

```python
precio_entrada = 12000
cantidad_personas = 4
lugar = "Palermo"
```

Cada variable guarda un dato diferente:

- `precio_entrada` contiene el número entero `12000`.
- `cantidad_personas` contiene el número entero `4`.
- `lugar` contiene la cadena de texto `"Palermo"`.

## ¿Cómo se crea una variable?

Para crear una variable, se escribe su nombre, el operador de asignación (`=`) y el valor que se desea guardar:

```python
nombre_estudiante = "Martina"
edad = 20
```

El signo `=` no significa «es igual a» como en Matemática. En programación significa **asignar**: el valor de la derecha se guarda en la variable de la izquierda.

```python
saldo_subte = 15000
```

Esta instrucción puede leerse así:

> Guardar el valor `15000` en la variable `saldo_subte`.

Python no exige palabras especiales como `let` o `const`, utilizadas en JavaScript, ni que se indique previamente el tipo de dato.

## Consultar el tipo de un dato

La función `type()` permite consultar el tipo de un valor o de una variable:

```python
edad = 20
precio = 18500.50
nombre = "Martina"
esta_presente = True

print(type(edad))
print(type(precio))
print(type(nombre))
print(type(esta_presente))
```

El resultado será:

```text
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

## Mostrar el valor de una variable

La función `print()` permite mostrar información en pantalla:

```python
nombre = "Martina"
edad = 20

print(nombre)
print(edad)
```

También puede mostrar texto escrito directamente:

```python
print("Hola, mundo")
```

Si escribimos un texto sin comillas, Python intentará interpretarlo como el nombre de una variable.

## Las variables pueden cambiar

El valor almacenado en una variable puede reemplazarse durante la ejecución del programa:

```python
saldo_billetera = 25000
saldo_billetera = 18000
```

Después de ejecutar ambas instrucciones, `saldo_billetera` contiene `18000`. El valor anterior fue reemplazado.

También podemos utilizar el valor actual de una variable para obtener uno nuevo:

```python
cantidad_estudiantes = 30
cantidad_estudiantes = cantidad_estudiantes + 2
```

Después de ejecutar el código, `cantidad_estudiantes` contiene `32`.

Python primero evalúa la expresión situada a la derecha y después asigna el resultado a la variable de la izquierda.

## Expresiones

Una expresión es una combinación de valores, variables y operadores que Python puede evaluar para producir un resultado.

Ejemplo:

```python
precio_cena = 32000
cantidad_personas = 4
precio_por_persona = precio_cena / cantidad_personas
```

La expresión:

```python
precio_cena / cantidad_personas
```

produce el resultado `8000.0`. Ese resultado se asigna a la variable `precio_por_persona`.

Otro ejemplo:

```python
nota_primer_parcial = 8
nota_segundo_parcial = 6
promedio = (nota_primer_parcial + nota_segundo_parcial) / 2
```

La variable `promedio` guardará el valor `7.0`.

Las operaciones con números y cadenas de texto se estudiarán con mayor profundidad en la clase 4.

## Asignación de diferentes tipos

Una variable puede recibir valores de diferentes tipos durante la ejecución:

```python
dato = 25
dato = "veinticinco"
```

Después de la segunda asignación, `dato` contiene una cadena de texto.

Python permite este cambio, pero no siempre es conveniente. En general, una variable debería conservar el mismo propósito para que el programa sea fácil de comprender.

## Reglas para nombrar variables

Python establece reglas obligatorias para los nombres de las variables:

1. Deben comenzar con una letra o un guion bajo (`_`), nunca con un número.
2. Solo pueden contener letras, números y guiones bajos (`_`).
3. No pueden contener espacios, guiones medios (`-`) ni otros símbolos.
4. Python distingue entre mayúsculas y minúsculas. Por lo tanto, `precio`, `Precio` y `PRECIO` son tres variables diferentes.
5. No pueden utilizar palabras reservadas de Python, como `if`, `class` o `def`.

### Ejemplos válidos

```python
nombre_usuario = "Sofía"
comision_2 = "Noche"
precio_total = 45000
_dato_temporal = 10
```

### Ejemplos inválidos

```python
2_comision = "Noche"       # Comienza con un número.
precio entrada = 12000      # Contiene un espacio.
precio-final = 25000        # Contiene un guion medio.
class = "Python"            # Utiliza una palabra reservada.
```

Si se incumple alguna de estas reglas, Python puede producir un `SyntaxError`:

```python
2do_parcial = 8
```

```text
SyntaxError: invalid syntax
```

## Convenciones de nomenclatura

Las convenciones no son obligaciones del lenguaje. El programa puede funcionar aunque no se respeten.

Sin embargo, seguirlas hace que el código sea más fácil de leer, corregir y compartir.

### Utilizar *snake case*

En Python, los nombres de variables se escriben normalmente en minúsculas y las palabras se separan con guiones bajos. Este estilo se denomina *snake case*:

```python
precio_abono_mensual = 18000
nombre_materia = "Programación I"
fecha_primer_parcial = "15 de septiembre"
```

Estas formas no siguen la convención habitual de Python:

```python
precioAbonoMensual = 18000
PrecioAbonoMensual = 18000
PRECIOABONOMENSUAL = 18000
```

### Elegir nombres descriptivos

El nombre debe permitir entender qué representa el dato sin tener que investigar el resto del programa:

```python
p = 18500
```

`p` podría significar precio, personas, puntos o cualquier otra cosa. Una alternativa más clara sería:

```python
precio_hamburguesa = 18500
```

En un sistema universitario, `nota_primer_parcial` resulta más informativo que `nota`, y mucho más que `n`:

```python
nota_primer_parcial = 8
```

### Evitar abreviaturas confusas

Una abreviatura solo es útil si cualquier persona puede interpretarla fácilmente:

```python
cant_est = 35
```

Una opción más clara es:

```python
cantidad_estudiantes = 35
```

### Evitar nombres de una sola letra

Se recomienda evitar nombres de una sola letra cuando no expresan el propósito de la variable:

```python
x = 56
```

Una versión más clara podría ser:

```python
minutos_de_viaje = 56
```

Existen situaciones específicas en las que se utilizan nombres cortos por convención, pero al comenzar es preferible usar nombres descriptivos.

## Comentarios en Python

Los comentarios comienzan con el símbolo `#`. Python ignora todo lo que aparece después de este símbolo en esa línea:

```python
# Calculamos cuánto debe pagar cada persona.
precio_total = 48000
cantidad_personas = 4
precio_por_persona = precio_total / cantidad_personas
```

Un comentario de varias líneas puede escribirse mediante varios comentarios consecutivos:

```python
# Este programa calcula el presupuesto
# necesario para una salida grupal
# durante el fin de semana.
```

Los comentarios sirven para explicar una decisión, aclarar una parte compleja o dejar un recordatorio. No deben utilizarse para compensar nombres poco claros.

```python
# Precio del plan mensual del gimnasio.
x = 30000
```

Es preferible escribir directamente:

```python
precio_mensual_gimnasio = 30000
```

## Actividad 1: reconocer tipos de datos

Indicá qué tipo de dato tiene cada valor: `int`, `float`, `str` o `bool`.

```python
25
"25"
19.5
True
"Buenos Aires"
False
0
```

## Actividad 2: crear variables

Creá una variable apropiada para guardar cada dato:

1. Tu nombre.
2. Tu edad.
3. El precio de un almuerzo.
4. La cantidad de materias que cursás.
5. Si tenés computadora personal.
6. El nombre de tu carrera.

Después, mostrá todas las variables mediante `print()`.

## Actividad 3: mejorar nombres

Reescribí las siguientes variables utilizando nombres descriptivos y *snake case*. Puede haber más de una respuesta correcta.

```python
p = 15000
cant = 3
NombreUsuario = "Tomás"
totalCompra = 45000
```

Los datos representan:

- El precio de una entrada de cine.
- La cantidad de entradas.
- El nombre de la persona que realizó la compra.
- El importe total de la compra.

## Actividad 4: expresiones y asignaciones

Observá el siguiente programa:

```python
precio_entrada = 12000
cantidad_entradas = 3
precio_total = precio_entrada * cantidad_entradas
```

Respondé:

1. ¿Qué valores se asignan inicialmente?
2. ¿Cuál es la expresión que realiza el cálculo?
3. ¿Qué valor recibe `precio_total`?
4. ¿Qué tipo de dato contiene cada variable?

## Actividad 5: seguir los cambios

Sin ejecutar el código, indicá qué valor tendrá cada variable al finalizar:

```python
cantidad = 10
cantidad = cantidad + 5
cantidad = cantidad - 2
```

Después, ejecutá el código para comprobar tu respuesta.

## Actividad 6: corregir errores

Corregí los nombres o valores inválidos:

```python
1er_estudiante = "Lucía"
precio entrada = 9500
comision-noche = True
class = "Python"
altura = 1,75
materia = "Programación'
```

## Preguntas de opción múltiple

### 1. ¿Cuál es la forma correcta de guardar la edad de un estudiante?

- [ ] `let edad_estudiante = 20`
- [ ] `const edad_estudiante = 20`
- [ ] `var edad_estudiante = 20`
- [ ] `edad_estudiante = 20`

### 2. ¿Qué tipo de dato tiene el valor `20`?

- [ ] `str`
- [ ] `float`
- [ ] `int`
- [ ] `bool`

### 3. ¿Qué tipo de dato tiene el valor `"20"`?

- [ ] `str`
- [ ] `float`
- [ ] `int`
- [ ] `bool`

### 4. ¿Cuál de las siguientes afirmaciones no es una regla para nombrar variables?

- [ ] Los nombres deben comenzar con una letra o un guion bajo.
- [ ] Los nombres no distinguen entre mayúsculas y minúsculas.
- [ ] Los nombres no pueden ser palabras reservadas de Python.
- [ ] Los nombres pueden contener letras, números y guiones bajos.

### 5. ¿Cuál es el mejor nombre para guardar el precio mensual de una plataforma de streaming?

- [ ] `x`
- [ ] `pmp`
- [ ] `PrecioMensualStreaming`
- [ ] `precio_mensual_streaming`

### 6. ¿Cuál de los siguientes nombres produce un error de sintaxis?

- [ ] `nota_parcial_1`
- [ ] `1_nota_parcial`
- [ ] `nota_final`
- [ ] `_nota_temporal`

### 7. ¿Cuál es un valor booleano válido?

- [ ] `"True"`
- [ ] `true`
- [ ] `True`
- [ ] `"Verdadero"`

### 8. ¿Por qué se recomienda evitar nombres de una sola letra?

- [ ] Porque no comunican con claridad el propósito de la variable.
- [ ] Porque Python no permite nombres de una sola letra.
- [ ] Porque siempre producen errores de sintaxis.
- [ ] Porque utilizan más memoria que los nombres largos.

## Resumen

En esta clase aprendimos que:

- Los datos tienen diferentes tipos.
- `int` representa números enteros.
- `float` representa números decimales.
- `str` representa cadenas de texto.
- `bool` representa verdadero o falso.
- Una variable permite guardar un dato.
- El operador `=` asigna un valor.
- Una expresión produce un resultado.
- Los nombres deben respetar las reglas de Python.
- La convención habitual es utilizar nombres descriptivos en *snake case*.

---

[Anterior: Clase 2 - Programas, lenguajes de programación y algoritmos](../clase02/index.md)

La próxima clase estará dedicada a las operaciones con números y cadenas de texto.