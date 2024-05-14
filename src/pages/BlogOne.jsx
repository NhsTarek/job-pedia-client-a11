import image1 from "../assets/images/How-a-refresh-token-is-generated-and-used-1.png"

const BlogOne = () => {
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
                            <p className="text-xl font-bold ">1. Access Token:</p>
                            </div>
                            <ul className="list-disc">
                            <li>An access token is a credential used by a client to access protected resources on behalf of a user.</li>
                            <li>It is typically short-lived and expires after a certain period, usually ranging from minutes to hours.</li>
                            <li>Access tokens are issued by an authorization server after the client successfully authenticates with valid credentials (e.g., username/password or through another authentication method like OAuth 2.0).</li>
                            <li>The client includes the access token in each request to the server's protected resources.</li>
                            <li>Access tokens are scoped and may only grant access to specific resources or actions based on the permissions granted to the client.</li>


                                
                            </ul>
                            <div className="bg-[#F0F0FA] p-5 rounded-md my-5">
                            <p className="text-xl font-bold ">2. Refresh Token:</p>
                            </div>
                            <ul className="list-disc">
                            <li>A refresh token is a credential used to obtain a new access token when the current access token expires.</li>
                            <li>Unlike access tokens, refresh tokens are long-lived and are used to obtain new access tokens without requiring the user to re-authenticate.</li>
                            <li>Refresh tokens are securely stored and exchanged with the authorization server to obtain a new access token.</li>
                            <li>They are typically used in conjunction with short-lived access tokens to enhance security by limiting the exposure of access tokens.</li>


                                
                            </ul>
                            <div className="bg-[#F0F0FA] p-5 rounded-md my-5">
                            <p className="text-xl font-bold ">How They Work:</p>
                            </div>
                            <ul className="list-disc">
                            <li>When a user authenticates, the server issues both an access token and a refresh token.</li>
                            <li>The client stores the access token and uses it to access protected resources.</li>
                            <li>When the access token expires, the client sends the refresh token to the authorization server to obtain a new access token.</li>
                            <li>The authorization server verifies the refresh token and issues a new access token if the refresh token is valid.</li>
                            <li>This process continues until the refresh token expires or is revoked.</li>


                                
                            </ul>
                            <div className="bg-[#F0F0FA] p-5 rounded-md my-5">
                            <p className="text-xl font-bold ">Where to Store Them on the Client Side:</p>
                            </div>
                            <ul className="list-disc">
                            <li>Access tokens and refresh tokens should be stored securely on the client side to prevent unauthorized access.</li>
                            <li className="ml-5 my-4 font-bold">Common storage options include:</li>
                            <li className="ml-5"><span className="text-base font-semibold">HTTP Cookies</span>: Store tokens in cookies with appropriate security flags (e.g., HttpOnly, Secure, SameSite) to prevent XSS attacks.</li>
                            <li className="ml-5"><span className="text-base font-semibold" >Web Storage</span>: Store tokens in local storage or session storage. However, be cautious as they are vulnerable to XSS attacks.</li>
                            <li className="ml-5"><span className="text-base font-semibold">Memory</span>: Store tokens in memory (e.g., JavaScript variables), but tokens stored in memory are not persistent across page reloads or browser sessions.</li>
                            <li>Choose the storage mechanism based on your security requirements and threat model. Always follow best practices for token storage and transmission to mitigate security risks.</li>


                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogOne;