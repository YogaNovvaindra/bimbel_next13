# Use a minimal base image
FROM node:lts-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies separately for better caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js app as a standalone application
RUN npm run build

# Use a smaller base image for runtime
FROM node:lts-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/ ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./.env

# Copy standalone server files
COPY --from=builder /app/.next/standalone ./

# Expose environment variables
ENV DATABASE_URL=mysql://root:abogoboga@10.1.1.13:3306/nextlinear
ENV NEXTAUTH_URL=http://localhost:3000

# Define upload volume
VOLUME ["/app/upload"]

# Expose application port
EXPOSE 3000

# Start Next.js standalone server
CMD ["node", "server.js"]
