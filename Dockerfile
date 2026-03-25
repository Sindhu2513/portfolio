# Use Java 17
FROM eclipse-temurin:17-jdk

# Copy project
COPY . /app

WORKDIR /app

RUN chmod +x ./mvnw

# Build project
RUN ./mvnw clean install -DskipTests

# Run app
CMD ["java", "-jar", "target/*.jar"]