git pull origin
docker stop server
docker rm server
docker image rm node/wx
docker build -t node/wx .
docker run --name server -d -p 80:80 node/wx
docker ps
docker logs server
