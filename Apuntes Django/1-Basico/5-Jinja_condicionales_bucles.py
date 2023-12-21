#Para bucles (recordar pasar la informacion en el contexto)
# <body>
#     <h1>Hola!</h1>
#     <ul>
#         {% for nombre in nombres %} <= Aquí
#         <li>{{nombre}}</li>
#         {% endfor %} <= Cuanto termina el bucle
#     </ul>
# </body>

#Para condicionales
# <body>
#     <h1>Hola!</h1>
#     <ul>
#         {% for nombre in nombres %}
#         {% if nombre == 'Nahuel'%}
#         <li>{{nombre}}</li>
#         {% endif %}
#         {% endfor %}
#     </ul>
# </body>