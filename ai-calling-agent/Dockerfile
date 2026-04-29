FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY ai-calling-agent/ .   # 🔥 IMPORTANT FIX

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/*.jar"]