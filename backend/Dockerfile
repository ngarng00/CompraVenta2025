# 1. Imagen base de Go
FROM golang:1.24-alpine AS builder

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar go.mod y go.sum
COPY go.mod go.sum ./

# 4. Descargar dependencias
RUN go mod download

# 5. Copiar todo el código
COPY . .

# 6. Compilar binario
RUN go build -o compraVenta ./cmd/CompraVenta

# 7. Imagen final para ejecutar
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/compraVenta .
EXPOSE 8080
CMD ["./compraVenta"]
