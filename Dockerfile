FROM node

LABEL version="1.0"
LABEL description="This is the base docker image for the frontend of Holidayextras challenge"
LABEL maintainer = ["paulofelipperp.dev@gmail.com"]

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
