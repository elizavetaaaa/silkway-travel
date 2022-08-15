FROM node:14 as build
RUN ls -la
RUN mkdir -p /home/node/app/node_modules && chmod -R 777 /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
#CMD ["npm", "start"]


FROM nginx:stable-alpine
COPY --from=build /home/node/app/build /usr/share/nginx/html
ENV TZ=Asia/Bishkek
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
