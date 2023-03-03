# Solución 
`npm install` para obtener todas las dependencias
`npm run dev` en el directorio principal del proyecto 

## Vista previa
Puede escanear este QR para obtener una vista previa de la rama de **deploy** en su celular y comprobar la vista responsive, o ir a [éste enlace](https://todo-seven-cyan.vercel.app/) para visualizarlo desde su ordenador 

![todoproject](https://user-images.githubusercontent.com/24722106/222598555-aa519999-0cfc-4bb4-89b6-a3a1f55ac654.png)

# Prueba-CRD

Descripción de la prueba técnica  
La prueba técnica consiste en crear un sistema CRD (Create, Read, Delete) para una lista de tareas utilizando JavaScript en el FrontEnd. La aplicación debe tener un endpoint que se conecte a un servidor API para realizar las operaciones CRUD. La prueba puede completarse solo realizando las peticiones GET/POST, PUT/DELETE se tomarán como adicional.  

Requisitos  
Los estudiantes deben tener conocimientos básicos de HTML, CSS y JavaScript, así como familiaridad con el manejo de endpoints y la realización de peticiones a un servidor API.  

Pasos para completar la prueba técnica  
Crear una página HTML que incluya un formulario para agregar nuevas tareas. El formulario debe tener campos para ingresar el nombre de la tarea y la fecha de vencimiento. Presentar la informacion en una tabla y el boton de eliminar tenga al menos un efecto como ej. Button Hover. 

1.	Utilizar JavaScript para realizar una petición GET a un endpoint del servidor API y obtener la lista de tareas existentes.  

2.	Mostrar la lista de tareas obtenida del servidor en la página HTML.  

3.	Utilizar JavaScript para realizar una petición POST a un endpoint del servidor API y agregar una nueva tarea a la lista cuando se envíe el formulario de agregar tarea.  


4.	Utilizar JavaScript para realizar una petición DELETE a un endpoint del servidor API y eliminar una tarea existente cuando se haga clic en el botón de eliminar tarea.  

Recomendaciones adicionales  
Para facilitar la prueba técnica, se puede utilizar una librería o framework de JavaScript como jQuery o React.  

Se puede utilizar un servidor API preexistente o simularlo utilizando herramientas como JSONPlaceholder.  

Se pueden agregar funcionalidades adicionales a la aplicación, como validación de campos, filtros de búsqueda o paginación de la lista de tareas.  
  
Para obtener la lista de tareas existentes (método GET):  
•	Endpoint: https://jsonplaceholder.typicode.com/todos  
•	Respuesta esperada: un arreglo JSON que contenga la lista de tareas existentes. Cada tarea debe tener los siguientes campos:  
id: un número entero que identifica a la tarea.  
title: una cadena de texto con el nombre de la tarea.  
completed: un valor booleano que indica si la tarea está completada o no.  
  
Para agregar una nueva tarea (método POST):  
•	Endpoint: https://jsonplaceholder.typicode.com/todos  
•	Datos a enviar en el cuerpo de la petición: un objeto JSON que contenga los siguientes campos:  
title: una cadena de texto con el nombre de la tarea.  
completed: un valor booleano que indica si la tarea está completada o no.  
Respuesta esperada: un objeto JSON que contenga los siguientes campos:  
id: un número entero que identifica a la nueva tarea.  
title: una cadena de texto con el nombre de la tarea.  
completed: un valor booleano que indica si la tarea está completada o no.  
  
Para eliminar una tarea existente (método DELETE):  
•	Endpoint: https://jsonplaceholder.typicode.com/todos/{id} (reemplaza {id} con el id de la tarea que se desea eliminar)  
•	Respuesta esperada: un código de respuesta 200 si la tarea se eliminó exitosamente.  
