export const test = (request, response) => {

        console.log(request);
        return response.status(212).send('Welcome to my domain bruh');
    
};