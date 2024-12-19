FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

# Asegura que los archivos copiados sean propiedad del usuario y grupo 
# node. Mejora la seguridad al evitar que el contenedor ejecute código como el usuario raíz.
COPY --chown=node:node package*.json .

RUN npm install
# Instala únicamente las dependencias necesarias para la ejecución en producción.
# RUN npm ci --only=production

# Copia los archivos de la aplicación.
COPY --chown=node:node ./src ./src

# Adding this line due views folder is outside of src (take in mind in the future for another app)
COPY --chown=node:node ./views ./views

# Define el comando que ejecutará el contenedor cuando arranque
CMD ["node", "src/server.js"]