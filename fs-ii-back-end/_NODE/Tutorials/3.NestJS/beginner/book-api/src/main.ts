import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const PORT = process.env.PORT || 4000; // Use the PORT environment variable if set, or fallback to 3000
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
}
bootstrap();
