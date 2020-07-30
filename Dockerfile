FROM node

# set a working directory
WORKDIR /app

# add app
COPY . ./

# install app dependencies
RUN npm ci

# expose the following port
EXPOSE 3001

# star app
CMD ["npm", "start"]