/**
 * Example Controller for the Overnight web-framework.
 *
 * created by Sean Maxwell Aug 26, 2018
 */

import { Request, Response }                  from 'express'
import { cinfo, cerr }                        from 'simple-color-print'
import { Controller, Get, Post, Put, Delete } from '@overnight/core'
import { getJwtMiddleware }                   from './Middlware'


@Controller('api/users')
export default class UserController
{

    @Get(':id')
    get(req: Request, res: Response): any
    {
        this.printUrl(req)
        return res.status(200).json({msg: 'get_called'})
    }

    @Get('', getJwtMiddleware())
    private getAll(req: Request, res: Response): void
    {
        cinfo(req)
        res.status(200).json({msg: 'get_all_called'})
    }

    @Post()
    private add(req: Request, res: Response): void
    {
        cinfo(req.body)
        res.status(200).json({msg: 'add_called'})
    }

    @Put('update-user')
    private update(req: Request, res: Response): void
    {
        cinfo(req.body)
        res.status(200).json({msg: 'update_called'})
    }

    @Delete('delete/:id')
    private delete(req: Request, res: Response): void
    {
        cinfo(req.params)
        res.status(200).json({msg: 'delete_called'})
    }

    private printUrl(req: Request): void
    {
        cinfo(req.originalUrl + ' called')
    }
}