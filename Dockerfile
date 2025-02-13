FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

# Instala OpenSSH
# RUN apk add --no-cache openssh

# Genera claves de host para SSH
# RUN ssh-keygen -A

# Configura SSH
# RUN mkdir -p /var/run/sshd && \
    # echo "PermitRootLogin yes" >> /etc/ssh/sshd_config && \
    # echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config

# Agrega un usuario para SSH
# RUN adduser -D -g '' appuser && \
    # echo "appuser:password" | chpasswd

# Asegura que los archivos copiados sean propiedad del usuario y grupo 
# node. Mejora la seguridad al evitar que el contenedor ejecute código como el usuario raíz.
COPY --chown=node:node package*.json .
# Asegura que los archivos copiados sean propiedad del usuario appuser
# COPY --chown=appuser:appuser package*.json .

RUN npm install
# Instala únicamente las dependencias necesarias para la ejecución en producción.
# RUN npm ci --only=production

# Copia los archivos de la aplicación.
COPY --chown=node:node ./src ./src

# Adding this line due views folder is outside of src (take in mind in the future for another app)
COPY --chown=node:node ./views ./views

# Copia los archivos de la aplicación
# COPY --chown=appuser:appuser ./src ./src
# COPY --chown=appuser:appuser ./views ./views

# Exponer el puerto SSH y el de la aplicación
# EXPOSE 22 3000

# Define el comando que ejecutará el contenedor cuando arranque
CMD ["node", "src/server.js"]
# Inicia SSH y la aplicación
# CMD ["/bin/sh", "-c", "/usr/sbin/sshd && node src/server.js"]