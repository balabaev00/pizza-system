FROM node:16.13-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY docker/entrypoint /usr/local/bin/
RUN  chmod +x /usr/local/bin/entrypoint
ENTRYPOINT ["entrypoint"]
CMD ["npm", "run", "start:dev"]

FROM node:16.13-alpine as production
WORKDIR /app
COPY . .
# copy node_modules
COPY --from=development /app/node_modules /app/node_modules
# prodution only packages - app errors
RUN npm install --production
COPY --from=development /app/dist /app/dist
COPY docker/entrypoint /usr/local/bin/
RUN  chmod +x /usr/local/bin/entrypoint
ENTRYPOINT ["entrypoint"]
CMD ["npm", "run", "start:prod"]