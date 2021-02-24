let PostModel = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        }
    },
    "xml": {
        "name": "Posts"
    }
}

// let UserModel = {
//     "type": "object",
//     "properties": {
//         "name": {
//             "type": "string"
//         },
//         "email": {
//             "type": "string"
//         },
//         "password": {
//             "type": "string"
//         },
//         "phone": {
//             "type": "string"
//         }
//     },
//     "xml": {
//         "name": "User"
//     }
// }

// let RoleModel = {
//     "type": "object",
//     "properties": {
//         "_id": {
//             "type": "string"
//         },
//         "name": {
//             "type": "string"
//         },
//         "role": {
//             "type": "string"
//         },
//         "description": {
//             "type": "string"
//         },
//         "user": {
//             "type": "string"
//         }
//     },
//     "xml": {
//         "name": "Role"
//     }
// }

// let swaggerSettings= {
//     "swagger": "2.0",
//     "info": {
//         "title": "TestJet",
//         "description": "",
//         "version": "1.0"
//     },
//     "produces": [
//         "application/json"
//     ],
    
// }

let tags = [
    // {
    //     "name": "user",
    //     "description": "Operations about user",
    //     "externalDocs": {
    //         "description": "Find out more about our user",
    //         // "url": "http://swagger.io"
    //     }
    // },
    // {
    //     "name": "role",
    //     "description": "Operations about role",
    //     "externalDocs": {
    //         "description": "Find out more about our role",
    //         // "url": "http://swagger.io"
    //     }
    // }
    {
        "name": "posts",
        "description": "Operations of posts",
        "externalDocs": {
            "description": "Find out more about our role",
            // "url": "http://swagger.io"
        }
    }
]

// let authSigninPost = {
//     "post": {
//         "tags": [
//             "user"
//         ],
//         "summary": "Signin User",
//         "description": "This can only be done by the logged in user.",
//         "operationId": "SigninUser",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Created user object",
//                 "required": true,
//                 "schema": {
//                     "properties": {
//                         "username": {
//                             "type": "string"
//                         },
//                         "password": {
//                             "type": "string"
//                         }
//                     }
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             },
//             "404": {
//                 "description": "Not Found"
//             }
//         }
//     }
// }

// let authSignupPost = {
//     "post": {
//         "tags": [
//             "user"
//         ],
//         "summary": "Create user",
//         "description": "This can only be done by the logged in user.",
//         "operationId": "CreateUser",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Created user object",
//                 "required": true,
//                 "schema": {
//                     "$ref": "#/definitions/User"
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             }
//         }
//     }
// }

let addPost = {
    "post": {
        "tags": [
            "posts"
        ],
        "summary": "Add a Post",
        "description": "This can add a post",
        "operationId": "AddPost",
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json",
            "application/xml"
        ],
        "parameters": [
            {
                "in": "path",
                "name": "title",
                "description": "This can add a post",
                "required": true,
                // "format": "string",
                "schema": {
                    "$ref": "#/definitions/Posts"
                }
            },
            {
                "in": "path",
                "name": "description",
                "description": "This can add a post",
                "required": true,
                // "format": "string",
                "schema": {
                    "$ref": "#/definitions/Posts"
                }
            }
        ],
        "responses": {
            "default": {
                "description": "successful operation"
            },
            "200": {
                "description": "Success"
            },
            "401": {
                "description": "Unauthorized"
            }
        }
    }
}

let getPosts = {
    "get": {
        "tags": [
            "posts"
        ],
        "summary": "All Posts",
        "description": "This can view all posts.",
        "operationId": "GetPosts",
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json",
            "application/xml"
        ],
        
        "responses": {
            "default": {
                "description": "successful operation"
            },
            "200": {
                "description": "Success"
            }
        }
    }
}

// let authLogout = {
//     "post": {
//         "tags": [
//             "user"
//         ],
//         "summary": "Logout user",
//         "description": "This can only be done by the logout user.",
//         "operationId": "LogoutUser",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Logout user object",
//                 "required": true,
//                 "schema": {
//                     "properties": {
//                         "token": {
//                             "type": "string"
//                         }
//                     }
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             }
//         }
//     }
// }

// let roleList = {
//     "get": {
//         "tags": [
//             "role"
//         ],
//         "summary": "Role List",
//         "description": "This can only be done by assign roles.",
//         "operationId": "RolesList",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
        
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             }
//         }
//     }
// }

// let roleSave = {
//     "post": {
//         "tags": [
//             "role"
//         ],
//         "summary": "Create Role",
//         "description": "This can only be done by assign roles.",
//         "operationId": "CreateRoles",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Created role object",
//                 "required": true,
//                 "schema": {
//                     "$ref": "#/definitions/Role"
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             }
//         }
//     }
// }

// let roleUpdate = {
//     "put": {
//         "tags": [
//             "role"
//         ],
//         "summary": "Update Role",
//         "description": "This can only be done by update roles.",
//         "operationId": "UpdateRoles",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Created role object",
//                 "required": true,
//                 "schema": {
//                     "$ref": "#/definitions/Role"
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             }
//         }
//     }
// }

// let roleDelete = {
//     "delete": {
//         "tags": [
//             "role"
//         ],
//         "summary": "Delete Role",
//         "description": "This can only be done by delete roles.",
//         "operationId": "DeleteRoles",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Created role object",
//                 "required": true,
//                 "schema": {
//                     "properties": {
//                         "_id": {
//                             "type": "string",
//                             "required": true
//                         }
//                     }
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             }
//         }
//     }
// }

// let roleAssign = {
//     "put": {
//         "tags": [
//             "role"
//         ],
//         "summary": "Role Assign",
//         "description": "This can only be done by assign roles.",
//         "operationId": "Assign Roles",
//         "consumes": [
//             "application/json"
//         ],
//         "produces": [
//             "application/json",
//             "application/xml"
//         ],
//         "parameters": [
//             {
//                 "in": "body",
//                 "name": "body",
//                 "description": "Assign role object",
//                 "required": true,
//                 "schema": {
//                     "properties": {
//                         "user_id": {
//                             "type": "string"
//                         },
//                         "role": {
//                             "type": "array",
//                             "items":{
//                                 "type": "string"
//                             }
//                         }
//                     }
//                 }
//             }
//         ],
//         "responses": {
//             "default": {
//                 "description": "successful operation"
//             },
//             "200": {
//                 "description": "Success"
//             },
//             "401": {
//                 "description": "Unauthorized"
//             }
//         }
//     }
// }


module.exports = {
    
    swaggerObj: () => {
        return {
            "swagger": "2.0",
            "info": {
                "title": "Posts",
                "description": "",
                "version": "1.0"
            },
            "produces": [
                "application/json"
            ],
            "schemes": [
                "http",
                "https"
            ],
            "tags": tags,
            "paths": {
                // "/auth/signin": authSigninPost,
                // "/auth/signup": authSignupPost,
                // "/auth/logout": authLogout,
                "/api/posts/add": addPost,
                "/api/posts": getPosts,
                // "/roles/list": roleList,
                // "/roles/save": roleSave,
                // "/roles/update": roleUpdate,
                // "/roles/delete": roleDelete,
                // "/roles/assign": roleAssign,
            },
        
            "securityDefinitions": {
                "api_key": {
                    "type": "apiKey",
                    "name": "api_key",
                    "in": "header"
                },
                "petstore_auth": {
                    "type": "oauth2",
                    "authorizationUrl": "https://petstore.swagger.io/oauth/authorize",
                    "flow": "implicit",
                    "scopes": {
                        "read:pets": "read your pets",
                        "write:pets": "modify pets in your account"
                    }
                }
            },
        
            "definitions": {
                // "User": UserModel,
                // "Role": RoleModel,
                "Posts": PostModel
            },
            "externalDocs": {
                "description": "Find out more about Swagger",
                "url": "http://swagger.io"
            }
        }
    },
}
// module.exports = swaggerObj = () =>{
    
// }
