FROM openjdk:17

WORKDIR /app

COPY . .

# ✅ Give permission to mvnw
RUN chmod +x mvnw

# ✅ Build project
RUN ./mvnw clean install -DskipTests

# ✅ Run app
CMD ["java", "-jar", "target/*.jar"]