import { SayHelloUseCase } from "./src/domain/usecases/sayHellowUseCase";
import { Hello } from "./src/domain/entities/hello";


// Create an instance of Hello with dummy data
const hello = new Hello(
    'John Doe',
    'Our Great Service',
    'Explore our features today!',
    ['http://example.com', ' ', 'http://example.org']
);

// Create an instance of SayHelloUseCase
const sayHelloUseCase = new SayHelloUseCase();

// Execute the use case with the hello instance and log the output
const result = sayHelloUseCase.execute(hello);
console.log(result);
