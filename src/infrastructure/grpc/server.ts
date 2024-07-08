import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { GreeterController } from '../../adapters/controllers/greeterController';
import { ProtoGrpcType } from './proto/helloworld';



const PROTO_PATH = __dirname + '/proto/helloworld.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoDescriptor = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const greeterController = new GreeterController();
const server = new grpc.Server();

server.addService(protoDescriptor.helloworld.Greeter.service, {
    SayHello: greeterController.sayHello,
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('gRPC server running at http://0.0.0.0:50051');
});
