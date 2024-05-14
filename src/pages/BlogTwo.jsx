import image1 from "../assets/images/blog2.png"

const BlogTwo = () => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800 font-poppins">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={image1} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white dark:bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">What is an access token and refresh token & how they work?</a>
                            <p className="text-xs dark:text-gray-600">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                        <div className="bg-[#F0F0FA] p-5 rounded-md my-5">
                            <p className="text-xl font-bold ">1. Express.js:</p>
                            </div>
                            <ul className="list-disc">
                            <li>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.</li>
                            <li>It is designed for building single-page, multi-page, and hybrid web applications. Express.js simplifies the process of creating server-side logic and handling HTTP requests and responses. </li>
                            <li>It offers various features such as middleware support, routing, templating engines, and database integration, making it a popular choice for developers building web applications with Node.js.</li>
                            


                                
                            </ul>
                            <div className="bg-[#F0F0FA] p-5 rounded-md my-5">
                            <p className="text-xl font-bold ">2. NestJS:</p>
                            </div>
                            <ul className="list-disc">
                            <li>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.</li>
                            <li> It is built with TypeScript and heavily inspired by Angular, which makes it easy for Angular developers to transition to server-side development. NestJS uses an architecture based on modules, controllers, services, and decorators to organize code and provide a structured and maintainable codebase.</li>
                           
                            <li className="ml-5 my-4 font-bold">Key features of NestJS include:</li>
                            <li className="ml-5"><span className="text-base font-semibold">Modular architecture</span>: : NestJS promotes a modular structure for organizing code into reusable and testable modules.</li>
                            <li className="ml-5"><span className="text-base font-semibold" >Dependency injection</span>: NestJS provides built-in support for dependency injection, making it easy to manage dependencies and improve code maintainability.</li>
                            <li className="ml-5"><span className="text-base font-semibold">Middleware support</span>:  NestJS supports middleware for processing incoming requests and responses, enabling developers to add cross-cutting concerns such as logging, error handling, and authentication.</li>
                            <li className="ml-5"><span className="text-base font-semibold">GraphQL and REST APIs</span>: NestJS supports building both GraphQL and REST APIs, allowing developers to choose the API style that best fits their project requirements.</li>
                            <li className="ml-5"><span className="text-base font-semibold">Built-in testing utilities</span>: NestJS provides built-in testing utilities and support for various testing frameworks, making it easy to write unit and integration tests for applications.</li>
                            <li>Overall, NestJS aims to provide a productive and enjoyable development experience for building server-side applications with Node.js, leveraging TypeScript's static typing and modern JavaScript features.</li>

                                
                            </ul>
                           
                           
                           
                            
                            


                                
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTwo;