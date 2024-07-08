
import * as grpc from '@grpc/grpc-js';
import { SayHelloUseCase } from '../../domain/usecases/sayHellowUseCase';

export class GreeterController {
    private sayHelloUseCase: SayHelloUseCase;

    constructor() {
        this.sayHelloUseCase = new SayHelloUseCase();
    }

    sayHello: grpc.handleUnaryCall<any, any> = (call, callback) => {
        const response = this.sayHelloUseCase.execute({ name: call.request.name });
        callback(null, { message: response });
    };
}
