import { Application, Request, Response, Router } from 'express';

function logErrors(err: any, req: Request, res: Response, next: any)
{
    // tslint:disable-next-line:no-console
    console.error(err.stack);
    next(err);
}

function errorHandler(err: any, req: Request, res: Response, next: any)
{
    res.status(500);
    res.render('error', { error: err });
}

function manageError(err: any, req: Request, res: Response, next: any)
{
    if (err.constructor) {
        const errorName = err.constructor.name;

        // tslint:disable-next-line:no-console
        console.log('error: ' + errorName);
        // tslint:disable-next-line:no-console
        console.log(err);

        const isLocal =
            req.connection.remoteAddress &&
            ['localhost', '::1', '127.0.0.1'].includes(
                req.connection.remoteAddress
            );

        const stack = isLocal ? err.stack!.split('\n') : undefined;

        res.status(400).send({
            error: err,
            errorName,
            stack
        });
    } else {
      next(err);
    }
}

export { logErrors, errorHandler, manageError };
