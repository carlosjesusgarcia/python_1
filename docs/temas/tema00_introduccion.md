# Tema 0: Introducción a la programación y primeros pasos con Python

## ¿Para qué sirve este tema?

Este tema presenta las ideas necesarias para empezar a programar. No hace falta tener conocimientos previos: vamos a partir de problemas cotidianos, aprenderemos a expresar soluciones mediante algoritmos y escribiremos programas sencillos en Python.

Los conceptos de variables, tipos de datos y entrada de información se presentan de manera inicial. Más adelante se estudiarán con mayor profundidad.

## Objetivos de aprendizaje

Al finalizar el tema, vas a poder:

- explicar qué significa programar;
- reconocer la entrada, el procesamiento y la salida de un programa;
- identificar los componentes generales de una computadora;
- distinguir hardware, software, sistema operativo, lenguaje e intérprete;
- describir las etapas básicas del desarrollo de un programa;
- escribir algoritmos ordenados, precisos y finitos;
- diferenciar *testing*, *debugging* y *bug*;
- explicar por qué usamos Python;
- crear, guardar y ejecutar un archivo `.py` en Thonny;
- usar `print()` para mostrar información;
- usar `input()` para recibir información;
- guardar valores en variables;
- reconocer los tipos `str`, `int`, `float` y `bool`;
- consultar un tipo mediante `type()`;
- producir mensajes con f-strings;
- usar comentarios, `\n` y `\t`;
- consultar documentación y utilizar la inteligencia artificial con criterio.

---

## 1. ¿Qué es programar?

**Programar** consiste en analizar un problema, diseñar una solución y expresarla mediante instrucciones que una computadora pueda ejecutar.

La computadora no interpreta nuestras intenciones. Si una instrucción falta, está desordenada o es ambigua, el resultado puede ser incorrecto.

Podemos programar para:

- calcular el promedio de las notas de un curso;
- registrar gastos;
- organizar turnos;
- buscar una película en una biblioteca;
- analizar respuestas de una encuesta;
- calcular el precio de una compra;
- automatizar tareas repetitivas;
- crear una aplicación, un videojuego o un sitio web.

Programar no es solamente escribir código. El código aparece después de comprender el problema y pensar una solución.

### Programa y aplicación

Un **programa informático** es un conjunto de instrucciones y datos que una computadora utiliza para realizar una tarea. Una aplicación puede estar formada por uno o varios programas relacionados.

Por ejemplo, una aplicación de transporte puede consultar recorridos, calcular tiempos, mostrar un mapa y guardar lugares frecuentes.

### Pausa para pensar

Elegí una aplicación que uses habitualmente y respondé:

1. ¿Qué problema resuelve?
2. ¿Qué datos recibe?
3. ¿Qué resultados muestra?

---

## 2. Entrada, procesamiento y salida

En un programa básico suelen aparecer tres componentes:

1. **Entrada:** información que recibe el programa.
2. **Procesamiento:** operaciones que realiza con esa información.
3. **Salida:** resultado que produce.

### Ejemplo: dividir el gasto de una salida

- **Entrada:** importe total y cantidad de personas.
- **Procesamiento:** dividir el importe por la cantidad de personas.
- **Salida:** importe que debe pagar cada persona.

```text
Entrada → Procesamiento → Salida
```

La entrada no siempre procede del teclado. También puede llegar desde:

- un archivo;
- una cámara;
- un micrófono;
- un sensor;
- una base de datos;
- otro programa.

La salida tampoco tiene que ser texto en una pantalla. Puede ser un sonido, una imagen, un archivo nuevo, una impresión o una orden enviada a otro dispositivo.

### Ejemplo: acceso a un edificio

| Etapa | Ejemplo |
|---|---|
| Entrada | Código QR presentado por una persona |
| Procesamiento | Verificación del código y del horario autorizado |
| Salida | Acceso permitido o rechazado |

---

## 3. ¿Qué ocurre dentro de una computadora?

Una computadora combina **hardware** y **software**.

### Hardware

El hardware está formado por los componentes físicos:

- **procesador o CPU:** ejecuta instrucciones y realiza operaciones;
- **memoria RAM:** conserva temporalmente los datos y programas que están en uso;
- **almacenamiento:** guarda archivos y programas de manera persistente, por ejemplo en un SSD;
- **dispositivos de entrada:** teclado, mouse, cámara o micrófono;
- **dispositivos de salida:** pantalla, parlantes o impresora;
- **placa de red:** permite comunicarse con otros equipos.

### Software

El software incluye los programas y datos:

- **sistema operativo:** administra el hardware y permite ejecutar aplicaciones;
- **aplicaciones:** realizan tareas para las personas;
- **lenguajes y herramientas de programación:** permiten crear otros programas.

### Del código al resultado

Cuando ejecutamos un programa en Python ocurre, de manera simplificada, lo siguiente:

```text
Persona
  ↓ escribe
Código fuente
  ↓ procesa
Intérprete de Python
  ↓ solicita recursos
Sistema operativo
  ↓ administra
Hardware
  ↓ produce
Resultado
```

No hace falta memorizar todos los detalles internos. Lo importante es comprender que el código necesita un programa capaz de interpretarlo y una computadora capaz de ejecutarlo.

---

## 4. Del problema al programa

El desarrollo de un programa incluye varias etapas. En proyectos pequeños algunas pueden hacerse rápidamente, pero ninguna desaparece por completo.

### 1. Definir el problema

Hay que expresar con claridad qué necesidad queremos resolver.

> Una persona quiere consultar los ingredientes de un producto antes de comprarlo.

### 2. Analizar el problema

Identificamos:

- qué datos conocemos;
- qué datos faltan;
- qué operaciones son necesarias;
- qué resultado esperamos;
- qué situaciones especiales pueden aparecer.

### 3. Diseñar la estrategia

Pensamos una solución general antes de elegir instrucciones concretas de Python.

### 4. Escribir el algoritmo

Ordenamos la solución mediante pasos precisos.

### 5. Codificar

Traducimos el algoritmo a un lenguaje de programación.

### 6. Probar

Ejecutamos el programa con distintos datos y comparamos el resultado obtenido con el esperado.

### 7. Depurar

Buscamos la causa de los errores y la corregimos.

### 8. Documentar y mantener

Explicamos las decisiones importantes y modificamos el programa cuando cambian las necesidades.

### Ejemplo completo

**Problema:** consultar los ingredientes de un producto.

**Entrada:** nombre o código del producto.

**Procesamiento:** búsqueda en una colección de productos.

**Salida:** lista de ingredientes o aviso de producto no encontrado.

**Algoritmo inicial:**

1. Solicitar el nombre o el código.
2. Buscar el producto.
3. Si el producto existe, obtener sus ingredientes.
4. Mostrar los ingredientes.
5. Si no existe, mostrar un aviso.
6. Finalizar.

---

## 5. Algoritmos

Un **algoritmo** es una secuencia ordenada, precisa y finita de instrucciones que permite resolver un problema o realizar una tarea.

Un buen algoritmo debe ser:

- **ordenado:** los pasos siguen una secuencia lógica;
- **preciso:** cada instrucción indica qué debe hacerse;
- **no ambiguo:** no admite interpretaciones contradictorias;
- **finito:** termina después de una cantidad limitada de pasos;
- **eficaz:** conduce al resultado buscado.

### Ejemplo cotidiano

Algoritmo para llegar en subte desde San Telmo hasta una clase en Recoleta:

1. Consultar el recorrido antes de salir.
2. Dirigirse a la estación de origen.
3. Verificar que la tarjeta SUBE tenga saldo.
4. Ingresar a la estación.
5. Comprobar la línea y el sentido del viaje.
6. Subir a la formación correcta.
7. Bajar en la estación planificada.
8. Caminar hasta el destino.
9. Finalizar.

Si eliminamos el paso 5, una persona podría entrar a la línea correcta y viajar en el sentido contrario. La precisión importa.

### Instrucciones y flujo

Una instrucción puede:

- transformar datos;
- producir una salida;
- solicitar una entrada;
- modificar el orden de ejecución.

En temas posteriores aprenderemos instrucciones como `if`, `while` y `for`, capaces de tomar decisiones o repetir acciones. Por ahora podemos mencionarlas en un algoritmo escrito en lenguaje cotidiano sin programarlas.

### Ejemplo con una repetición y una decisión

1. Encender el horno a 180 °C.
2. Preparar la mezcla.
3. Colocar la mezcla en una bandeja.
4. Introducir la bandeja en el horno.
5. Esperar el tiempo inicial.
6. **Mientras** la preparación siga húmeda, cocinar unos minutos más.
7. **Si** está cocida, retirarla.
8. Esperar hasta que se enfríe.
9. Servir.
10. Finalizar.

Este algoritmo todavía no es código Python. Es una descripción ordenada de la solución.

---

## 6. Testing, debugging y bugs

Los errores son una parte normal del aprendizaje y del desarrollo.

- **Testing o prueba:** proceso planificado para comprobar cómo se comporta un programa y encontrar errores.
- **Debugging o depuración:** proceso de localizar la causa de un error y corregirla.
- **Bug:** defecto que produce un comportamiento incorrecto o inesperado.

### Tres clases iniciales de errores

#### Error de sintaxis

El código no respeta las reglas de escritura del lenguaje.

```python
print("Hola"
```

Falta cerrar el paréntesis.

#### Error de ejecución

El programa comienza a ejecutarse, pero encuentra una operación imposible.

```python
print(10 / 0)
```

No se puede dividir por cero.

#### Error lógico

El programa se ejecuta, pero la solución está mal planteada.

```python
print(10 + 2)  # Se quería calcular 10 por 2
```

### Probar no es ejecutar una sola vez

Si un programa divide un gasto entre varias personas, conviene probar:

- un caso habitual: `48000` entre `4`;
- una sola persona;
- un total con decimales;
- cero personas;
- un dato escrito con letras;
- un valor negativo.

No todos esos casos serán resueltos todavía. Identificarlos ya forma parte del análisis.

---

## 7. Lenguajes de programación

Un **lenguaje de programación** posee reglas, palabras y símbolos que permiten escribir instrucciones ejecutables.

Existen muchos lenguajes porque los problemas, los entornos y los objetivos son diferentes. La elección puede depender de:

- el tipo de aplicación;
- las herramientas disponibles;
- el rendimiento necesario;
- el sistema donde funcionará;
- los conocimientos del equipo;
- la comunidad y la documentación;
- el costo y las licencias.

En esta materia trabajaremos con Python.

---

## 8. ¿Qué es Python?

Python es un lenguaje de programación de propósito general. Se utiliza en educación, automatización, desarrollo web, análisis de datos, ciencia e inteligencia artificial, entre otras áreas.

Lo elegimos porque:

- posee una sintaxis relativamente clara;
- permite concentrarse en la lógica;
- es libre y gratuito;
- funciona en Windows, Linux y macOS;
- puede usarse sin conexión permanente;
- tiene documentación extensa;
- dispone de una comunidad amplia;
- admite diferentes formas de organizar programas.

Python es:

- **de alto nivel:** permite escribir instrucciones más cercanas al razonamiento humano que al funcionamiento eléctrico del procesador;
- **multiplataforma:** un mismo programa puede adaptarse a distintos sistemas;
- **de propósito general:** no está limitado a una única clase de problemas;
- **de tipado dinámico:** el tipo está asociado con el valor y Python lo determina durante la ejecución;
- **multiparadigma:** admite diferentes estilos de programación.

Durante el inicio trabajaremos principalmente con una secuencia de instrucciones ejecutadas de arriba hacia abajo.

### Código fuente e intérprete

El **código fuente** es el texto escrito por una persona. Los archivos de Python suelen terminar en `.py`.

El **intérprete de Python** procesa y ejecuta las instrucciones.

```text
archivo programa.py → intérprete de Python → resultado
```

Decir que Python es “interpretado” es una simplificación útil. La implementación más utilizada transforma internamente el código y lo ejecuta mediante una máquina virtual. Para comenzar alcanza con saber que necesitamos Python o un entorno que ya lo incluya.

---

## 9. Entornos de trabajo

Un **IDE** o entorno de desarrollo integrado reúne herramientas para escribir, ejecutar y depurar código.

### Thonny: opción principal

Thonny está diseñado para aprender Python:

- funciona localmente;
- es gratuito;
- presenta una interfaz sencilla;
- incluye Python en su instalación habitual;
- posee consola y depurador;
- permite observar la ejecución paso a paso.

Sitio oficial: [thonny.org](https://thonny.org/)

### Primeros pasos en Thonny

1. Abrí Thonny.
2. Seleccioná **Archivo → Nuevo**.
3. Escribí:

   ```python
   print("Hola, Python")
   ```

4. Guardá el archivo como `tema00_primer_programa.py`.
5. Elegí una carpeta dedicada a la materia.
6. Ejecutá con el botón correspondiente o con `F5`.
7. Observá el resultado en la consola.

Usá nombres de archivo breves y descriptivos:

```text
tema00_saludo.py
actividad_nombre.py
presentacion.py
```

Evitá nombres como:

```text
cosas.py
nuevo nuevo final.py
archivo1.py
```

### Visual Studio Code

Visual Studio Code es un editor más amplio y extensible. Para trabajar con Python requiere instalar Python y la extensión correspondiente. Será útil más adelante, pero Thonny reduce la configuración inicial.

### Google Colab

Google Colab permite escribir y ejecutar Python desde el navegador. El documento se organiza en celdas de código y de texto.

Puede ser útil:

- en una computadora donde no se permite instalar software;
- para compartir temporalmente una práctica;
- para trabajar con cuadernos que combinan explicación y código.

Tiene límites:

- necesita conexión;
- requiere una cuenta;
- guarda normalmente en servicios externos;
- una celda puede ejecutarse fuera de orden y conservar estados anteriores.

Por eso conviene conservar los ejercicios importantes como archivos `.py` locales.

---

## 10. Primeras salidas con `print()`

`print()` es una **función incorporada** que muestra información en la consola.

```python
print("Hola, mundo")
```

Resultado:

```text
Hola, mundo
```

En la instrucción:

- `print` es el nombre de la función;
- los paréntesis contienen la información que recibe;
- `"Hola, mundo"` es una cadena de texto;
- las comillas delimitan el texto.

### Varias instrucciones

```python
print("Taller de Programación I")
print("Lenguaje: Python")
print("Año: 2026")
```

Python las ejecuta de arriba hacia abajo.

### Texto y números

```python
print("Cantidad de materias:")
print(5)
```

`"5"` y `5` no son lo mismo:

- `"5"` es texto;
- `5` es un número entero.

Esta diferencia será importante al realizar operaciones.

### Palabras reservadas y nombres incorporados

Palabras como `if`, `while`, `def` y `class` tienen un significado reservado. No pueden utilizarse como nombres de variables.

`print`, `input` y `type` no son palabras reservadas: son nombres de funciones incorporadas. Tampoco conviene usarlos como nombres de variables, porque dejaríamos de acceder fácilmente a esas funciones.

---

## 11. Recibir información con `input()`

`input()` permite solicitar un dato mediante el teclado.

```python
input("Ingresá tu nombre: ")
```

El mensaje aparece en la consola y el programa espera una respuesta.

Sin embargo, si no guardamos esa respuesta, no podremos utilizarla después. Para conservarla usamos una variable.

```python
nombre = input("Ingresá tu nombre: ")
```

La función `input()` siempre devuelve inicialmente una cadena de texto, es decir, un valor de tipo `str`.

### Entrada y salida combinadas

```python
nombre = input("Ingresá tu nombre: ")
print("Hola,", nombre)
```

Posible ejecución:

```text
Ingresá tu nombre: Tomás
Hola, Tomás
```

Importante: `input()` no es una palabra reservada y no lleva una `s` final.

```python
# Incorrecto
inputs("Ingresá un dato: ")
```

---

## 12. Variables y asignación

Una **variable** es un nombre que permite referirse a un valor almacenado durante la ejecución del programa.

La metáfora de una caja puede ayudar al principio, pero una variable no es literalmente un cajón físico: es un nombre asociado con un valor.

```python
nombre = "Sofía"
edad = 20
```

El signo `=` es el **operador de asignación**. Se lee “recibe” o “se asigna”.

```text
nombre recibe "Sofía"
edad recibe 20
```

No expresa necesariamente una igualdad matemática.

### Reasignación

Una variable puede recibir un valor nuevo:

```python
barrio = "Palermo"
barrio = "Belgrano"
print(barrio)
```

Resultado:

```text
Belgrano
```

### Nombres adecuados

Usá nombres que expliquen qué contiene la variable:

```python
nombre_estudiante = "Valentina"
cantidad_materias = 5
precio_entrada = 12500.50
```

Reglas iniciales:

- pueden contener letras, números y `_`;
- no pueden comenzar con un número;
- no pueden contener espacios;
- no pueden ser palabras reservadas;
- distinguen mayúsculas de minúsculas;
- en Python se recomienda `snake_case`.

```python
# Adecuados
nombre_completo = "Juan Pérez"
edad = 19
materia_1 = "Programación"

# Incorrectos
# 1materia = "Programación"
# nombre completo = "Juan Pérez"
# class = "A"
```

---

## 13. Tipos de datos básicos

El tipo de un valor determina qué representa y qué operaciones puede realizar.

| Tipo | Significado | Ejemplos |
|---|---|---|
| `str` | Cadena de texto | `"Buenos Aires"`, `"123"` |
| `int` | Número entero | `20`, `-4`, `0` |
| `float` | Número decimal | `1.75`, `3500.50` |
| `bool` | Valor lógico | `True`, `False` |

### Cadenas: `str`

```python
carrera = "Publicidad"
estacion = "Facultad de Derecho"
```

Aunque contenga dígitos, un valor entre comillas es texto:

```python
codigo_postal = "1425"
```

### Enteros: `int`

```python
edad = 20
cantidad_entradas = 3
```

### Decimales: `float`

En Python los decimales se escriben con punto:

```python
altura = 1.78
precio = 4500.50
```

### Booleanos: `bool`

Solo poseen dos valores, con mayúscula inicial y sin comillas:

```python
es_estudiante = True
tiene_descuento = False
```

`"True"` es texto; `True` es un valor booleano.

---

## 14. Consultar el tipo con `type()`

`type()` informa el tipo de un valor.

```python
nombre = "Luca"
edad = 20
altura = 1.76
es_estudiante = True

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(es_estudiante))
```

Resultado:

```text
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```

Por ahora podemos interpretar `class` como la categoría a la que pertenece el valor.

### Atención con `input()`

```python
edad = input("Ingresá tu edad: ")
print(type(edad))
```

Aunque la persona escriba `20`, el resultado será:

```text
<class 'str'>
```

`input()` entrega texto. En temas posteriores aprenderemos a convertirlo para hacer cálculos.

---

## 15. Mensajes claros con f-strings

Una **f-string** permite insertar valores dentro de un texto.

```python
nombre = "Malena"
barrio = "Caballito"

print(f"{nombre} vive en {barrio}.")
```

Resultado:

```text
Malena vive en Caballito.
```

La estructura es:

```python
f"Texto {variable}"
```

- la `f` se escribe antes de la comilla;
- las variables se colocan entre llaves;
- el texto permanece entre comillas.

### Con datos ingresados

```python
nombre = input("Nombre: ")
carrera = input("Carrera: ")

print(f"{nombre} estudia {carrera}.")
```

También se puede mostrar más de una variable:

```python
actividad = "ir al cine"
dia = "sábado"

print(f"El {dia} quiero {actividad}.")
```

---

## 16. Saltos de línea y tabulaciones

Dentro de una cadena podemos utilizar secuencias especiales.

### `\n`: nueva línea

```python
print("Nombre: Martina\nCarrera: Publicidad")
```

Resultado:

```text
Nombre: Martina
Carrera: Publicidad
```

### `\t`: tabulación

```python
print("Producto\tPrecio")
print("Café\t4500")
```

Resultado aproximado:

```text
Producto    Precio
Café        4500
```

La alineación exacta depende de la longitud del texto y de la consola.

### Uso combinado

```python
print("Plan del día\n\t09:00 Clase\n\t13:00 Almuerzo\n\t18:00 Cine")
```

---

## 17. Comentarios

Un comentario contiene una aclaración destinada a las personas que leen el código. Python no lo ejecuta.

Los comentarios comienzan con `#`:

```python
# Solicita un dato para personalizar el saludo
nombre = input("Nombre: ")
print(f"Hola, {nombre}")
```

También pueden escribirse después de una instrucción:

```python
print("Inicio")  # Mensaje inicial
```

Un comentario útil explica el propósito o una decisión. No hace falta describir lo evidente.

```python
# Poco útil: imprime Hola
print("Hola")
```

### ¿Existen comentarios multilínea?

Python no posee una sintaxis especial de comentario multilínea. Las comillas triples crean una cadena de varias líneas:

```python
"""
Esto es una cadena de texto.
No es un comentario especial de Python.
"""
```

En ciertos lugares se usan como documentación. Para comentarios normales utilizaremos `#` en cada línea.

---

## 18. Un primer programa integrado

Este programa combina entrada, variables, salida, f-strings y formato:

```python
# Presentación de un estudiante
nombre = input("Ingresá tu nombre: ")
edad = input("Ingresá tu edad: ")
barrio = input("Ingresá tu barrio: ")
actividad = input("Ingresá una actividad que te guste: ")

print("\n--- PERFIL ---")
print(f"Nombre:\t{nombre}")
print(f"Edad:\t{edad}")
print(f"Barrio:\t{barrio}")
print(f"Actividad:\t{actividad}")
```

### Análisis

**Entradas:**

- nombre;
- edad;
- barrio;
- actividad.

**Procesamiento:**

- almacenamiento de las respuestas;
- inserción de los valores en mensajes;
- organización del formato.

**Salida:**

- perfil presentado en la consola.

La edad sigue siendo texto porque todavía no hacemos operaciones con ella.

---

## 19. Errores frecuentes

### Comillas tipográficas

Incorrecto:

```python
print(“Hola”)
```

Correcto:

```python
print("Hola")
```

Las comillas copiadas de ciertos procesadores de texto pueden no ser válidas.

### Mayúsculas incorrectas

```python
Print("Hola")
```

Python distingue mayúsculas y minúsculas. La función se llama `print`.

### Comillas o paréntesis sin cerrar

```python
print("Hola)
print("Hola"
```

### Variable inexistente

```python
nombre = "Delfina"
print(nomrbe)
```

`nombre` y `nomrbe` son nombres distintos.

### Variable entre comillas

```python
nombre = "Delfina"
print("nombre")
```

Muestra la palabra `nombre`, no el contenido de la variable.

Correcto:

```python
print(nombre)
```

### Confundir `=` con una pregunta

```python
edad = 20
```

Esta instrucción asigna el valor `20`. No pregunta si `edad` es igual a `20`.

### Esperar un número de `input()`

```python
edad = input("Edad: ")
print(type(edad))
```

El tipo será `str`. Esto no es un error de Python: es el funcionamiento normal de `input()`.

---

## 20. Documentación y fuentes de consulta

La documentación oficial permite verificar cómo funciona Python:

[Documentación oficial de Python en español](https://docs.python.org/es/3/)

Incluye:

- tutoriales;
- referencias del lenguaje;
- funciones incorporadas;
- módulos de la biblioteca estándar;
- guías de instalación;
- índices y buscador.

No es necesario memorizarla. Hay que aprender a:

1. formular una pregunta concreta;
2. buscar el concepto o la función;
3. identificar la versión;
4. leer el ejemplo;
5. probarlo en un archivo pequeño;
6. adaptarlo sin copiar partes que no comprendemos.

También pueden utilizarse libros, materiales docentes y comunidades técnicas. Una respuesta encontrada en un foro o buscador debe comprobarse mediante ejecución y, cuando sea necesario, mediante documentación.

---

## 21. Inteligencia artificial: usos y límites

Una herramienta de inteligencia artificial puede:

- explicar un concepto con otras palabras;
- proponer ejemplos;
- formular preguntas de práctica;
- ayudar a leer un mensaje de error;
- revisar una solución que ya intentamos;
- comparar dos formas de resolver un problema.

También puede:

- inventar funciones;
- producir código incorrecto;
- usar contenidos todavía no estudiados;
- complicar innecesariamente una solución;
- responder con seguridad aunque esté equivocada;
- resolver la tarea sin que el estudiante aprenda.

### Protocolo de uso responsable

1. Leé y explicá el problema.
2. Escribí una primera solución propia.
3. Pedí una ayuda concreta, no la resolución completa.
4. Ejecutá el código.
5. Probalo con varios datos.
6. Consultá la documentación cuando haya dudas.
7. Explicá cada línea con tus palabras.
8. Indicá el uso de IA si la consigna lo exige.

Copiar un programa que no podemos explicar no demuestra aprendizaje.

---

# Actividades

Las actividades avanzan desde la comprensión hasta la producción. Realizalas en orden.

## Actividad 1. Programas en la vida cotidiana

Elegí dos aplicaciones que uses y completá:

| Aplicación | Problema que resuelve | Entrada | Procesamiento | Salida |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |

## Actividad 2. Hardware y software

Clasificá cada elemento:

- Python;
- teclado;
- memoria RAM;
- Thonny;
- SSD;
- Windows o Linux;
- procesador;
- archivo `saludo.py`;
- pantalla.

Después explicá qué elementos intervienen desde que presionás `F5` hasta que aparece un saludo en la consola.

## Actividad 3. Ordenar el desarrollo

Ordená las etapas:

- depurar;
- codificar;
- definir el problema;
- probar;
- analizar entradas y salidas;
- diseñar el algoritmo;
- mantener y mejorar.

Explicá por qué probar antes de codificar no tendría sentido en este caso.

## Actividad 4. Evaluar algoritmos

Leé este algoritmo:

1. Viajar a la escuela.
2. Entrar al aula.
3. Salir de casa.
4. Preparar los materiales.

Respondé:

1. ¿Es ordenado?
2. ¿Es preciso?
3. ¿Qué pasos faltan?
4. Reescribilo con al menos ocho pasos.

## Actividad 5. Diseñar un algoritmo

Elegí una situación:

- organizar una salida con amistades;
- buscar una película en una biblioteca local;
- calcular cuántos viajes permite un saldo;
- registrar la asistencia de un curso;
- reservar una cancha.

Escribí:

1. definición del problema;
2. entradas;
3. procesamiento;
4. salida;
5. algoritmo de al menos siete pasos;
6. dos situaciones que deberías probar.

## Actividad 6. Primer archivo en Thonny

Creá `actividad_06_presentacion.py` y mostrá cada dato en una línea:

- nombre;
- edad;
- curso;
- localidad o barrio;
- una actividad favorita;
- el mensaje `Estoy aprendiendo Python`.

En esta actividad usá solamente `print()`.

## Actividad 7. Detectar y corregir

Cada fragmento contiene al menos un error. Corregilo y explicá el problema.

```python
Print("Hola")
```

```python
print(“Buenos Aires”)
```

```python
print("Taller de Programación"
```

```python
print("Python)
```

```python
nombre = "Lucía"
print(nomrbe)
```

## Actividad 8. Entrada y variables

Creá `actividad_08_datos.py`. El programa debe pedir:

- nombre;
- edad;
- curso;
- actividad favorita.

Después debe mostrar todos los datos. Primero usá:

```python
print("Hola,", nombre)
```

No uses todavía f-strings.

## Actividad 9. Tipos de datos

Indicá el tipo de cada valor sin ejecutarlo:

```python
"2026"
2026
20.26
True
"False"
-15
0.0
"Buenos Aires"
```

Después verificá tus respuestas con `type()`.

## Actividad 10. Investigar `input()`

Ejecutá:

```python
edad = input("Ingresá tu edad: ")
print(edad)
print(type(edad))
```

Respondé:

1. ¿Qué escribiste?
2. ¿Qué valor mostró?
3. ¿Qué tipo informó?
4. ¿Por qué el tipo no fue `int`?

## Actividad 11. Presentación con f-strings

Creá un programa que solicite nombre, barrio y actividad preferida. Debe generar una oración natural como:

```text
Martín vive en Villa Urquiza y los fines de semana suele jugar al fútbol.
```

La oración debe construirse con una f-string.

## Actividad 12. Formato de consola

Usá una sola instrucción `print()` con `\n` y `\t` para producir:

```text
AGENDA
09:00   Clase
13:00   Almuerzo
18:00   Cine
```

## Actividad 13. Comentarios útiles

Agregá comentarios al siguiente programa. Deben explicar su propósito general y una decisión importante, no repetir cada instrucción.

```python
nombre = input("Nombre: ")
actividad = input("Actividad favorita: ")
print(f"{nombre} eligió {actividad}.")
```

## Actividad 14. Testing y debugging

Observá:

```python
nombre = input("Nombre: ")
print(f"Bienvenido, {nombre}")
```

Diseñá cuatro pruebas:

- un nombre habitual;
- un nombre compuesto;
- una respuesta vacía;
- una respuesta con números.

Completá:

| Prueba | Dato ingresado | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

¿El programa debería aceptar todas esas respuestas? Proponé una mejora en lenguaje cotidiano, aunque todavía no sepas programarla.

## Actividad 15. Desafío integrador

Creá `tema00_perfil_cultural.py`.

El programa debe:

1. mostrar un título;
2. pedir nombre, edad, barrio o localidad;
3. pedir una película, serie, videojuego, deporte o actividad preferida;
4. guardar cada respuesta en una variable;
5. mostrar un perfil ordenado mediante f-strings;
6. incluir `\n` o `\t`;
7. incluir al menos un comentario útil;
8. mostrar con `type()` el tipo de la edad recibida;
9. ejecutarse sin errores de sintaxis;
10. probarse con dos perfiles diferentes.

### Criterios de logro

| Criterio | Logrado | En proceso | A revisar |
|---|---|---|---|
| El archivo tiene un nombre claro y termina en `.py` | | | |
| Las variables poseen nombres comprensibles | | | |
| Todas las entradas quedan almacenadas | | | |
| La salida se entiende y está ordenada | | | |
| Las f-strings están bien construidas | | | |
| El comentario aporta información útil | | | |
| El programa fue probado dos veces | | | |
| Puedo explicar cada instrucción | | | |

---

# Autoevaluación

Respondé sin volver a leer el tema. Después verificá las soluciones y revisá los apartados que necesites.

## Parte A. Opción múltiple

### 1. ¿Qué significa programar?

- A. Instalar aplicaciones.
- B. Diseñar y expresar instrucciones para resolver problemas.
- C. Usar una computadora rápidamente.
- D. Copiar código que funciona.

### 2. ¿Cuál es un ejemplo de entrada?

- A. El promedio calculado.
- B. El nombre escrito por el usuario.
- C. La división realizada.
- D. El mensaje final.

### 3. ¿Qué componente ejecuta instrucciones y realiza operaciones?

- A. El SSD.
- B. La pantalla.
- C. La CPU.
- D. El teclado.

### 4. ¿Qué característica no corresponde a un algoritmo correcto?

- A. Es finito.
- B. Es preciso.
- C. Es ordenado.
- D. Es ambiguo.

### 5. ¿Qué es *debugging*?

- A. Diseñar la interfaz.
- B. Localizar y corregir la causa de errores.
- C. Escribir cualquier algoritmo.
- D. Instalar Python.

### 6. ¿Cuál es una instrucción válida?

- A. `Print("Hola")`
- B. `print(“Hola”)`
- C. `print("Hola")`
- D. `print "Hola"`

### 7. ¿Qué devuelve inicialmente `input()`?

- A. Siempre un `int`.
- B. Siempre un `float`.
- C. Una cadena `str`.
- D. Un valor `bool`.

### 8. ¿Cuál es una asignación válida?

- A. `20 = edad`
- B. `edad = 20`
- C. `edad == 20`
- D. `"edad" = 20`

### 9. ¿Qué tipo posee `False`?

- A. `str`
- B. `int`
- C. `float`
- D. `bool`

### 10. ¿Cuál es una f-string válida?

- A. `"Hola, {nombre}"`
- B. `f"Hola, {nombre}"`
- C. `f(Hola, nombre)`
- D. `"Hola," f nombre`

## Parte B. Verdadero o falso

### 11. Un archivo de Python suele usar la extensión `.py`.

### 12. `"25"` y `25` tienen el mismo tipo.

### 13. El signo `=` permite asignar un valor.

### 14. Las comillas triples son la sintaxis oficial para comentarios multilínea.

### 15. Si un programa se ejecuta sin detenerse, necesariamente produce el resultado correcto.

### 16. Thonny permite trabajar localmente.

### 17. Una respuesta de IA debe probarse y comprenderse antes de utilizarla.

## Parte C. Producción breve

### 18. Explicá con tus palabras la diferencia entre *testing* y *debugging*.

### 19. Identificá entrada, procesamiento y salida:

> Un programa recibe el precio de una entrada y la cantidad comprada, calcula el total y lo muestra.

### 20. Escribí tres instrucciones que:

1. pidan un nombre;
2. lo guarden;
3. muestren un saludo mediante una f-string.

<details>
<summary>Ver respuestas y orientaciones</summary>

### Parte A

1. B  
2. B  
3. C  
4. D  
5. B  
6. C  
7. C  
8. B  
9. D  
10. B

### Parte B

11. Verdadero.  
12. Falso: `"25"` es `str` y `25` es `int`.  
13. Verdadero.  
14. Falso: crean cadenas multilínea; los comentarios normales usan `#`.  
15. Falso: puede contener un error lógico.  
16. Verdadero.  
17. Verdadero.

### Parte C

18. *Testing* consiste en realizar pruebas para descubrir errores; *debugging* consiste en localizar sus causas y corregirlas.

19. Entrada: precio y cantidad. Procesamiento: multiplicación. Salida: total.

20. Una respuesta posible:

```python
nombre = input("Ingresá tu nombre: ")
saludo = f"Hola, {nombre}"
print(saludo)
```

</details>

## Escala orientativa

Contá las respuestas correctas de las partes A y B:

- **15 a 17:** dominio sólido; podés realizar el desafío integrador.
- **12 a 14:** buen avance; revisá los errores antes de continuar.
- **8 a 11:** necesitás practicar entrada, variables y tipos.
- **0 a 7:** releé el tema por secciones y repetí las actividades 6 a 12.

La puntuación no reemplaza la revisión del programa integrador. Comprender y explicar el código es tan importante como responder correctamente.

---

## Síntesis

En este tema aprendimos que:

- programar implica comprender problemas y diseñar soluciones;
- un programa puede recibir entradas, procesarlas y producir salidas;
- hardware y software trabajan juntos para ejecutar el código;
- un algoritmo debe ser ordenado, preciso, no ambiguo y finito;
- probar y depurar son partes normales del desarrollo;
- Python es un lenguaje libre, multiplataforma y de propósito general;
- Thonny permite escribir y ejecutar programas localmente;
- `print()` muestra información;
- `input()` recibe texto;
- una variable es un nombre asociado con un valor;
- `str`, `int`, `float` y `bool` son tipos básicos;
- `type()` permite consultar un tipo;
- las f-strings insertan valores en textos;
- `\n`, `\t` y `#` ayudan a presentar y documentar el código;
- la documentación y la IA son herramientas de apoyo que deben usarse con criterio.

## Lista de control final

Antes de continuar, comprobá:

- [ ] Puedo explicar qué es un programa.
- [ ] Puedo reconocer entrada, procesamiento y salida.
- [ ] Puedo escribir un algoritmo claro.
- [ ] Puedo guardar y ejecutar un archivo `.py`.
- [ ] Puedo usar `print()` e `input()`.
- [ ] Puedo crear variables con nombres adecuados.
- [ ] Puedo reconocer cuatro tipos básicos.
- [ ] Puedo usar `type()` y una f-string.
- [ ] Puedo interpretar errores sencillos.
- [ ] Puedo explicar el código que escribí.

[Volver al inicio](../index.md)
