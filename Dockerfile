FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY . .

# give permission
RUN chmod +x mvnw

# build project
RUN ./mvnw clean install -DskipTests

# run app
CMD ["java", "-jar", "target/portfolio-0.0.1-SNAPSHOT.jar"]