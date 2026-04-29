FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY . .

WORKDIR /app/ai-calling-agent

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "/app/ai-calling-agent/target/ai-calling-agent-0.0.1-SNAPSHOT.jar"]