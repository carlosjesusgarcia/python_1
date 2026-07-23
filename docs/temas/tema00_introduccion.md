# Tema 0: Introducción a la programación

En este tema vas a conocer qué significa programar, cómo se transforma un problema en un programa y qué herramientas usaremos durante la cursada. También vas a ejecutar tus primeras instrucciones en Python.

## Objetivos

Al terminar este tema vas a poder:

- explicar con tus palabras qué es programar;
- reconocer los componentes básicos de un programa;
- distinguir entre código fuente, intérprete y resultado;
- identificar las etapas principales del desarrollo de un programa;
- comprender qué es un algoritmo;
- escribir y ejecutar un primer programa en Python;
- usar `print()` para mostrar información;
- reconocer el valor y los límites de la inteligencia artificial al aprender programación.

## 1. ¿Qué es programar?

Programar consiste en diseñar y escribir instrucciones para que una computadora realice una tarea o resuelva un problema.

La computadora no interpreta intenciones ni completa por sí sola los pasos que faltan. Necesita instrucciones expresadas de forma clara, ordenada y mediante un lenguaje que pueda procesar.

Por ejemplo, podemos crear programas para:

- calcular el promedio de varias notas;
- registrar gastos del mes;
- buscar una película en una colección;
- organizar las reservas de una cancha;
- procesar respuestas de una encuesta;
- controlar el stock de un comercio;
- analizar información de redes sociales.

Programar no consiste solamente en escribir código. Antes de hacerlo hay que comprender el problema y diseñar una solución.

## 2. Componentes básicos de un programa

En un programa sencillo podemos reconocer tres componentes:

1. **Entrada:** datos que recibe el programa.
2. **Procesamiento:** operaciones que realiza con esos datos.
3. **Salida:** resultado que produce o muestra.

### Ejemplo

Una aplicación calcula cuánto debe pagar cada persona después de una cena.

- **Entrada:** importe total y cantidad de personas.
- **Procesamiento:** división del importe total por la cantidad de personas.
- **Salida:** importe que debe pagar cada persona.

```text
Entrada → Procesamiento → Salida
```

No todos los programas necesitan que una persona introduzca datos en el momento. La entrada también puede proceder de un archivo, un sensor, una base de datos u otro programa.

## 3. Del problema al programa

El desarrollo de un programa suele incluir las siguientes etapas:

1. **Definir el problema:** determinar qué necesidad se quiere resolver.
2. **Analizar el problema:** identificar los datos disponibles, las operaciones necesarias y el resultado esperado.
3. **Diseñar una estrategia:** ordenar los pasos de la solución.
4. **Escribir el algoritmo:** expresar la solución mediante instrucciones precisas y finitas.
5. **Codificar:** traducir el algoritmo a un lenguaje de programación.
6. **Probar:** ejecutar el programa con diferentes datos para encontrar errores.
7. **Depurar:** localizar la causa de los errores y corregirlos.
8. **Mantener y mejorar:** modificar el programa cuando aparecen nuevas necesidades.

### Ejemplo: consultar ingredientes de un producto

**Problema:** una persona quiere conocer los ingredientes de un producto antes de comprarlo.

**Entrada:** nombre o código del producto.

**Procesamiento:** búsqueda del producto en una colección de datos.

**Salida:** lista de ingredientes o aviso de que el producto no fue encontrado.

**Posible algoritmo:**

1. Solicitar el nombre o código del producto.
2. Buscar el producto.
3. Si existe, obtener sus ingredientes.
4. Mostrar los ingredientes.
5. Si no existe, informar que no fue encontrado.
6. Finalizar.

## 4. Algoritmos

Un **algoritmo** es una secuencia ordenada, precisa y finita de pasos que permite resolver un problema o realizar una tarea.

Un algoritmo debe ser:

- **ordenado:** sus pasos siguen una secuencia lógica;
- **preciso:** cada instrucción indica claramente qué debe hacerse;
- **finito:** termina después de una cantidad limitada de pasos;
- **eficaz:** conduce al resultado esperado.

Los algoritmos existen también fuera de la programación. Una receta, las indicaciones para llegar a un lugar o el procedimiento para retirar dinero de un cajero son ejemplos cotidianos.

### Ejemplo cotidiano

Algoritmo para viajar en subte:

1. Consultar qué línea permite llegar al destino.
2. Dirigirse a la estación de origen.
3. Ingresar con la tarjeta SUBE.
4. Verificar la dirección del recorrido.
5. Subir al tren correspondiente.
6. Bajar en la estación de destino.
7. Salir de la estación.
8. Finalizar.

Si falta el cuarto paso, una persona podría subir a la línea correcta, pero viajar en la dirección equivocada. El orden y la precisión importan.

## 5. Testing, debugging y bugs

Durante el desarrollo es normal que un programa no funcione correctamente en el primer intento.

- **Testing o prueba:** ejecución planificada del programa para comprobar su comportamiento y encontrar errores.
- **Debugging o depuración:** proceso de localizar la causa de un error y corregirla.
- **Bug:** defecto del programa que provoca un resultado incorrecto o inesperado.

Probar no significa ejecutar el programa una sola vez. Hay que usar datos normales, casos extremos y entradas inesperadas.

### Ejemplo

Si un programa divide el total de una cuenta entre la cantidad de personas, no alcanza con probar `48000` y `4`. También conviene comprobar qué sucede si la cantidad de personas es `1`, si se introduce `0` o si se escribe texto donde se esperaba un número.

## 6. ¿Qué es Python?

Python es un lenguaje de programación de propósito general. Se utiliza en educación, automatización, desarrollo web, ciencia de datos, inteligencia artificial, análisis de información y muchas otras áreas.

Durante la cursada lo usaremos porque:

- su sintaxis es relativamente clara;
- permite concentrarse en la lógica del problema;
- es libre y gratuito;
- funciona en Windows, Linux y macOS;
- posee documentación extensa;
- cuenta con una comunidad muy amplia;
- puede instalarse y utilizarse sin conexión permanente a Internet.

Python admite diferentes formas de organizar programas. En esta materia comenzaremos con programación imperativa: una secuencia de instrucciones que se ejecutan en un orden determinado.

## 7. Código fuente, intérprete y resultado

Cuando trabajamos con Python intervienen tres elementos:

1. **Código fuente:** instrucciones escritas por una persona en un archivo, normalmente con extensión `.py`.
2. **Intérprete de Python:** programa que procesa y ejecuta esas instrucciones.
3. **Resultado:** información mostrada o acción producida por el programa.

```text
Código fuente → Intérprete de Python → Resultado
```

Suele decirse que Python es un lenguaje interpretado. Esta explicación es útil como introducción, aunque el proceso interno real es más complejo: la implementación habitual de Python primero transforma el código en una representación intermedia y luego la ejecuta en una máquina virtual.

Por ahora, lo importante es comprender que necesitamos tener Python instalado o utilizar un entorno que ya lo incluya.

## 8. Herramientas para escribir Python

Un **IDE** —entorno de desarrollo integrado— reúne herramientas para escribir, ejecutar y depurar programas.

### Opción principal: Thonny

Thonny es una buena opción para comenzar porque:

- es gratuito;
- funciona localmente;
- su interfaz es sencilla;
- incluye una consola;
- permite ejecutar programas paso a paso;
- no exige mantener los archivos en la nube.

Sitio oficial: [https://thonny.org/](https://thonny.org/)

### Opción alternativa: Visual Studio Code

Visual Studio Code es un editor más completo y extensible. Para trabajar con Python necesita que instalemos Python y su extensión correspondiente.

- Python: [https://www.python.org/](https://www.python.org/)
- Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Opción temporal en línea: Google Colab

Google Colab permite ejecutar Python desde un navegador sin instalarlo. Puede ser útil si trabajamos desde un equipo ajeno o no podemos instalar programas.

Sin embargo, requiere conexión, una cuenta de Google y almacenamiento en Drive. Por eso no será nuestra única herramienta ni el lugar principal para conservar el trabajo.

Sitio: [https://colab.google/](https://colab.google/)

## 9. Primer programa

Escribí esta instrucción en Thonny o en el entorno que estés utilizando:

```python
print("Hola, mundo")
```

Al ejecutar el programa, la consola mostrará:

```text
Hola, mundo
```

`print()` es una función incorporada de Python que muestra información en la consola.

En este ejemplo:

- `print` es el nombre de la función;
- los paréntesis contienen la información que recibe;
- `"Hola, mundo"` es una cadena de texto;
- las comillas indican dónde comienza y termina el texto.

### Otros ejemplos

```python
print("Estoy aprendiendo Python")
print("Curso: Taller de Programación I")
print(2026)
```

La consola mostrará:

```text
Estoy aprendiendo Python
Curso: Taller de Programación I
2026
```

Python ejecuta estas instrucciones de arriba hacia abajo.

## 10. Errores frecuentes en el primer programa

### Olvidar una comilla

```python
print("Hola)
```

Python no puede determinar dónde termina el texto.

### Usar comillas tipográficas

```python
print(“Hola”)
```

Las comillas curvas de procesadores de texto no son válidas como delimitadores en Python. Debemos usar comillas rectas:

```python
print("Hola")
```

### Escribir mal el nombre de la función

```python
Print("Hola")
```

Python distingue mayúsculas de minúsculas. La función se llama `print`, no `Print`.

### Omitir un paréntesis

```python
print("Hola"
```

Todo paréntesis abierto debe cerrarse.

## 11. Comentarios

Un comentario permite explicar una parte del código. Python lo ignora al ejecutar el programa.

Los comentarios de una línea comienzan con `#`:

```python
# Este programa muestra un saludo
print("Hola")

print("Bienvenido")  # Comentario al final de una instrucción
```

Conviene escribir comentarios que expliquen una decisión o el propósito del código. No hace falta repetir literalmente lo que ya dice una instrucción clara.

Las comillas triples crean cadenas de varias líneas; no constituyen una sintaxis especial de comentario. Aunque a veces se usen como anotaciones, durante esta cursada utilizaremos `#` para escribir comentarios normales.

## 12. Caracteres especiales en textos

Dentro de una cadena podemos usar secuencias especiales:

- `\n` produce un salto de línea;
- `\t` produce una tabulación.

### Salto de línea

```python
print("Nombre: Martina\nCarrera: Publicidad")
```

Resultado:

```text
Nombre: Martina
Carrera: Publicidad
```

### Tabulación

```python
print("Producto\tPrecio")
print("Café\t3500")
```

Resultado aproximado:

```text
Producto    Precio
Café        3500
```

## 13. Documentación y fuentes de consulta

La documentación oficial es la referencia principal para conocer cómo funciona Python:

[Documentación oficial de Python en español](https://docs.python.org/es/3/)

La documentación contiene:

- un tutorial;
- referencias del lenguaje;
- documentación de funciones y módulos;
- guías de instalación y uso;
- índices y herramientas de búsqueda.

No es necesario memorizarla. Una habilidad importante consiste en aprender a buscar, leer ejemplos y verificar si una explicación corresponde a la versión de Python que usamos.

Otros recursos de apoyo:

- [Aprende con Alf](https://aprendeconalf.es/docencia/python/)
- [El Libro de Python](https://ellibrodepython.com/)

Cuando una respuesta proviene de un foro, un buscador o una inteligencia artificial, debemos contrastarla con la documentación y probar el código.

## 14. Inteligencia artificial y aprendizaje

Una herramienta de inteligencia artificial puede:

- explicar un concepto de otra manera;
- proponer ejemplos;
- ayudar a interpretar un mensaje de error;
- formular preguntas de práctica;
- revisar una solución ya razonada.

También puede:

- inventar funciones que no existen;
- producir código innecesariamente complejo;
- ocultar errores bajo una explicación convincente;
- resolver una actividad sin que el estudiante comprenda el procedimiento;
- usar contenidos que todavía no se trabajaron en clase.

Por eso, durante la cursada aplicaremos este criterio:

1. Comprender el problema.
2. Proponer una solución propia.
3. Usar la IA como apoyo, si hace falta.
4. Ejecutar y probar el código.
5. Verificar cada parte.
6. Ser capaz de explicar la solución sin depender de la respuesta generada.

Copiar código que no podemos explicar no equivale a aprender programación.

## Actividad 1: Entrada, procesamiento y salida

Identificá la entrada, el procesamiento y la salida en cada situación:

1. Una aplicación calcula el promedio de tres notas.
2. Un sistema informa el saldo disponible de una tarjeta SUBE.
3. Un programa calcula el precio final de una compra con descuento.
4. Una aplicación busca una película por título.

## Actividad 2: Ordenar el desarrollo

Ordená estas etapas:

- probar el programa;
- escribir el código;
- definir el problema;
- corregir los errores;
- diseñar el algoritmo;
- analizar las entradas y salidas.

## Actividad 3: Mejorar un algoritmo

Leé este algoritmo:

1. Viajar a la facultad.
2. Salir de casa.
3. Consultar cómo llegar.
4. Entrar al aula.

Respondé:

1. ¿El orden es correcto?
2. ¿Qué información resulta imprecisa?
3. Reescribí el algoritmo con al menos seis pasos.

## Actividad 4: Diseñar una solución

Elegí uno de estos problemas:

- dividir los gastos de una salida;
- buscar una película disponible en una biblioteca local;
- calcular cuánto saldo necesitás para varios viajes;
- registrar las materias aprobadas de una carrera.

Indicá:

1. problema;
2. datos de entrada;
3. procesamiento;
4. salida esperada;
5. algoritmo de al menos cinco pasos.

## Actividad 5: Primeras instrucciones

Escribí un programa que muestre, cada dato en una línea diferente:

- tu nombre;
- tu carrera;
- una actividad que te interese;
- el texto `Estoy aprendiendo Python`.

Usá cuatro instrucciones `print()`.

## Actividad 6: Corregir código

Cada línea contiene un error. Corregila:

```python
Print("Hola")
print(“Buenos Aires”)
print("Taller de Programación I"
print("Python)
```

## Actividad 7: Formato de salida

Usá `\n` y `\t` para intentar producir esta salida con una sola instrucción `print()`:

```text
Materia     Taller de Programación I
Lenguaje    Python
Modalidad   Presencial
```

## Actividad 8: Probar y depurar

Observá este programa:

```python
print("Cálculo del gasto por persona")
print(48000 / 4)
```

Respondé:

1. ¿Qué resultado esperás?
2. ¿Qué parte representa el procesamiento?
3. ¿Qué otros valores probarías?
4. ¿Qué problema aparecería si la cantidad de personas fuera cero?

## Autoevaluación

### 1. ¿Qué es un algoritmo?

- A. Un error que impide ejecutar un programa.
- B. Una secuencia ordenada, precisa y finita de pasos.
- C. Un programa que solo funciona en Internet.
- D. Un componente físico de la computadora.

### 2. ¿Qué etapa consiste en localizar y corregir la causa de un error?

- A. Entrada.
- B. Codificación.
- C. Debugging.
- D. Salida.

### 3. ¿Qué instrucción muestra texto en la consola?

- A. `show("Hola")`
- B. `print("Hola")`
- C. `Print("Hola")`
- D. `console("Hola")`

### 4. ¿Cuál es un comentario válido en Python?

- A. `// muestra un saludo`
- B. `<!-- muestra un saludo -->`
- C. `# muestra un saludo`
- D. `* muestra un saludo`

### 5. ¿Cuál es la mejor forma de usar una respuesta producida por IA?

- A. Copiarla sin ejecutarla.
- B. Entregarla si parece convincente.
- C. Verificarla, probarla y comprender cada parte.
- D. Reemplazar con ella toda la documentación.

<details>
<summary>Ver respuestas</summary>

1. B
2. C
3. B
4. C
5. C

</details>

## Síntesis

En este tema aprendimos que:

- programar implica analizar problemas y diseñar soluciones;
- un programa recibe datos, los procesa y produce resultados;
- un algoritmo es una secuencia ordenada, precisa y finita;
- probar y depurar forman parte normal del desarrollo;
- Python es un lenguaje libre, multiplataforma y de propósito general;
- `print()` permite mostrar información en la consola;
- `#` permite escribir comentarios;
- Thonny permite trabajar localmente y Colab puede servir como alternativa temporal;
- la documentación y la inteligencia artificial son recursos de apoyo que deben utilizarse de forma crítica.

En los temas siguientes profundizaremos en programas, algoritmos, tipos de datos, variables y operaciones.

[Volver al inicio](../index.md)
