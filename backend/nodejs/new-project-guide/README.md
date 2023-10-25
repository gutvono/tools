1) iniciar node
	npm init

2) instalar dependencias:
	npm i express express-async-errors sequelize
	npm i --save-dev @types/express @types/node eslint nodemon sequelize-cli ts-node typescript

3) criar arquivo de configuração do typescript:
	tsc --init

4) iniciar configuração do eslint:
	npx eslint --init

	configurações adicionais no arquivo .eslintrc.js:
	rules: {
        // Defina a quantidade máxima de caracteres por linha
        'max-len': ['error', { code: 120 }],

        // Defina a configuração de identação (use 2 espaços no exemplo)
        'indent': ['error', tab],
    }
        
5) criar middleware de erro
	na pasta utils/http.exceptions.ts:
		class Exception extends Error {
			public statusCode: number;
			public message: string;

			constructor(status: number, message: string) {
				super(message);
				this.statusCode = status;
				this.message = message;
			}
		}

		export default Exception;
		
	na pasta middlewares/error.ts:
		import { ErrorRequestHandler } from 'express';
		import Exception from '../utils/http.exception';

		const ErrorMiddleware: ErrorRequestHandler = (err, req, res) => {
			if (err instanceof Exception) {
				return res.status(err.statusCode).json({ message: err.message });
			}

			return res.status(500).json({ message: err.message });
		};

		export default ErrorMiddleware;
		
		
	incluir this.app.use(ErrorMiddleware) no constructor do arquivo app.ts



6) criar as pastas do modelo mvc
	routes, controllers, services, interfaces
	
	
	
caso vá mexer com testes, acrescentar as dependências:
npm i jest
npm i --save-dev sinon mocha chai chai-http


