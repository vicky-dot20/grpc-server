import * as grpc from '@grpc/grpc-js';
import { GreeterService, IGreeterServer } from '../../../generated/helloworld_grpc_pb';
import { HelloRequest, HelloReply } from '../../../generated/helloworld_pb';

class GreeterServer implements IGreeterServer {
    [method: string]: grpc.UntypedHandleCall;
    public sayHello(call: grpc.ServerUnaryCall<HelloRequest, HelloReply>, callback: grpc.sendUnaryData<HelloReply>): void {
        const reply = new HelloReply();
        const greeting = `this is encrypted code: X3O8ZKfW3bEwcQB5UiZbS3DnLpwErbro2q29XsY/Cuk= , ${call.request.getName()} ${call.request.getTitle()}. ${call.request.getSubtitle()}  ${call.request.getUrlsList().join(', ')}`;
        reply.setMessage(greeting);
        callback(null, reply);
    }
}

function getServer(): grpc.Server {
    const server = new grpc.Server();
    server.addService(GreeterService, new GreeterServer());
    return server;
}

const server = getServer();
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
});
