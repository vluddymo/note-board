FROM openjdk:16

ENV ENVIRONMENT=prod

MAINTAINER Wladislaw Moser <wladi.moser@gmail.com>

ADD backend/target/note-board.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI  -jar /app.jar"]
