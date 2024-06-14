# HTTP Crash Course

## Overview
Hypertext Transfer Protocol (HTTP) is the foundation of data communication on the World Wide Web. It defines the structure of requests and responses between clients (typically browsers) and servers.

## Metadata
HTTP metadata is additional information sent along with requests and responses. It serves various purposes, including caching, authentication, and state management. Metadata is conveyed through headers.

## Key-Value Pairs
Metadata is structured as key-value pairs, and it is sent in the form of headers.

## Common Uses

- Caching: Controls how responses are cached.
- Authentication: Manages authentication credentials.
- State Management: Maintains state between the client and server (e.g., cookies).

## x- Prefix
Historically, headers with the `x-` prefix were used for non-standard, experimental purposes. As of 2012, this prefix has been deprecated.

## HTTP Headers
### Request Headers (Client to Server)
Request headers are sent from the client to the server, providing information about the request or the client itself.

Examples:

- `Host`: Specifies the domain name of the server.
- `User-Agent`: Contains information about the client's browser and operating system.
- `Accept`: Indicates the content types the client can process.

## Response Headers (Server to Client)
Response headers are sent from the server to the client, conveying information about the server or the response.

Examples:

- `Server`: Identifies the server software.
- `Date`: Indicates the date and time at which the response was generated.
- `Content-Type`: Specifies the MIME type of the returned content.

## Representation Headers
Representation headers provide information about the data's encoding, compression, and format.

Examples:

- `Content-Encoding`: Indicates any encodings applied to the data (e.g., gzip).
- `Content-Language`: Specifies the language of the intended audience.

## Payload Headers
Payload headers describe the data being transferred, which could be the request body or the response body.

Examples:

- `Content-Length`: Indicates the size of the payload in bytes.
- `Content-Disposition`: Provides information on how to handle the payload (e.g., attachment).


## HTTP Methods
HTTP defines several request methods that indicate the desired action to be performed on the identified resource.

- `GET`: Requests a representation of the specified resource. Requests using GET should only retrieve data.
- `POST`: Submits data to be processed to a specified resource.
- `PUT`: Uploads a representation of the specified resource.
- `DELETE`: Deletes the specified resource.
- `HEAD`: Same as GET but does not return the body, only headers.
- `OPTIONS`: Returns the HTTP methods that the server supports for the specified URL.
- `PATCH`: Applies partial modifications to a resource.

## Status Codes

HTTP status codes are issued by a server in response to a client's request. They are divided into five categories:

- 1xx (Informational): Request received, continuing process.
- 2xx (Success): The action was successfully received, understood, and accepted.
- - 200 OK: The request was successful.
- - 201 Created: The request was successful and a new resource was created.
- 3xx (Redirection): Further action needs to be taken to complete the request.
- - 301 Moved Permanently: The resource has been moved to a new URL permanently.
- - 302 Found: The resource resides temporarily under a different URL.
- 4xx (Client Error): The request contains bad syntax or cannot be fulfilled.
- - 400 Bad Request: The server cannot process the request due to client error.
- - 404 Not Found: The requested resource could not be found.
- 5xx (Server Error): The server failed to fulfill an apparently valid request.
- - 500 Internal Server Error: The server encountered an unexpected condition.
- - 503 Service Unavailable: The server is currently unable to handle the request.

# #Conclusion
Understanding HTTP headers and status codes is crucial for web development and troubleshooting. Headers provide essential metadata, while status codes help identify the result of the HTTP request.






