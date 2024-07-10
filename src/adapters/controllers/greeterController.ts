import * as grpc from '@grpc/grpc-js';

import { SayHelloUseCase } from '../../domain/usecases/sayHellowUseCase';
import { HelloRequest, HelloReply } from '../../../generated/helloworld_pb';
import { Hello } from '../../domain/entities/hello';

export class GreeterController {
    private sayHelloUseCase: SayHelloUseCase;

    constructor() {
        this.sayHelloUseCase = new SayHelloUseCase();
    }

    sayHello: grpc.handleUnaryCall<HelloRequest, HelloReply> = (call, callback) => {
        const hello = new Hello(call.request.getName(), call.request.getTitle(), call.request.getSubtitle(), call.request.getUrlsList());
        const responseMessage = this.sayHelloUseCase.execute(hello);
        const reply = new HelloReply();
        reply.setMessage(responseMessage);
        callback(null, reply);
    };
}
