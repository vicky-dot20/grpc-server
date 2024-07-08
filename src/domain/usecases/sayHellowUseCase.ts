import { Hello } from '../entities/hello';

export class SayHelloUseCase {
    execute(request: Hello): string {
        return `Hello000 vickygdfswfuygf3u, ${request.name}!`;
    }
}
