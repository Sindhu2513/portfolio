# Use Java 17
FROM openjdk:17

# Copy project
COPY . /app

WORKDIR /app

# Build project
RUN ./mvnw clean install -DskipTests

# Run app
CMD ["java", "-jar", "target/*.jar"]