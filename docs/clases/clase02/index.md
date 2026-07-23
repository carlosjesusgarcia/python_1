# Clase 2: Programas, lenguajes de programación y algoritmos

## Objetivos de la clase

Al finalizar esta clase, se espera que puedas:

- Explicar qué es un programa informático.
- Reconocer los componentes básicos de una computadora.
- Diferenciar hardware y software.
- Comprender qué es un lenguaje de programación.
- Identificar las etapas básicas de ejecución de un programa.
- Escribir algoritmos sencillos para resolver situaciones cotidianas.

## 1. ¿Qué es un programa informático?

Un **programa informático** es un conjunto ordenado de instrucciones que una computadora puede ejecutar para realizar una tarea.

Por ejemplo, un programa puede:

- mostrar información en pantalla;
- realizar cálculos;
- guardar y recuperar datos;
- reproducir música o video;
- ordenar una lista;
- controlar el funcionamiento de un dispositivo.

La computadora ejecuta las instrucciones en el orden establecido por el programa.

### Ejemplo en Python

```python
print("Hola, mundo")
```

Este programa contiene una instrucción: mostrar el texto `Hola, mundo` en pantalla.

## 2. Hardware y software

Para ejecutar un programa necesitamos hardware y software.

### Hardware

El **hardware** está formado por los componentes físicos de una computadora, es decir, las partes que podemos tocar.

Ejemplos:

- Procesador.
- Memoria RAM.
- Disco o unidad de almacenamiento.
- Teclado.
- Pantalla.
- Mouse.

### Software

El **software** es el conjunto de programas e instrucciones que utiliza la computadora.

Ejemplos:

- Sistema operativo.
- Navegador web.
- Editor de texto.
- Reproductor multimedia.
- Programa escrito en Python.

| Hardware | Software |
|---|---|
| Es físico | Está formado por programas e instrucciones |
| Procesador | Sistema operativo |
| Memoria RAM | Navegador web |
| Disco | Editor de código |
| Teclado | Programa en Python |

## 3. Estructura básica de una computadora

Una computadora recibe datos, los procesa, puede almacenarlos y produce un resultado.

```text
Entrada → Procesamiento → Salida
                 ↓
           Almacenamiento
```

### Entrada

Permite introducir datos en la computadora.

Ejemplos: teclado, mouse, micrófono, cámara y pantalla táctil.

### Procesamiento

El procesador ejecuta las instrucciones del programa y realiza operaciones con los datos.

### Memoria y almacenamiento

- La **memoria RAM** conserva temporalmente los datos y programas que se están utilizando.
- La **unidad de almacenamiento** conserva archivos y programas aunque la computadora se apague.

### Salida

Permite obtener el resultado del procesamiento.

Ejemplos: pantalla, parlantes e impresora.

## 4. Rutinas y operaciones básicas de un programa

Un programa suele combinar diferentes operaciones:

1. Recibir datos.
2. Guardar datos.
3. Procesar datos.
4. Tomar decisiones.
5. Repetir acciones.
6. Mostrar o guardar resultados.

Ejemplo: un programa que calcula el total de una compra debe recibir los precios, sumarlos y mostrar el resultado.

```python
precio_1 = 1200
precio_2 = 800
total = precio_1 + precio_2

print(total)
```

No es necesario comprender todavía todos los elementos del código. En las próximas clases estudiaremos las variables, las asignaciones y las operaciones.

## 5. ¿Qué es un lenguaje de programación?

Un **lenguaje de programación** es un sistema de reglas y símbolos que permite escribir instrucciones para una computadora.

Algunos lenguajes de programación son:

- Python.
- JavaScript.
- PHP.
- Java.
- C#.
- C.

Cada lenguaje tiene una sintaxis, es decir, reglas que determinan cómo deben escribirse correctamente las instrucciones.

### Lenguaje natural y lenguaje de programación

Las personas podemos interpretar frases incompletas o ambiguas gracias al contexto. Una computadora necesita instrucciones precisas y escritas de acuerdo con las reglas del lenguaje elegido.

Por ejemplo, en Python:

```python
print("Hola")
```

Si olvidamos cerrar las comillas, el programa contiene un error de sintaxis:

```python
print("Hola)
```

## 6. ¿Por qué utilizaremos Python?

Python es adecuado para iniciarse en programación porque:

- tiene una sintaxis clara y legible;
- permite concentrarse en la resolución del problema;
- se utiliza en educación y en proyectos reales;
- funciona en Windows, Linux y macOS;
- cuenta con abundante documentación.

Elegir un lenguaje depende del problema que se desea resolver, las herramientas disponibles y el ámbito en el que se utilizará el programa.

## 7. Del código a la ejecución

Cuando trabajamos con Python intervienen tres elementos básicos:

1. **Código fuente:** instrucciones escritas por una persona en un archivo.
2. **Intérprete de Python:** programa que lee y ejecuta esas instrucciones.
3. **Resultado:** efecto producido por el programa o información mostrada al usuario.

```text
Código fuente → Intérprete de Python → Resultado
```

## 8. ¿Qué es un algoritmo?

Un **algoritmo** es una secuencia ordenada, precisa y finita de pasos para resolver un problema o realizar una tarea.

Los algoritmos no existen únicamente en programación. También aparecen en acciones cotidianas, como preparar una bebida, seguir una receta o llegar a un lugar.

### Características de un algoritmo

Un algoritmo debe ser:

- **Ordenado:** los pasos siguen una secuencia lógica.
- **Preciso:** cada paso indica claramente qué debe hacerse.
- **Finito:** debe terminar después de una cantidad limitada de pasos.
- **Aplicable:** debe permitir alcanzar el resultado esperado.

### Ejemplo cotidiano

Algoritmo para preparar té:

1. Colocar agua en una pava.
2. Calentar el agua.
3. Colocar un saquito de té en una taza.
4. Verter el agua caliente en la taza.
5. Esperar unos minutos.
6. Retirar el saquito.
7. Servir.

El orden es importante. No sería posible verter el agua caliente antes de calentarla.

## 9. De un problema a un programa

Antes de escribir código conviene comprender el problema y diseñar una solución.

Podemos seguir estas etapas:

1. Comprender el problema.
2. Identificar los datos de entrada.
3. Determinar el resultado esperado.
4. Diseñar un algoritmo.
5. Escribir el programa.
6. Ejecutarlo y comprobar el resultado.
7. Corregir los errores si fuera necesario.

### Ejemplo

**Problema:** calcular el precio total de dos productos.

**Entrada:** precio del primer producto y precio del segundo producto.

**Proceso:** sumar los dos precios.

**Salida:** precio total.

**Algoritmo:**

1. Obtener el precio del primer producto.
2. Obtener el precio del segundo producto.
3. Sumar los dos precios.
4. Mostrar el total.

## Actividad 1: Hardware o software

Indicá si cada elemento es **hardware** o **software**.

1. Teclado.
2. Python.
3. Memoria RAM.
4. Navegador web.
5. Procesador.
6. Sistema operativo.
7. Disco SSD.
8. Editor de código.

## Actividad 2: Entrada, procesamiento o salida

Clasificá cada acción.

1. Una persona escribe su nombre con el teclado.
2. La computadora suma dos números.
3. La pantalla muestra el resultado.
4. Un micrófono captura la voz.
5. Una impresora produce una copia en papel.
6. El procesador compara dos valores.

## Actividad 3: Ordenar un algoritmo

Ordená los pasos para iniciar una videollamada:

- Seleccionar el contacto.
- Encender la computadora.
- Finalizar la llamada.
- Abrir la aplicación.
- Iniciar la llamada.
- Comprobar el micrófono y la cámara.

## Actividad 4: Detectar problemas

Leé el siguiente algoritmo:

1. Servir el café.
2. Colocar agua en la cafetera.
3. Encender la cafetera.
4. Colocar el café.

Respondé:

1. ¿El orden es correcto?
2. ¿Qué pasos cambiarías de lugar?
3. Escribí una versión ordenada y precisa.

## Actividad 5: Diseñar un algoritmo cotidiano

Elegí una de estas situaciones y escribí un algoritmo de al menos cinco pasos:

- Enviar un correo electrónico.
- Retirar dinero de un cajero automático.
- Buscar una película y comenzar a reproducirla.
- Preparar una comida sencilla.

Comprobá que el algoritmo sea ordenado, preciso y finito.

## Actividad 6: Entrada, proceso y salida

Para cada problema, indicá cuáles son los datos de entrada, cuál es el proceso y cuál es la salida.

1. Calcular el promedio de tres notas.
2. Convertir una cantidad de horas en minutos.
3. Calcular el precio final de un producto después de aplicar un descuento.

## Actividad 7: Primer análisis de código

Observá el programa:

```python
nombre = "Ana"
print("Hola", nombre)
```

Respondé sin preocuparte todavía por los términos técnicos:

1. ¿Qué información aparece en el programa?
2. ¿Qué pensás que hace la primera línea?
3. ¿Qué pensás que hace la segunda línea?
4. ¿Cuál será el resultado mostrado en pantalla?

## Síntesis

En esta clase aprendimos que:

- un programa es un conjunto ordenado de instrucciones;
- el hardware está formado por los componentes físicos;
- el software está formado por programas;
- una computadora recibe, procesa, almacena y entrega información;
- un lenguaje de programación permite expresar instrucciones de manera precisa;
- Python será el lenguaje utilizado en la materia;
- un algoritmo es una secuencia ordenada, precisa y finita de pasos;
- antes de programar conviene analizar el problema y diseñar una solución.

En la próxima clase comenzaremos a trabajar con tipos de datos, variables, expresiones y asignaciones en Python.

[Anterior: Clase 1 - Presentación de la materia](../clase01/index.md)

[Siguiente: Clase 3 - Tipos, variables, expresiones y asignaciones](../clase03/01_variables_y_nomenclatura.md)
