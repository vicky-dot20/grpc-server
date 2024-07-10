// sayHelloUseCase.ts
import { Hello } from '../../domain/entities/hello'; // Make sure the import path matches your project structure

export class SayHelloUseCase {
    execute(request: Hello): any {
        return request.getStructuredGreeting();
    }
}
