#  Formulario de Registro con Validación en Tiempo Real

Este proyecto es un formulario de registro web interactivo construido con HTML, CSS y JavaScript Vanilla. Su característica principal es la validación de los campos de entrada en tiempo real utilizando Expresiones Regulares (Regex), proporcionando retroalimentación visual inmediata al usuario sobre si los datos ingresados cumplen con los requisitos.

##  Características

*   *Validación en Tiempo Real:* Evalúa los datos a medida que el usuario escribe (evento input).
*   *Expresiones Regulares (Regex):* Uso de patrones estrictos para asegurar la calidad de los datos.
*   *Retroalimentación Visual:* Cambio dinámico de clases CSS para indicar el estado (correcto/incorrecto) de cada campo y mostrar mensajes de ayuda cuando es necesario.
*   *Selección de Código de País:* Un menú desplegable que incluye una lista extensa de países con sus respectivos códigos telefónicos listos para ser integrados con la lógica del teléfono.
*   *Diseño Limpio:* Estructura de HTML organizada y semántica, lista para ser estilizada con CSS.

##  Tecnologías Utilizadas

*   *HTML5:* Estructura y semántica del formulario.
*   *CSS3:* Hoja de estilos para el diseño y estados de validación.
*   *JavaScript (Vanilla):* Lógica de validación, manipulación del DOM y manejo de eventos.

##  Reglas de Validación (Basadas en Regex)

El formulario implementa las bases para las siguientes validaciones:

*   *Nombre de Usuario y Contraseña:*
    *   Debe contener al menos 1 letra minúscula: (?=.*[a-z])
    *   Debe contener al menos 1 número: (?=.*[0-9])
    *   Longitud requerida: Entre 6 y 8 caracteres: .{6,8}
*   *Correo Electrónico:*
    *   Debe cumplir con un formato estándar válido (ej. usuario@dominio.com).
*   *Número de Teléfono:*
    *   Solo se permiten caracteres numéricos.
    *   Longitud esperada: Entre 6 y 16 dígitos: ^[0-9]{6,16}$

##  Estructura del Proyecto

*   index.html: Contiene la estructura del formulario, los campos de entrada, los mensajes de error y la lista de países.
*   styles.css: Archivo destinado a la apariencia visual del formulario, definiendo las clases de estado (ej. .correct, .incorrect).
*   script.js: Contiene las constantes Regex y la lógica de los event listeners para validar las entradas del usuario.

##  Áreas de Mejora / Tareas Pendientes

*   [ ] *Completar validaciones en JS:* Extender la lógica del addEventListener existente en el campo de usuario para abarcar el resto de los inputs (correo electrónico, teléfono, contraseña).
*   [ ] *Lógica del Código Telefónico:* Sincronizar la selección del país en el <select> con el texto del <span> (#phone-code) para mostrar el prefijo correspondiente automáticamente.
*   [ ] *Validación de Contraseñas:* Asegurar que el campo "confirmar contraseña" sea exactamente igual al campo "contraseña".
*   [ ] *Habilitar el botón de envío:* Crear una función global que verifique si todas las validaciones son verdaderas antes de habilitar el botón "Regístrate".
