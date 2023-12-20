FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -f

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine

EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/angular-app.conf /etc/nginx/conf.d
COPY --from=builder /app/nginx/nginx.conf /etc/nginx

CMD ["nginx", "-g", "daemon off;"]