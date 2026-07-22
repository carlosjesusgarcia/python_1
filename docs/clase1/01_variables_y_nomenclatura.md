# Variables y convenciones de nomenclatura en Python

## ¿Qué es una variable?

Una variable es un nombre que utilizamos para guardar un dato y poder consultarlo o modificarlo más adelante.

Podemos imaginarla como una etiqueta asociada a un valor. Por ejemplo, un programa para organizar los gastos de una salida podría guardar el precio de una entrada, la cantidad de personas y el lugar elegido:

```python
precio_entrada = 12000
cantidad_personas = 4
lugar = "Palermo"
```

Cada variable guarda un dato diferente:

- `precio_entrada` contiene el número `12000`.
- `cantidad_personas` contiene el número `4`.
- `lugar` contiene el texto `"Palermo"`.

## ¿Cómo se declara una variable en Python?

Para crear una variable, se escribe su nombre, el operador de asignación (`=`) y el valor que se desea guardar:

```python
nombre_estudiante = "Martina"
edad = 20
```

El signo `=` no significa «es igual a» como en Matemática. En programación significa **asignar**: el valor de la derecha se guarda en la variable de la izquierda.

```python
saldo_subte = 15000
```

Esta instrucción puede leerse así: «guardar `15000` en la variable `saldo_subte`».

Python no exige palabras especiales como `let` o `const`, utilizadas en JavaScript, ni que se indique previamente el tipo de dato.

## Cadenas de caracteres

Una cadena de caracteres o *string* es un dato utilizado para representar texto. Debe escribirse entre comillas dobles o simples:

```python
universidad = "UADE"
barrio = 'Recoleta'
serie_favorita = "Los simuladores"
```

Ambos tipos de comillas son válidos. Lo importante es abrir y cerrar la cadena con el mismo tipo de comilla.

```python
materia = "Programación"
```

El siguiente ejemplo es incorrecto porque la cadena comienza con comillas dobles y termina con comillas simples:

```python
materia = "Programación'
```

## Las variables pueden cambiar

El valor almacenado en una variable puede reemplazarse durante la ejecución del programa:

```python
saldo_billetera = 25000
saldo_billetera = 18000
```

Después de ejecutar ambas instrucciones, `saldo_billetera` contiene `18000`. El valor anterior fue reemplazado.

También podemos utilizar el valor actual para calcular uno nuevo:

```python
precio_cena = 32000
cantidad_personas = 4
precio_por_persona = precio_cena / cantidad_personas
```

La variable `precio_por_persona` guardará el resultado `8000.0`.

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
class = "Python"           # Usa una palabra reservada.
```

Si se incumple alguna de estas reglas, Python puede lanzar un `SyntaxError`:

```python
2do_parcial = 8
```

```text
SyntaxError: invalid syntax
```

## Convenciones de nomenclatura

Las convenciones no son obligaciones del lenguaje: el programa puede funcionar aunque no se respeten. Sin embargo, seguirlas hace que el código sea más fácil de leer, corregir y compartir.

### 1. Utilizar *snake case*

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

### 2. Elegir nombres descriptivos

El nombre debe permitir entender qué representa el dato sin tener que investigar el resto del programa.

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

Los nombres descriptivos ayudan a los compañeros de equipo y también a quien escribió el código cuando vuelve a abrirlo semanas después.

### 3. Evitar abreviaturas confusas

Una abreviatura solo es útil si cualquier persona puede interpretarla fácilmente:

```python
cant_est = 35
```

Una opción más clara es:

```python
cantidad_estudiantes = 35
```

### 4. Evitar nombres de una sola letra

Se recomienda evitar nombres de una sola letra cuando no expresan el propósito de la variable:

```python
x = 56  # ¿Son pesos, kilómetros, estudiantes o minutos?
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

Un comentario de varias líneas se escribe mediante varios comentarios consecutivos:

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

## Actividad breve: mejorar nombres

Reescribe las siguientes variables utilizando nombres descriptivos y *snake case*. Puede haber más de una respuesta correcta.

```python
p = 15000               # Precio de una entrada de cine.
cant = 3                # Cantidad de entradas.
NombreUsuario = "Tomás" # Nombre de la persona que hizo la compra.
totalCompra = 45000      # Importe total de la compra.
```

## Preguntas de opción múltiple

### 1. ¿Cuál es la forma correcta de guardar la edad de un estudiante en Python?

- [ ] `let edad_estudiante = 20`
- [ ] `const edad_estudiante = 20`
- [ ] `var edad_estudiante = 20`
- [ ] `edad_estudiante = 20`

### 2. ¿Cuál de las siguientes afirmaciones no es una regla para nombrar variables?

- [ ] Los nombres deben comenzar con una letra o un guion bajo.
- [ ] Los nombres no distinguen entre mayúsculas y minúsculas.
- [ ] Los nombres no pueden ser palabras reservadas de Python.
- [ ] Los nombres pueden contener letras, números y guiones bajos.

### 3. ¿Cuál es el mejor nombre para guardar el precio mensual de una plataforma de streaming?

- [ ] `x`
- [ ] `pmp`
- [ ] `PrecioMensualStreaming`
- [ ] `precio_mensual_streaming`

### 4. ¿Cuál de los siguientes nombres produce un error de sintaxis?

- [ ] `nota_parcial_1`
- [ ] `1_nota_parcial`
- [ ] `nota_final`
- [ ] `_nota_temporal`

### 5. ¿Por qué se recomienda evitar nombres de variables de una sola letra?

- [ ] Porque no comunican con claridad el propósito de la variable.
- [ ] Porque Python no permite nombres de una sola letra.
- [ ] Porque siempre producen errores de sintaxis.
- [ ] Porque utilizan más memoria que los nombres largos.
